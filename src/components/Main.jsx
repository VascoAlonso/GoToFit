<<<<<<< HEAD
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
=======
import React from 'react'
import { View } from 'react-native'
import AppBar from './AppBar.jsx'
import { Route, Switch } from 'react-router-native'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Perfil from './Perfil.jsx'
import Rutinas from './Rutinas.jsx'
import RutinaFuerza from './RutinaFuerza.jsx'
import RutinaFlexibilidad from './RutinaFlexibilidad.jsx'
import RutinaCardio from './RutinaCardio.jsx'
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
<<<<<<< HEAD
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
=======
      <AppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Login} />
        <Route path='/rutinas' component={Rutinas} />
        <Route path='/miperfil' component={Perfil} />
        <Route path='/RutinaCardio' component={RutinaCardio} />
        <Route path='/RutinaFuerza' component={RutinaFuerza} />
        <Route path='/RutinaFlexibilidad' component={RutinaFlexibilidad} />
      </Switch>
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Establece la posición a 'relative'
  },
});

export default Main;
=======
export default Main
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
