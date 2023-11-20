import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecetasSanas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas Sanas</Text>
      <Text style={styles.recipe}>
        Receta 1: Ensalada de pollo con aguacate
        {"\n"}
        - Ingredientes: Pechuga de pollo, aguacate, lechuga, tomate, cebolla, vinagreta.
        {"\n"}
        - Instrucciones: Cocina el pollo, corta en trozos y mezcla con los demás ingredientes. Agrega la vinagreta y sirve.
      </Text>
      <Text style={styles.recipe}>
        Receta 2: Salmón a la parrilla con espárragos
        {"\n"}
        - Ingredientes: Filete de salmón, espárragos, aceite de oliva, limón, sal y pimienta.
        {"\n"}
        - Instrucciones: Sazona el salmón, rocía con aceite y limón, luego ásalo a la parrilla junto con los espárragos.
      </Text>
      <Text style={styles.recipe}>
        Receta 3: Tazón de acai con frutas y granola
        {"\n"}
        - Ingredientes: Acai congelado, plátano, fresas, granola, miel.
        {"\n"}
        - Instrucciones: Mezcla el acai con las frutas en una licuadora, agrega granola y miel antes de servir.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo gris claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recipe: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RecetasSanas;
