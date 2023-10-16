import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Flexiones = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/flexiones.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Flexiones</Text>
      <Text style={styles.description}>
        Las flexiones son un ejercicio clásico que fortalece los músculos del pecho, tríceps y hombros. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Mantén el cuerpo alineado desde la cabeza hasta los pies.</Text>
      <Text>- Controla el descenso y el ascenso para maximizar el beneficio.</Text>
      <Text>- Modifica la dificultad ajustando la posición de las manos.</Text>
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

export default Flexiones
