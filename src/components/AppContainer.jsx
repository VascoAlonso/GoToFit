import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './Main'; // Importa tu componente principal
import Footer from './Footer'; // Importa el componente del footer

const AppContainer = () => {
  return (
    <View style={styles.container}>
      <Main />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContainer;