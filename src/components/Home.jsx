import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeLogo}>
        <Image
          source={require('../images/GoToFit.png')}
          style={styles.homeLogo}
        />
      </View>
      <Text style={styles.title}>Bienvenido a Go To Fit.</Text>
      <Text style={styles.subtitle}>Empieza tu rutina de ejercicios hoy mismo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0e0e36'
  },
  homeLogo: {
    width: 180,
    height: 180,
    borderRadius: 60,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    color: 'white'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'cyan'
  }
})

export default Home
