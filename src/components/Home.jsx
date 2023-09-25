import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import Carousel from './Carousel'

const Home = () => {
  const [rotation] = useState(new Animated.Value(0))

  useEffect(() => {
    // Configura una animación que rota el logo en su propio eje vertical
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000, // Duración de la animación en milisegundos
        useNativeDriver: true // Usa el motor nativo para un rendimiento óptimo
      })
    ).start()
  }, [])

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const animatedStyle = {
    transform: [{ rotateY: interpolatedRotation }]
  }

  return (
    <View style={styles.container}>
      <Carousel />
      <View style={styles.overlay}>
        <Animated.Image
          source={require('../images/GoToFit.png')}
          style={[styles.homeLogo, animatedStyle]}
        />
        <Text style={styles.title}>¡Bienvenido a Go To Fit!</Text>
        <Text style={styles.subtitle}>Empieza tu rutina de ejercicios hoy mismo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e36'
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)' // Agregar un fondo semitransparente
  },
  homeLogo: {
    width: 180,
    height: 180,
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    fontWeight: 'bold',
    color: 'cyan'
  }
})

export default Home
