import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PressBanca = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/pressbanca.jpg')} style={styles.exerciseImage} />
      <Text style={styles.title}>Press de Banca</Text>
      <Text style={styles.description}>
        El press de banca es un ejercicio clásico para fortalecer los músculos del pecho y los tríceps. Aquí tienes algunos consejos para realizar este ejercicio:
      </Text>
      <Text style={styles.tip}>Consejos:</Text>
      <Text>- Utiliza una barra y un banco adecuados para el ejercicio.</Text>
      <Text>- Asegúrate de tener un compañero de entrenamiento al levantar pesas pesadas.</Text>
      <Text>- Mantén una forma adecuada para evitar lesiones.</Text>
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

export default PressBanca
