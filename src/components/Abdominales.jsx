import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Abdominales = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/abdominales.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Abdominales</Text>
      <Text style={styles.description}>
        Los abdominales son un ejercicio focalizado en fortalecer los músculos del abdomen. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Mantén una buena postura para evitar tensiones en el cuello.</Text>
      <Text>- Exhala al subir y mantén contraídos los músculos abdominales.</Text>
      <Text>- Evita tirar del cuello, utiliza los músculos abdominales para levantar el torso.</Text>
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

export default Abdominales;
