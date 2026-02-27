import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { supabase } from '@/lib/supabase';
import { ActivityIndicator } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function SubjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [subject, setSubject] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchSubjectDetails();
  }, [id]);

  const fetchSubjectDetails = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('subjects')
        .select(`
          *,
          lectures (*)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      
      // Adapt structure
      const formattedSubject = {
        ...data,
        lectures: data.lectures.map((l: any) => ({
          ...l,
          thumbnailUrl: l.thumbnail_url
        }))
      };

      setSubject(formattedSubject);
    } catch (e) {
      console.error('Error fetching subject details:', e);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e50914" />
      </ThemedView>
    );
  }

  if (!subject) {
    return (
      <ThemedView style={styles.container}>
        <Text style={styles.errorText}>Subject not found</Text>
      </ThemedView>
    );
  }

  const renderEpisodeItem = ({ item, index }: { item: any, index: number }) => (
    <TouchableOpacity 
      style={styles.episodeItem}
      onPress={() => router.push(`/player/${item.id}`)}
    >
      <View style={styles.episodeMain}>
        <View style={styles.numberContainer}>
          <Text style={styles.episodeNumber}>{index + 1}</Text>
        </View>
        <Image 
          source={{ uri: item.thumbnailUrl || `https://via.placeholder.com/160x90/111/fff?text=Lecture+${index+1}` }} 
          style={styles.episodeThumbnail} 
        />
        <View style={styles.episodeInfo}>
          <Text style={styles.episodeTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.episodeDuration}>{item.duration}</Text>
        </View>
        <Ionicons name="download-outline" size={24} color="#fff" />
      </View>
      <Text style={styles.episodeDescription} numberOfLines={2}>
        Comprehensive lecture on {item.title}. Part of the {subject.name} series.
      </Text>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen options={{ 
        headerShown: false
      }} />

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

      <ScrollView stickyHeaderIndices={[1]}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/600x400/111/fff?text=' + subject.name }} 
            style={styles.bannerImage} 
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
            style={styles.gradient}
          />
          
          <View style={styles.subjectInfo}>
            <Text style={styles.subjectName}>{subject.name}</Text>
            <View style={styles.metaContainer}>
              <Text style={styles.matchText}>98% Match</Text>
              <Text style={styles.yearText}>2024</Text>
              <View style={styles.hdContainer}>
                <Text style={styles.hdText}>HD</Text>
              </View>
            </View>
            
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={24} color="black" />
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sticky Header Section */}
        <View style={styles.subHeader}>
          <View style={styles.activeTabContainer}>
            <Text style={styles.activeTabText}>EPISODES</Text>
            <View style={styles.activeTabUnderline} />
          </View>
          <Text style={styles.inactiveTabText}>MORE LIKE THIS</Text>
        </View>

        {/* Episode List */}
        <View style={styles.episodesContainer}>
          <Text style={styles.seasonText}>Volume 1</Text>
          {subject.lectures.map((item, index) => (
            <View key={item.id}>
              {renderEpisodeItem({ item, index })}
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  bannerContainer: {
    height: 350,
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
    zIndex: 10,
  },
  subjectInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  subjectName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  matchText: {
    color: '#46d369',
    fontWeight: 'bold',
    marginRight: 10,
  },
  yearText: {
    color: '#a3a3a3',
    marginRight: 10,
  },
  hdContainer: {
    borderWidth: 1,
    borderColor: '#4d4d4d',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  hdText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
  },
  playButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subHeader: {
    backgroundColor: '#000',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingTop: 10,
  },
  activeTabContainer: {
    marginRight: 30,
    paddingVertical: 10,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  activeTabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#e50914',
  },
  inactiveTabText: {
    color: '#a3a3a3',
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingVertical: 10,
  },
  episodesContainer: {
    padding: 20,
  },
  seasonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  episodeItem: {
    marginBottom: 25,
  },
  episodeMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  numberContainer: {
    width: 30,
  },
  episodeNumber: {
    color: '#a3a3a3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  episodeThumbnail: {
    width: 120,
    height: 70,
    borderRadius: 4,
    marginRight: 15,
  },
  episodeInfo: {
    flex: 1,
    marginRight: 10,
  },
  episodeTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  episodeDuration: {
    color: '#a3a3a3',
    fontSize: 12,
  },
  episodeDescription: {
    color: '#a3a3a3',
    fontSize: 13,
    lineHeight: 18,
  },
});
