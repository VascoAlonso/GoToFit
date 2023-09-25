import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Perfil from './Perfil.jsx';
import Rutinas from './Rutinas.jsx';
import Register from './Register.jsx';
import Footer from './Footer';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/rutinas" component={Rutinas} />
          <Route path="/miperfil" component={Perfil} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Establece la posición a 'relative'
  },
});

export default Main;