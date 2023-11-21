import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Sentadillas = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/sentadillas.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Sentadillas</Text>
      <Text style={styles.description}>
        Las sentadillas son un ejercicio efectivo para fortalecer los músculos de las piernas y glúteos. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Mantén la espalda recta y el peso en los talones al bajar.</Text>
      <Text>- Baja hasta que tus muslos estén paralelos al suelo, si es posible.</Text>
      <Text>- Asegúrate de que tus rodillas no se desplacen hacia adelante de los pies.</Text>
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

export default Sentadillas;
