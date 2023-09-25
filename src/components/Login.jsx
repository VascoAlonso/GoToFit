<<<<<<< HEAD
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
=======
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Tu lógica de inicio de sesión aquí
  };

  return (
<<<<<<< HEAD
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
                  <Title style={styles.title}>¡Volviste!</Title>
                  <Paragraph style={styles.cardSubtitle}>
                    Inicia sesión para acceder a tus rutinas favoritas.
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
                    onPress={handleLogin}
                    style={styles.loginButton}
                    labelStyle={styles.loginButtonLabel}
                  >
                    Iniciar Sesión
                  </Button>
                </Card.Content>
                <TouchableOpacity>
                  <Link to="/forgot-password">
                    <Text style={styles.forgotPasswordLink}>
                      ¿Olvidaste tu contraseña?
                    </Text>
                  </Link>
                </TouchableOpacity>
                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>
                    ¿No tienes una cuenta?
                  </Text>
                  <TouchableOpacity>
                    <Link to="/regis">
                      <Text style={styles.registerLink}>
                        Regístrate aquí
                      </Text>
                    </Link>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaProvider>
    </NativeRouter>
  );
};
=======
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder='Correo Electrónico'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36

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
<<<<<<< HEAD
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    elevation: 6,
=======
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0e0e36'
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: 'bold',
<<<<<<< HEAD
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
  loginButton: {
    backgroundColor: '#1E90FF',
    marginTop: 16,
  },
  loginButtonLabel: {
=======
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: '#3282B8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  registerButton: {
    backgroundColor: '#1E8449',
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginTop: 10,
    borderRadius: 5
  },
  buttonText: {
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
    color: 'white',
  },
  forgotPasswordLink: {
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  registerText: {
    color: 'gray',
    marginRight: 8,
    fontSize: 16,
  },
  registerLink: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

<<<<<<< HEAD
export default Login;

=======
export default Login
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
