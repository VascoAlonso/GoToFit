import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Rutinas = () => {
  const data = [
    { id: '1', name: 'Rutina de Cardio', difficulty: 'Intermedia' },
    { id: '2', name: 'Rutina de Fuerza', difficulty: 'Avanzada' },
    { id: '3', name: 'Rutina de Flexibilidad', difficulty: 'Principiante' },
    // ... Agrega más rutinas aquí
  ];

  const renderRoutineItem = ({ item }) => (
    <View style={styles.routineItem}>
      <Text style={styles.routineName}>{item.name}</Text>
      <Text style={styles.routineDifficulty}>{item.difficulty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutinas Disponibles</Text>
      <FlatList
        data={data}
        renderItem={renderRoutineItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e36', // Color azul oscuro
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  routineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  routineName: {
    fontSize: 18,
    color: 'white',
  },
  routineDifficulty: {
    fontSize: 16,
    color: 'white',
  },
});

export default Rutinas;