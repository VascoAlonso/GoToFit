import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/GoToFit.png')}
        style={styles.homeLogo}
      />
      <Text style={styles.title}>Bienvenido a Go To Fit</Text>
      <Text style={styles.subtitle}>Empieza tu rutina de ejercicios hoy mismo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0e0e36',
  },
  homeLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Home;
