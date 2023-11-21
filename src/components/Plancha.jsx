import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Plancha = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/plancha.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Plancha</Text>
      <Text style={styles.description}>
        La plancha es un excelente ejercicio para fortalecer el core y mejorar la estabilidad. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Mantén el cuerpo en línea recta desde la cabeza hasta los talones.</Text>
      <Text>- Contracción continua de los músculos abdominales durante el ejercicio.</Text>
      <Text>- Evita levantar o hundir la cadera, mantén una posición neutral.</Text>
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

export default Plancha;
