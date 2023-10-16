import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

const RutinaFuerza = () => {
  const data = [
    { id: '1', name: 'Levantamiento de pesas', route: 'LevantamientoPesas', image: require('../images/levantamientopesas.jpeg') },
    { id: '2', name: 'Flexiones', route: 'Flexiones', image: require('../images/flexiones.jpg') },
    { id: '3', name: 'Press de banca', route: 'PressBanca', image: require('../images/pressbanca.jpg') }
    // ... otros ejercicios
  ];

  const renderExerciseItem = ({ item }) => (
    <Link to={`/${item.route}`} component={TouchableOpacity} style={styles.link}>
      <View style={styles.exerciseItem}>
        <Image source={item.image} style={styles.exerciseImage} />
        <Text style={styles.exerciseName}>{item.name}</Text>
      </View>
    </Link>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalles de la Rutina de Fuerza</Text>
      <Text style={styles.description}>
        Esta rutina de fuerza te ayudará a desarrollar masa muscular y fuerza. Incluye ejercicios como levantamiento de pesas, flexiones y press de banca.
      </Text>
      <Text style={styles.subtitle}>Ejercicios:</Text>
      {data.map(item => renderExerciseItem({ item }))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  exerciseItem: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden'
  },
  exerciseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  link: {
    marginVertical: 5,
  }
});

export default RutinaFuerza
