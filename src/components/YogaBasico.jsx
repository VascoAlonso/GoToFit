import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const YogaBasico = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/yogabasico.jpeg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Yoga Básico</Text>
      <Text style={styles.description}>
        El yoga básico es una práctica que combina posturas físicas, respiración y meditación para mejorar la flexibilidad, la fuerza y la relajación. Aquí tienes algunos consejos para comenzar con yoga básico:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Comienza con posturas simples y avanza gradualmente.</Text>
      <Text>- Presta atención a tu respiración y practica la respiración consciente.</Text>
      <Text>- Escucha a tu cuerpo y no fuerces ninguna postura.</Text>
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

export default YogaBasico
