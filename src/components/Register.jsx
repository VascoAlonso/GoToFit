import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  TextInput,
  Button,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route, Link } from 'react-router-native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Tu lógica de registro aquí
  };

  return (
    <NativeRouter>
      <SafeAreaProvider>
        <ImageBackground
          source={require('../images/background-image.jpg')} // Ruta de tu imagen de fondo
          style={styles.backgroundImage}
        >
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
              <Card style={styles.card}>
                <Card.Content>
                  <Title style={styles.title}>¡Regístrate!</Title>
                  <Paragraph style={styles.cardSubtitle}>
                    Crea una cuenta para mantener un registro de tu salud.
                  </Paragraph>
                  <TextInput
                    label="Nombre de usuario"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                  />
                  <TextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                  />
                  <Button
                    mode="contained"
                    onPress={handleRegister}
                    style={styles.registerButton}
                    labelStyle={styles.registerButtonLabel}
                  >
                    Registrarse
                  </Button>
                </Card.Content>
                <TouchableOpacity>
                  <Link to="/login">
                    <Text style={styles.loginLink}>
                      ¿Ya tienes una cuenta? Inicia sesión aquí
                    </Text>
                  </Link>
                </TouchableOpacity>
              </Card>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaProvider>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#1E90FF', // Color de título (azul claro)
  },
  cardSubtitle: {
    color: 'gray',
    marginBottom: 24,
    fontSize: 16,
  },
  input: {
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    marginTop: 16,
  },
  registerButtonLabel: {
    color: 'white',
  },
  loginLink: {
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
  },
});

export default Register;
