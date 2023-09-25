import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Text, Input, Button, Icon } from 'react-native-elements';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Usuario Ejemplo',
    age: '30',
    weight: '70.5',
    height: '175',
    goal: 'Perder Peso',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const saveProfileChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en tu base de datos o almacenamiento local
    // Por ahora, actualizamos el estado del perfil con los valores editados
    setIsEditing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: '#0e0e36' }}
    >
      <Avatar
        source={require('../images/60111.jpg')}
        rounded
        size="xlarge"
        containerStyle={styles.avatarContainer}
      />
      <View style={styles.infoContainer}>
        <Text h4 style={styles.infoTitle}>
          {isEditing ? 'Editar Perfil' : 'Mi Perfil'}
        </Text>
        <Input
          label="Nombre"
          value={userProfile.name}
          onChangeText={(text) => setUserProfile({ ...userProfile, name: text })}
          disabled={!isEditing}
        />
        <Input
          label="Edad"
          value={userProfile.age}
          onChangeText={(text) => setUserProfile({ ...userProfile, age: text })}
          disabled={!isEditing}
        />
        <Input
          label="Peso (kg)"
          value={userProfile.weight}
          onChangeText={(text) => setUserProfile({ ...userProfile, weight: text })}
          disabled={!isEditing}
        />
        <Input
          label="Altura (cm)"
          value={userProfile.height}
          onChangeText={(text) => setUserProfile({ ...userProfile, height: text })}
          disabled={!isEditing}
        />
        <Input
          label="Objetivo"
          value={userProfile.goal}
          onChangeText={(text) => setUserProfile({ ...userProfile, goal: text })}
          disabled={!isEditing}
        />
        {/* Agregar campos para redes sociales */}
        <Input
          label="Facebook"
          value={userProfile.facebook}
          onChangeText={(text) => setUserProfile({ ...userProfile, facebook: text })}
          disabled={!isEditing}
        />
        <Input
          label="Instagram"
          value={userProfile.instagram}
          onChangeText={(text) => setUserProfile({ ...userProfile, instagram: text })}
          disabled={!isEditing}
        />
        <Input
          label="Twitter"
          value={userProfile.twitter}
          onChangeText={(text) => setUserProfile({ ...userProfile, twitter: text })}
          disabled={!isEditing}
        />
      </View>
      <Button
        title={isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
        onPress={isEditing ? saveProfileChanges : toggleEditing}
        containerStyle={styles.buttonContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  infoTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default UserProfile;
