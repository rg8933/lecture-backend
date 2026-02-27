import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const LectureCard = ({ item, subjectId }: { item: any, subjectId: string }) => {
  const router = useRouter();
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => router.push(`/player/${item.id}`)}
    >
      <Image 
        source={{ uri: item.thumbnailUrl || 'https://via.placeholder.com/160x90/111/fff?text=Lecture' }} 
        style={styles.thumbnail} 
      />
      <Text style={styles.lectureTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
    </TouchableOpacity>
  );
};

export const LectureRow = ({ title, lectures, id }: { title: string, lectures: any[], id: string }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push(`/subject/${id}`)}>
        <Text style={styles.rowTitle}>{title} <Ionicons name="chevron-forward" size={16} color="#aaa" /></Text>
      </TouchableOpacity>
      <FlatList
        data={lectures}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LectureCard item={item} subjectId={id} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  rowTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  listContent: {
    paddingLeft: 20,
    gap: 15,
  },
  card: {
    width: 160,
  },
  thumbnail: {
    width: 160,
    height: 90,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  lectureTitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
  },
  duration: {
    color: '#999',
    fontSize: 12,
  },
});
