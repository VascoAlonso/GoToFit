import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Perfil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../images/60111.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Nombre de Usuario</Text>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <Text style={styles.sectionInfo}>Correo Electrónico: usuario@example.com</Text>
        <Text style={styles.sectionInfo}>Edad: 22</Text>
        <Text style={styles.sectionInfo}>Género: Masculino</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e36',
    padding: 20
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  profileDetails: {
    alignItems: 'center',
    marginTop: 30,
    color: 'white'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  sectionInfo: {
    fontSize: 10,
    color: 'white'
  }
})

export default Perfil
