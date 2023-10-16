import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import {
  Card,
  Title,
  Paragraph,
  TextInput,
  Button,
  Text
} from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeRouter, Link } from 'react-router-native'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    // Tu lógica de inicio de sesión aquí
  }

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
                  <Title style={styles.title}>¡Volviste!</Title>
                  <Paragraph style={styles.cardSubtitle}>
                    Inicia sesión para acceder a tus rutinas.
                  </Paragraph>
                  <TextInput
                    label='Nombre de usuario'
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                  />
                  <TextInput
                    label='Contraseña'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                  />
                  <Button
                    mode='contained'
                    onPress={handleLogin}
                    style={styles.loginButton}
                    labelStyle={styles.loginButtonLabel}
                  >
                    Iniciar Sesión
                  </Button>
                </Card.Content>
                <TouchableOpacity>
                  <Link to='/forgot-password'>
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
                    <Link to='/regis'>
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
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 16
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    elevation: 6
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#1E90FF' // Color de título (azul claro)
  },
  cardSubtitle: {
    color: 'gray',
    marginBottom: 24,
    fontSize: 16
  },
  input: {
    marginBottom: 16
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    marginTop: 16
  },
  loginButtonLabel: {
    color: 'white'
  },
  forgotPasswordLink: {
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },
  registerText: {
    color: 'gray',
    marginRight: 8,
    fontSize: 16
  },
  registerLink: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Login
