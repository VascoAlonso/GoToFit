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

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  )
}

export default Main
