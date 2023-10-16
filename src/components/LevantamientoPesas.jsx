import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LevantamientoPesas = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/levantamientopesas.jpeg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Levantamiento de Pesas</Text>
      <Text style={styles.description}>
        El levantamiento de pesas es un ejercicio efectivo para desarrollar fuerza y masa muscular. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Utiliza una técnica adecuada para cada levantamiento.</Text>
      <Text>- Comienza con un peso moderado y aumenta gradualmente.</Text>
      <Text>- Asegúrate de calentar antes de levantar pesas para prevenir lesiones.</Text>
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

export default LevantamientoPesas
