import React from 'react'
import { View } from 'react-native'
import AppBar from './AppBar.jsx'
import { Route, Switch } from 'react-router-native'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Perfil from './Perfil.jsx'
import Rutinas from './Rutinas.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Login} />
        <Route path='/rutinas' component={Rutinas} />
        <Route path='/miperfil' component={Perfil} />
      </Switch>
    </View>
  )
}

export default Main
