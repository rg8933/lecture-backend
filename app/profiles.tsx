import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const PLATFORMS = [
  { id: '1', name: 'Marrow', icon: 'medical', color: '#5e35b1', route: '/(tabs)' },
  { id: '2', name: 'Prepladder', icon: 'book', color: '#ff9800', route: '/(tabs)' },
  { id: '3', name: 'E-Gurukul', icon: 'school', color: '#2196f3', route: '/(tabs)' },
  { id: '4', name: 'Other', icon: 'apps', color: '#757575', route: '/(tabs)' },
];

export default function PlatformSelectionScreen() {
  const router = useRouter();

  const handleProfileSelect = (platformId: string) => {
    router.push(`/(tabs)?platformId=${platformId}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Choose your platform</Text>
      
      <View style={styles.profileGrid}>
        {PLATFORMS.map((platform) => (
          <TouchableOpacity 
            key={platform.id} 
            style={styles.profileContainer}
            onPress={() => handleProfileSelect(platform.id === '1' ? 'marrow' : platform.id === '2' ? 'prepladder' : platform.id === '3' ? 'egurukul' : 'other')}
          >
            <View style={[styles.iconContainer, { backgroundColor: platform.color }]}>
              <Ionicons name={platform.icon as any} size={60} color="white" />
            </View>
            <Text style={styles.profileName}>{platform.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>MANAGE PLATFORMS</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutButtonText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 40,
  },
  profileGrid: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    marginBottom: 50,
  },
  profileContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileName: {
    color: '#8c8c8c',
    fontSize: 16,
    fontWeight: '500',
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#8c8c8c',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#8c8c8c',
    letterSpacing: 2,
    fontSize: 14,
  },
  logoutButton: {
    paddingVertical: 10,
  },
  logoutButtonText: {
    color: '#e50914',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
