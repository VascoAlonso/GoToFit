import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

const RutinaRecomendada = () => {
  const data = [
    { id: '1', name: 'Saltos de cuerda', route: 'SaltoCuerda', image: require('../images/saltocuerda.jpeg') },
    { id: '2', name: 'Carrera ligera', route: 'CarreraLigera', image: require('../images/carreraligera.jpg') },
    { id: '3', name: 'Burpees', route: 'Burpees', image: require('../images/burpees.jpeg') },
    { id: '4', name: 'Sentadillas', route: 'Sentadillas', image: require('../images/sentadillas.jpg') },
    { id: '5', name: 'Plancha', route: 'Plancha', image: require('../images/plancha.jpg') },
    { id: '6', name: 'Estiramientos de piernas', route: 'EstiramientosPiernas', image: require('../images/estiramientopiernas.jpg') }
    // ... otros ejercicios
  ];

  const renderExerciseItem = ({ item }) => (
    <Link key={item.id} to={`/${item.route}`} component={TouchableOpacity} style={styles.link}>
      <View style={styles.exerciseItem}>
        <Image source={item.image} style={styles.exerciseImage} />
        <Text style={styles.exerciseName}>{item.name}</Text>
      </View>
    </Link>
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalles de la Rutina Recomendada</Text>
      <Text style={styles.description}>
        Esta es tu rutina recomendada, bajo tu información proporcionada al registrarte.
      </Text>
      <Text style={styles.subtitle}>Ejercicios:</Text>
      {data.map(item => renderExerciseItem({ item }))}
    </ScrollView>
  )
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

export default RutinaRecomendada;