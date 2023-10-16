import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SaltoCuerda = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/saltocuerda.jpeg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Saltos de Cuerda</Text>
      <Text style={styles.description}>
        Los saltos de cuerda son un ejercicio cardiovascular excelente para mejorar la coordinación y la resistencia. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Mantén una cuerda del tamaño adecuado para ti.</Text>
      <Text>- Aterriza suavemente para reducir el impacto en las articulaciones.</Text>
      <Text>- Comienza con un ritmo moderado y aumenta la velocidad gradualmente.</Text>
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

export default SaltoCuerda
