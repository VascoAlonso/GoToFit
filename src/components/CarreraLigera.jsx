import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CarreraLigera = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/carreraligera.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Carrera Ligera</Text>
      <Text style={styles.description}>
        La carrera ligera es un ejercicio cardiovascular efectivo para mejorar la resistencia y quemar calorías. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Asegúrate de mantener una buena postura.</Text>
      <Text>- Utiliza calzado adecuado para correr.</Text>
      <Text>- Comienza con un ritmo moderado y aumenta la intensidad gradualmente.</Text>
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

export default CarreraLigera