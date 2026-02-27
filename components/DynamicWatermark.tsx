import React, { useEffect, useRef } from 'react';
import { Animated, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DynamicWatermark = ({ userInfo }) => {
  const moveAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    const startAnimation = () => {
      const randomX = Math.random() * (width - 150);
      const randomY = Math.random() * (height - 50);

      Animated.timing(moveAnim, {
        toValue: { x: randomX, y: randomY },
        duration: 5000 + Math.random() * 5000,
        useNativeDriver: false, // Position needs layout
      }).start(() => startAnimation());
    };

    startAnimation();
  }, []);

  return (
    <Animated.View style={[styles.watermark, moveAnim.getLayout()]}>
      <Text style={styles.text}>{userInfo}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  watermark: {
    position: 'absolute',
    padding: 10,
    zIndex: 9999,
    pointerEvents: 'none',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
