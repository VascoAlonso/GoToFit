import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const Recetas = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // Navegar a la página de recetas sanas
          navigation.navigate('RecetasSanas');
        }}
      >
        <View style={styles.categoryContainer}>
          <Image
            source={require('../images/recetasaludable.jpg')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Recetas Sanas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Navegar a la página de recetas vegetarianas
          navigation.navigate('RecetasVegetarianas');
        }}
      >
        <View style={styles.categoryContainer}>
          <Image
            source={require('../images/recetavegetariana.jpg')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Recetas Vegetarianas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // Navegar a la página de recetas veganas
          navigation.navigate('RecetasVeganas');
        }}
      >
        <View style={styles.categoryContainer}>
          <Image
            source={require('../images/recetavegana.jpg')}
            style={styles.image}
          />
          <Text style={styles.categoryTitle}>Recetas Veganas</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f', // Fondo azul marino
  },
  categoryContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200, // Ancho de la imagen
    height: 100, // Alto de la imagen
    margin: 10,
    borderRadius: 10, // Esquinas redondeadas
  },
  categoryTitle: {
    color: '#ffffff', // Color de texto blanco
    fontSize: 18,
    marginTop: 10,
  },
});

export default Recetas;
