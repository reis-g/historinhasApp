// screens/HistoriaScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export default function HistoriaScreen({ route }) {
  const { historia } = route.params;

  async function tocarAudio() {
    const { sound } = await Audio.Sound.createAsync({ uri: historia.audioURL });
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: historia.imagemURL }} style={styles.image} />
      <TouchableOpacity style={styles.audioBtn} onPress={tocarAudio}>
        <Text style={{ fontWeight: 'bold' }}>🔊 Ouvir História</Text>
      </TouchableOpacity>
      <ScrollView style={styles.textContainer}>
        <Text style={styles.texto}>{historia.texto}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, resizeMode: 'cover' },
  audioBtn: {
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  textContainer: { flex: 1, marginHorizontal: 10 },
  texto: { fontSize: 16, lineHeight: 24 },
});

