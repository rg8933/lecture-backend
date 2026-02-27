import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, Dimensions, ActivityIndicator, Platform } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

import { lectureDatabase } from '@/constants/lectures';
import { ThemedView } from '@/components/ThemedView';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function PlayerScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [resizeMode, setResizeMode] = useState(ResizeMode.CONTAIN);

  useEffect(() => {
    if (Platform.OS === 'web') {
      const style = document.createElement('style');
      style.textContent = `
        html, body, #root, [data-reactroot] {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  // Find the lecture across all subjects
  let lecture = null;
  if (lectureDatabase && lectureDatabase.subjects) {
    for (const subject of lectureDatabase.subjects) {
      lecture = subject.lectures.find(l => l.id === id);
      if (lecture) break;
    }
  }

  if (!lecture) {
    return (
      <ThemedView style={styles.container}>
        <Text style={styles.errorText}>Lecture not found</Text>
      </ThemedView>
    );
  }

  const togglePlayback = () => {
    if (status && 'isPlaying' in status && status.isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
  };

  const handleSeek = (seconds: number) => {
    if (status && 'positionMillis' in status) {
      videoRef.current?.setPositionAsync(status.positionMillis + seconds * 1000);
    }
  };

  const toggleResizeMode = () => {
    setResizeMode(prev => {
      if (prev === ResizeMode.CONTAIN) return ResizeMode.COVER;
      if (prev === ResizeMode.COVER) return ResizeMode.STRETCH;
      return ResizeMode.CONTAIN;
    });
  };

  const toggleFullscreen = async () => {
    if (Platform.OS === 'web') {
      try {
        if (!document.fullscreenElement) {
          await (document.documentElement as any).requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          }
        }
      } catch (err: any) {
        console.log(`Fullscreen error: ${err.message}`);
      }
    } else {
      toggleResizeMode();
    }
  };

  const getResizeIcon = () => {
    if (resizeMode === ResizeMode.CONTAIN) return "expand";
    if (resizeMode === ResizeMode.COVER) return "scan";
    return "contract";
  };

  const isStatusValid = status && 'positionMillis' in status && 'durationMillis' in status;
  const position = isStatusValid ? (status as any).positionMillis : 0;
  const duration = isStatusValid ? (status as any).durationMillis : 0;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar hidden />
      
      <Video
        ref={videoRef}
        style={styles.video}
        videoStyle={styles.videoContent}
        source={{
          uri: (lecture as any).url || 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 
        }}
        useNativeControls={false}
        resizeMode={resizeMode}
        isLooping={false}
        onPlaybackStatusUpdate={status => setStatus(status)}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        shouldPlay
      />

      {/* Overlay Controls */}
      <TouchableOpacity 
        activeOpacity={1} 
        style={styles.overlay} 
        onPress={() => setShowControls(!showControls)}
      >
        {showControls && (
          <View style={styles.controlsContainer}>
            {/* Top Bar */}
            <View style={styles.topBar}>
              <View style={{ width: 40 }} /> 
              <Text style={styles.videoTitle} numberOfLines={1}>{(lecture as any).title}</Text>
              <View style={styles.topActionGroup}>
                <TouchableOpacity onPress={toggleResizeMode} style={{ padding: 10 }}>
                  <Ionicons name={getResizeIcon()} size={28} color="white" />
                </TouchableOpacity>
                {Platform.OS === 'web' && (
                  <TouchableOpacity onPress={toggleFullscreen} style={{ padding: 10, marginLeft: 10 }}>
                    <Ionicons name="desktop-outline" size={26} color="white" />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Center Controls */}
            <View style={styles.centerControls}>
              <TouchableOpacity onPress={() => handleSeek(-10)}>
                <Ionicons name="refresh-outline" size={60} color="white" style={{ transform: [{ scaleX: -1 }] }} />
                <Text style={styles.seekText}>10</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
                <Ionicons 
                  name={status && 'isPlaying' in status && status.isPlaying ? "pause" : "play"} 
                  size={84} 
                  color="white" 
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleSeek(10)}>
                <Ionicons name="refresh-outline" size={60} color="white" />
                <Text style={styles.seekText}>10</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Bar (Progress) */}
            <View style={styles.bottomBar}>
                <View style={styles.progressBar}>
                    <View style={[
                        styles.progressInner, 
                        { width: duration > 0 ? `${(position / duration) * 100}%` : '0%' }
                    ]} />
                </View>
                <View style={styles.timeInfo}>
                    <Text style={styles.timeText}>
                        {formatTime(position)}
                    </Text>
                    <Text style={styles.timeText}>
                        {formatTime(duration)}
                    </Text>
                </View>
            </View>
          </View>
        )}
      </TouchableOpacity>

      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#e50914" />
        </View>
      )}

      {/* Persistent Overlay Back Button */}
      <TouchableOpacity 
        style={styles.persistentBackButton} 
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.replace('/(tabs)');
          }
        }}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

function formatTime(millis: number) {
  const totalSeconds = Math.floor(millis / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'web' ? '100vw' : SCREEN_WIDTH,
    height: Platform.OS === 'web' ? '100vh' : SCREEN_HEIGHT,
    position: 'relative',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  videoContent: {
    width: '100%',
    height: '100%',
  },
  persistentBackButton: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 100,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    zIndex: 10,
  },
  controlsContainer: {
    flex: 1,
    padding: 40,
    paddingTop: 100,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topActionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  centerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
  },
  playButton: {
    padding: 10,
  },
  seekText: {
    color: 'white',
    position: 'absolute',
    top: 24,
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomBar: {
      width: '100%',
      paddingBottom: 20,
  },
  progressBar: {
      height: 8,
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 4,
      marginBottom: 15,
  },
  progressInner: {
      height: '100%',
      backgroundColor: '#e50914',
      borderRadius: 4,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  errorText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
