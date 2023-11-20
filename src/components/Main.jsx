import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Route, Switch, Redirect } from 'react-router-native'
import AppBar from './AppBar.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Perfil from './Perfil.jsx'
import Rutinas from './Rutinas.jsx'
import Register from './Register.jsx'
import Footer from './Footer'
import RutinaFlexibilidad from './RutinaFlexibilidad.jsx'
import RutinaFuerza from './RutinaFuerza.jsx'
import RutinaCardio from './RutinaCardio.jsx'
import CarreraLigera from './CarreraLigera.jsx'
import SaltoCuerda from './SaltoCuerda.jsx'
import Burpees from './Burpees.jsx'
import LevantamientoPesas from './LevantamientoPesas.jsx'
import Flexiones from './Flexiones.jsx'
import PressBanca from './PressBanca.jsx'
import EstiramientosPiernas from './EstiramientosPiernas.jsx'
import YogaBasico from './YogaBasico.jsx'
import Pilates from './Pilates.jsx'
import Recetas from './Recetas.jsx'
import RecetasSanas from './RecetasSanas.jsx'

const Main = ({ onLogout }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    // Lógica para el inicio de sesión
    setLoggedIn(true)
  }

  const handleLogout = () => {
    // Lógica para el cierre de sesión
    setLoggedIn(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AppBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Switch>
          {!isLoggedIn && (
            <Route exact path='/' component={() => <Home onLogin={handleLogin} />} />
          )}
          {!isLoggedIn && (
            <Route path='/login' component={() => <Login onLogin={handleLogin} />} />
          )}
          {isLoggedIn && <Route path='/rutinas' component={Rutinas} />}
          {isLoggedIn && <Route path='/miperfil' component={Perfil} />}
          {isLoggedIn && <Route path='/register' component={Register} />}
          {isLoggedIn && <Route path='/RutinaCardio' component={RutinaCardio} />}
          {isLoggedIn && <Route path='/RutinaFlexibilidad' component={RutinaFlexibilidad} />}
          {isLoggedIn && <Route path='/RutinaFuerza' component={RutinaFuerza} />}
          {isLoggedIn && <Route path='/CarreraLigera' component={CarreraLigera} />}
          {isLoggedIn && <Route path='/SaltoCuerda' component={SaltoCuerda} />}
          {isLoggedIn && <Route path='/Burpees' component={Burpees} />}
          {isLoggedIn && <Route path='/LevantamientoPesas' component={LevantamientoPesas} />}
          {isLoggedIn && <Route path='/Flexiones' component={Flexiones} />}
          {isLoggedIn && <Route path='/PressBanca' component={PressBanca} />}
          {isLoggedIn && <Route path='/EstiramientosPiernas' component={EstiramientosPiernas} />}
          {isLoggedIn && <Route path='/YogaBasico' component={YogaBasico} />}
          {isLoggedIn && <Pilates path='/Pilates' component={Pilates} />}

          <Redirect to='/' />
        </Switch>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative' // Establece la posición a 'relative'
  }
})

export default Main
