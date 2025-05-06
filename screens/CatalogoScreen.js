// screens/CatalogoScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function CatalogoScreen({ navigation }) {
  const [historias, setHistorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistorias() {
      const querySnapshot = await getDocs(collection(db, 'catalogo'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistorias(data);
      setLoading(false);
    }

    fetchHistorias();
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" color="#999" />;

  return (
    <FlatList
      data={historias}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Historia', { historia: item })}
        >
          <Image source={{ uri: item.imagemURL }} style={styles.image} />
          <Text style={styles.titulo}>{item.titulo}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    flexShrink: 1,
  },
});

