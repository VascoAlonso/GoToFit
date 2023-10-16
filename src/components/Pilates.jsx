import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Pilates = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/pilates.jpeg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Pilates</Text>
      <Text style={styles.description}>
        El Pilates es un método de ejercicio que se centra en fortalecer los músculos, mejorar la postura y aumentar la flexibilidad. Aquí tienes algunos principios básicos del Pilates:
      </Text>
      <Text style={styles.tip}>Principios del Pilates:</Text>
      <Text>- Concentración: Presta atención a cada movimiento con conciencia.</Text>
      <Text>- Control: Realiza los ejercicios de manera controlada y precisa.</Text>
      <Text>- Centro: Engage los músculos centrales para estabilidad y fuerza.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  exerciseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  tip: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Pilates
