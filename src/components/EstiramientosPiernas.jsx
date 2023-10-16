import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EstiramientosPiernas = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/estiramientopiernas.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Estiramientos de Piernas</Text>
      <Text style={styles.description}>
        Los estiramientos de piernas son ejercicios fundamentales para mejorar la flexibilidad y reducir la tensión muscular. Aquí tienes algunos consejos para realizar estos estiramientos:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Realiza cada estiramiento de forma suave y controlada.</Text>
      <Text>- Mantén la posición de estiramiento durante al menos 15-30 segundos.</Text>
      <Text>- Respira profundamente y relaja los músculos durante el estiramiento.</Text>
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

export default EstiramientosPiernas
