import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Platform as RNPlatform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { supabase } from '@/lib/supabase';

export default function AdminScreen() {
  const [currentView, setCurrentView] = useState<'platforms' | 'years' | 'subjects'>('platforms');
  const [selectedPlatform, setSelectedPlatform] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<any>(null);
  
  // Platform add states
  const [newPlatformName, setNewPlatformName] = useState('');
  
  // Year add states
  const [newYearName, setNewYearName] = useState('');

  // Subject add states
  const [subjectName, setSubjectName] = useState('');
  const [channelLink, setChannelLink] = useState('');
  
  const [platforms, setPlatforms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('platforms')
        .select('*, years(*, subjects(*))');
      
      if (error) throw error;
      setPlatforms(data || []);
    } catch (e: any) {
      Alert.alert('Error', 'Failed to fetch data: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // 1. Save Platforms
      for (const p of platforms) {
        await supabase.from('platforms').upsert({ id: p.id, name: p.name });
        
        // 2. Save Years
        for (const y of p.years) {
          await supabase.from('years').upsert({ 
            id: y.id, 
            platform_id: p.id, 
            name: y.name 
          });
          
          // 3. Save Subjects
          for (const s of y.subjects) {
            await supabase.from('subjects').upsert({ 
              id: s.id, 
              year_id: y.id, 
              name: s.name, 
              link: s.link 
            });
          }
        }
      }
      
      Alert.alert('Success', 'Changes saved to Supabase!');
    } catch (e: any) {
      Alert.alert('Error', 'Failed to save: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlatform = () => {
    if (newPlatformName) {
      const newP = {
        id: newPlatformName.toLowerCase().replace(/\s+/g, '-'),
        name: newPlatformName,
        years: []
      };
      setPlatforms([...platforms, newP]);
      setNewPlatformName('');
      Alert.alert('Success', 'Platform added!');
    }
  };

  const handleSelectPlatform = (p: any) => {
    setSelectedPlatform(p);
    setCurrentView('years');
  };

  const handleAddYear = () => {
    if (newYearName && selectedPlatform) {
      const newY = {
        id: newYearName.toLowerCase().replace(/\s+/g, '-'),
        name: newYearName,
        subjects: []
      };
      
      const updatedPlatforms = platforms.map(p => {
        if (p.id === selectedPlatform.id) {
          return { ...p, years: [...p.years, newY] };
        }
        return p;
      });
      
      setPlatforms(updatedPlatforms);
      setSelectedPlatform({ ...selectedPlatform, years: [...selectedPlatform.years, newY] });
      setNewYearName('');
      Alert.alert('Success', 'Year added to platform!');
    }
  };

  const handleSelectYear = (y: any) => {
    setSelectedYear(y);
    setCurrentView('subjects');
  };

  const handleAddSubject = () => {
    if (subjectName && channelLink && selectedPlatform && selectedYear) {
      const newS = {
        id: subjectName.toLowerCase().replace(/\s+/g, '-'),
        name: subjectName,
        lectures: [],
        link: channelLink // Persist for saving
      };
      
      const updatedYears = selectedPlatform.years.map((y: any) => {
        if (y.id === selectedYear.id) {
          return { ...y, subjects: [...y.subjects, newS] };
        }
        return y;
      });

      const updatedPlatform = { ...selectedPlatform, years: updatedYears };
      
      setPlatforms(platforms.map(p => p.id === selectedPlatform.id ? updatedPlatform : p));
      setSelectedPlatform(updatedPlatform);
      setSelectedYear({ ...selectedYear, subjects: [...selectedYear.subjects, newS] });
      
      setSubjectName('');
      setChannelLink('');
      Alert.alert('Success', 'Subject added to year!');
    }
  };

  const handleSync = async (name: string) => {
    try {
      setLoading(true);
      const baseUrl = process.env.EXPO_PUBLIC_SYNC_URL || 'http://localhost:5005';
      const response = await fetch(`${baseUrl}/sync`, { method: 'POST' });
      const res = await response.json();
      if (res.status === 'success') {
        Alert.alert('Sync Started', `Syncing lectures for ${name} has been initiated in the background! It will reflect in the app shortly.`);
      } else {
        throw new Error(res.message);
      }
    } catch (e: any) {
      Alert.alert('Error', 'Failed to trigger sync: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  const movePlatform = (index: number, direction: 'up' | 'down') => {
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= platforms.length) return;
    const newPlatforms = [...platforms];
    [newPlatforms[index], newPlatforms[newIdx]] = [newPlatforms[newIdx], newPlatforms[index]];
    setPlatforms(newPlatforms);
  };

  const moveYear = (index: number, direction: 'up' | 'down') => {
    if (!selectedPlatform) return;
    const years = selectedPlatform.years;
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= years.length) return;

    const newYears = [...years];
    [newYears[index], newYears[newIdx]] = [newYears[newIdx], newYears[index]];
    
    const updatedPlatform = { ...selectedPlatform, years: newYears };
    setSelectedPlatform(updatedPlatform);
    setPlatforms(platforms.map(p => p.id === selectedPlatform.id ? updatedPlatform : p));
  };

  const moveSubject = (index: number, direction: 'up' | 'down') => {
    if (!selectedYear || !selectedPlatform) return;
    const subjects = selectedYear.subjects;
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= subjects.length) return;

    const newSubjects = [...subjects];
    [newSubjects[index], newSubjects[newIdx]] = [newSubjects[newIdx], newSubjects[index]];
    
    const updatedYear = { ...selectedYear, subjects: newSubjects };
    setSelectedYear(updatedYear);

    const updatedYears = selectedPlatform.years.map((y: any) => y.id === selectedYear.id ? updatedYear : y);
    const updatedPlatform = { ...selectedPlatform, years: updatedYears };
    
    setSelectedPlatform(updatedPlatform);
    setPlatforms(platforms.map(p => p.id === selectedPlatform.id ? updatedPlatform : p));
  };

  const renderPlatformsView = () => (
    <View style={styles.viewContainer}>
      <View style={styles.glassCard}>
        <Text style={styles.cardTitle}>Add New Platform</Text>
        <TextInput
          style={styles.input}
          placeholder="Platform Name (e.g., Marrow)"
          placeholderTextColor="#8c8c8c"
          value={newPlatformName}
          onChangeText={setNewPlatformName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddPlatform}>
          <Text style={styles.addButtonText}>Create Platform</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Available Platforms</Text>
      {platforms.map((p, index) => (
        <View key={p.id} style={styles.platformItemContainer}>
          <TouchableOpacity 
            style={styles.platformItem}
            onPress={() => handleSelectPlatform(p)}
          >
            <View style={styles.platformIcon}>
              <Ionicons name="apps-outline" size={24} color="white" />
            </View>
            <View style={styles.platformInfo}>
              <Text style={styles.platformName}>{p.name}</Text>
              <Text style={styles.platformStats}>{p.years.length} Years</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#555" />
          </TouchableOpacity>
          <View style={styles.reorderContainer}>
            <TouchableOpacity onPress={() => movePlatform(index, 'up')} disabled={index === 0}>
              <Ionicons name="chevron-up" size={24} color={index === 0 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => movePlatform(index, 'down')} disabled={index === platforms.length - 1}>
              <Ionicons name="chevron-down" size={24} color={index === platforms.length - 1 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderYearsView = () => (
    <View style={styles.viewContainer}>
      <TouchableOpacity 
        style={styles.breadcrumb}
        onPress={() => setCurrentView('platforms')}
      >
        <Ionicons name="chevron-back" size={16} color="#e50914" />
        <Text style={styles.breadcrumbText}>Back to Platforms</Text>
      </TouchableOpacity>

      <Text style={styles.viewTitle}>{selectedPlatform?.name}</Text>

      <View style={styles.glassCard}>
        <Text style={styles.cardTitle}>Add New Year Group</Text>
        <TextInput
          style={styles.input}
          placeholder="Year Label (e.g., 1st Year)"
          placeholderTextColor="#8c8c8c"
          value={newYearName}
          onChangeText={setNewYearName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddYear}>
          <Text style={styles.addButtonText}>Add Year</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Year Groups</Text>
      {selectedPlatform?.years.map((y: any, index: number) => (
        <View key={y.id} style={styles.platformItemContainer}>
          <TouchableOpacity 
            style={styles.platformItem}
            onPress={() => handleSelectYear(y)}
          >
            <View style={styles.platformIcon}>
              <Ionicons name="calendar-outline" size={24} color="white" />
            </View>
            <View style={styles.platformInfo}>
              <Text style={styles.platformName}>{y.name}</Text>
              <Text style={styles.platformStats}>{y.subjects.length} Subjects</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#555" />
          </TouchableOpacity>
          <View style={styles.reorderContainer}>
            <TouchableOpacity onPress={() => moveYear(index, 'up')} disabled={index === 0}>
              <Ionicons name="chevron-up" size={24} color={index === 0 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => moveYear(index, 'down')} disabled={index === selectedPlatform.years.length - 1}>
              <Ionicons name="chevron-down" size={24} color={index === selectedPlatform.years.length - 1 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderSubjectsView = () => (
    <View style={styles.viewContainer}>
      <TouchableOpacity 
        style={styles.breadcrumb}
        onPress={() => setCurrentView('years')}
      >
        <Ionicons name="chevron-back" size={16} color="#e50914" />
        <Text style={styles.breadcrumbText}>Back to Years</Text>
      </TouchableOpacity>

      <Text style={styles.viewTitle}>{selectedYear?.name} Subjects</Text>

      <View style={styles.glassCard}>
        <Text style={styles.cardTitle}>Add Subject to {selectedYear?.name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Subject Name"
          placeholderTextColor="#8c8c8c"
          value={subjectName}
          onChangeText={setSubjectName}
        />
        <TextInput
          style={styles.input}
          placeholder="Telegram Link"
          placeholderTextColor="#8c8c8c"
          value={channelLink}
          onChangeText={setChannelLink}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddSubject}>
          <Text style={styles.addButtonText}>Add Subject</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Subjects</Text>
      {selectedYear?.subjects.map((s: any, index: number) => (
        <View key={s.id} style={styles.subjectItemContainer}>
          <View style={styles.subjectItem}>
            <View style={styles.subjectHeader}>
              <Text style={styles.subjectNameText}>{s.name}</Text>
              <TouchableOpacity style={styles.syncBtn} onPress={() => handleSync(s.name)}>
                <Ionicons name="sync" size={16} color="white" />
                <Text style={styles.syncBtnText}>Sync</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.reorderContainer}>
            <TouchableOpacity onPress={() => moveSubject(index, 'up')} disabled={index === 0}>
              <Ionicons name="chevron-up" size={24} color={index === 0 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => moveSubject(index, 'down')} disabled={index === selectedYear.subjects.length - 1}>
              <Ionicons name="chevron-down" size={24} color={index === selectedYear.subjects.length - 1 ? "#222" : "#8c8c8c"} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'platforms': return renderPlatformsView();
      case 'years': return renderYearsView();
      case 'subjects': return renderSubjectsView();
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1a1a', '#000']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Ionicons name="power" size={24} color="#e50914" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>CONTROL CENTER</Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.content}>
        {loading && !platforms.length ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#e50914" />
          </View>
        ) : (
          renderContent()
        )}
      </ScrollView>
      {loading && platforms.length > 0 && (
        <View style={styles.overlayLoading}>
          <ActivityIndicator size="large" color="#e50914" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerGradient: {
    paddingTop: RNPlatform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 4,
  },
  saveText: {
    color: '#46d369',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  content: {
    padding: 20,
  },
  viewContainer: {
    flex: 1,
  },
  glassCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginBottom: 30,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 12,
  },
  addButton: {
    backgroundColor: '#e50914',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#e50914',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  platformItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  platformItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 12,
    flex: 1,
    borderWidth: 1,
    borderColor: '#222',
  },
  reorderContainer: {
    marginLeft: 10,
    gap: 5,
    justifyContent: 'center',
  },
  platformIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  platformInfo: {
    flex: 1,
  },
  platformName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  platformStats: {
    color: '#8c8c8c',
    fontSize: 14,
    marginTop: 2,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  breadcrumbText: {
    color: '#e50914',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  viewTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subjectItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  subjectItem: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 15,
    flex: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#e50914',
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectNameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  syncBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 6,
  },
  syncBtnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  overlayLoading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});
