import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

const RutinaFlexibilidad = () => {
  const data = [
    { id: '1', name: 'Estiramientos de piernas', route: 'EstiramientosPiernas', image: require('../images/estiramientopiernas.jpg') },
    { id: '2', name: 'Yoga básico', route: 'YogaBasico', image: require('../images/yogabasico.jpeg') },
    { id: '3', name: 'Pilates', route: 'Pilates', image: require('../images/pilates.jpeg') }
    // ... otros ejercicios
  ]

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
      <Text style={styles.title}>Detalles de la Rutina de Flexibilidad</Text>
      <Text style={styles.description}>
        Esta rutina de flexibilidad te ayudará a mejorar la movilidad y reducir la rigidez muscular. Incluye ejercicios como estiramientos de piernas, yoga básico y pilates.
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
    borderRadius: 10
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  link: {
    marginVertical: 5
  }
})

export default RutinaFlexibilidad
