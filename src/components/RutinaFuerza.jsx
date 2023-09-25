import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const RutinaFuerza = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Rutina de Fuerza</Text>
      <Text>Nombre: Rutina de Fuerza</Text>
      <Text>Dificultad: Avanzada</Text>
      <Text style={styles.description}>
        Descripción: Esta rutina de fuerza te ayudará a desarrollar masa muscular
        y fuerza. Incluye ejercicios como levantamiento de pesas y flexiones.
      </Text>
      <Text>Ejercicios:</Text>
      <View style={styles.exerciseList}>
        <ExerciseItem
          imageSource={require('../images/levantamientopesas.jpeg')}
          exerciseName='Levantamiento de pesas'
        />
        <ExerciseItem
          imageSource={require('../images/flexiones.jpg')}
          exerciseName='Flexiones'
        />
        <ExerciseItem
          imageSource={require('../images/pressbanca.jpg')}
          exerciseName='Press de banca'
        />
      </View>
      <Text style={styles.videoText}>Video de Rutina</Text>
      <View style={styles.videoContainer}>
        <TouchableOpacity onPress={toggleVideo} style={styles.videoButton}>
          <Text style={styles.videoButtonText}>
            {isPlaying ? 'Detener Video' : 'Iniciar Video'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ExerciseItem = ({ imageSource, exerciseName }) => (
  <View style={styles.exerciseItem}>
    <Image
      source={imageSource}
      style={styles.exerciseImage}
    />
    <Text>{exerciseName}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    marginBottom: 20
  },
  exerciseList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  exerciseItem: {
    flex: 1,
    alignItems: 'center'
  },
  exerciseImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  videoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  videoContainer: {
    alignItems: 'center'
  },
  videoButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  videoButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default RutinaFuerza
