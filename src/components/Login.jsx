import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  TextInput,
  Button,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Link, useHistory } from 'react-router-native';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const SERVER_URL = 'http://192.168.1.85:27017';
  const history = useHistory() // Obtener la función de redirección

  const handleLogin = async () => {
    // Validar la entrada antes de intentar iniciar sesión
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Tu lógica de inicio de sesión aquí
    try {
      const response = await fetch(`${SERVER_URL}/persona/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: username,
          contrasena: password
        })
      })
      if (response.ok) {
        const data = await response.json()
        // Aquí puedes manejar la respuesta exitosa del servidor.
        console.log('Respuesta del servidor:', data)
        onLogin()
        history.push('/rutinas')
      } else {
        // Aquí puedes manejar errores del servidor.
        console.error('Error del servidor:', response.statusText)
      }
    } catch (error) {
      // Manejar errores de red o cualquier otra excepción.
      console.error('Error:', error.message);
    }

    // Limpiar mensajes de error en caso de éxito
    setError('')
  }

  const handleLogout = () => {
    // Lógica para el cierre de sesión
    setLoggedIn(false);
  };

  return (
    
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ImageBackground
            source={require('../images/background-image.jpg')}
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
                    {error ? (
                      <Text style={styles.errorText}>{error}</Text>
                    ) : null}
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
        </KeyboardAvoidingView>
      </SafeAreaProvider>
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
    color: '#1E90FF'
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
    fontSize: 16,
  },
  registerLink: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16
  }
})

export default Login
