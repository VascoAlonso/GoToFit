import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const RutinaCardio = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Rutina de Cardio</Text>
      <Text>Nombre: Rutina de Cardio</Text>
      <Text>Dificultad: Intermedia</Text>
      <Text style={styles.description}>
        Descripción: Esta rutina de cardio te ayudará a mejorar tu resistencia
        cardiovascular. Incluye ejercicios como saltos de cuerda, carrera
        ligera y burpees.
      </Text>
      <Text>Ejercicios:</Text>
      <View style={styles.exerciseList}>
        <ExerciseItem
          imageSource={require('../images/saltocuerda.jpeg')}
          exerciseName='Saltos de cuerda'
        />
        <ExerciseItem
          imageSource={require('../images/carreraligera.jpg')}
          exerciseName='Carrera ligera'
        />
        <ExerciseItem
          imageSource={require('../images/burpees.jpeg')}
          exerciseName='Burpees'
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
  video: {
    alignSelf: 'stretch',
    height: 200
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

export default RutinaCardio
