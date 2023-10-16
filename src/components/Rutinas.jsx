import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'

const Rutinas = () => {
  const data = [
    { id: '1', name: 'Rutina de Cardio', route: 'RutinaCardio', image: require('../images/cardio.jpg') },
    { id: '2', name: 'Rutina de Fuerza', route: 'RutinaFuerza', image: require('../images/fuerza.jpg') },
    { id: '3', name: 'Rutina de Flexibilidad', route: 'RutinaFlexibilidad', image: require('../images/flexibilidad.jpg') }
  ]

  const renderRoutineItem = ({ item }) => (
    <Link to={`/${item.route}`} component={TouchableOpacity}>
      <ImageBackground source={item.image} style={styles.routineItem}>
        <Text style={styles.routineName}>{item.name}</Text>
      </ImageBackground>
    </Link>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubre tus Rutinas</Text>
      <FlatList
        data={data}
        renderItem={renderRoutineItem}
        keyExtractor={item => item.id}
      />
    </View>
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
  routineItem: {
    height: 150,
    justifyContent: 'flex-end',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  routineName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }

})

export default Rutinas
