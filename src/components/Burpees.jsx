import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Burpees = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/burpees.jpeg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Burpees</Text>
      <Text style={styles.description}>
        Los burpees son un ejercicio de cuerpo completo que combina fuerza, resistencia y movimientos cardiovasculares. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Realiza cada fase del burpee con control.</Text>
      <Text>- Aterriza suavemente para reducir el impacto en las rodillas.</Text>
      <Text>- Mantén una buena alineación del cuerpo durante todo el ejercicio.</Text>
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

export default Burpees
