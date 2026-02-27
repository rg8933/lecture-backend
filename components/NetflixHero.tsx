import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const NetflixHero = ({ title, imageUrl }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUrl} style={styles.heroImage}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)', 'black']}
          style={styles.gradient}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name="play" size={24} color="black" />
                <Text style={styles.playText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoButton}>
                <Ionicons name="information-circle-outline" size={24} color="white" />
                <Text style={styles.infoText}>Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 450,
    width: '100%',
  },
  heroImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    height: '60%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  playButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
  },
  playText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },
  infoButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
  },
  infoText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  },
});
