import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Platform, TouchableOpacity } from 'react-native';
import * as ScreenCapture from 'expo-screen-capture';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { NetflixHero } from '@/components/NetflixHero';
import { LectureRow } from '@/components/LectureRow';
import { ThemedView } from '@/components/ThemedView';
import { DynamicWatermark } from '@/components/DynamicWatermark';

import { supabase } from '@/lib/supabase';

export default function HomeScreen() {
  const { platformId } = useLocalSearchParams();
  const [userEmail, setUserEmail] = useState('user@mbbs.edu');
  const router = useRouter();
  const [platform, setPlatform] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlatformData();
    
    // Privacy Protection
    if (Platform.OS !== 'web' && ScreenCapture.preventScreenCaptureAsync) {
      ScreenCapture.preventScreenCaptureAsync();
    }
    
    return () => {
      if (Platform.OS !== 'web' && ScreenCapture.allowScreenCaptureAsync) {
        ScreenCapture.allowScreenCaptureAsync();
      }
    };
  }, [platformId]);

  const fetchPlatformData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('platforms')
        .select(`
          id,
          name,
          years (
            id,
            name,
            subjects (
              id,
              name,
              lectures (
                id,
                title,
                duration,
                url,
                thumbnail_url
              )
            )
          )
        `)
        .eq('id', platformId || 'marrow')
        .single();

      if (error) throw error;
      
      setPlatform(data);
    } catch (e) {
      console.error('Error fetching data:', e);
    } finally {
      setLoading(false);
    }
  };

  const years = platform?.years || [];

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <DynamicWatermark userInfo={`${userEmail} - 123.45.67.89`} />

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.push('/profiles')}
      >
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logoutIcon} 
        onPress={() => router.replace('/login')}
      >
        <Ionicons name="log-out-outline" size={28} color="white" />
      </TouchableOpacity>
            
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#e50914" />
          </View>
        ) : (
          <>
            <NetflixHero 
              title={`${platform?.name || 'Loading...'} Lectures`} 
              imageUrl={{ uri: 'https://via.placeholder.com/600x400/111/fff?text=MBBS+LECTURES' }} 
            />
            
            <View style={styles.rowsContainer}>
              {years.map((year: any) => (
                <View key={year.id} style={styles.yearSection}>
                  <Text style={styles.yearHeaderText}>{year.name}</Text>
                  {year.subjects.map((subject: any) => (
                    <LectureRow 
                      key={subject.id} 
                      id={subject.id}
                      title={subject.name} 
                      lectures={subject.lectures} 
                    />
                  ))}
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

import { Text, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
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
  yearSection: {
    marginBottom: 20,
  },
  yearHeaderText: {
    color: '#e50914',
    fontSize: 22,
    fontWeight: '800',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  logoutIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
    zIndex: 10,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  rowsContainer: {
    marginTop: -20, // Overlap a bit with hero gradient
  },
});
