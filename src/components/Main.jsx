import React from 'react'
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

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/rutinas' component={Rutinas} />
          <Route path='/miperfil' component={Perfil} />
          <Route path='/register' component={Register} />
          <Route path='/RutinaCardio' component={RutinaCardio} />
          <Route path='/RutinaFlexibilidad' component={RutinaFlexibilidad} />
          <Route path='/RutinaFuerza' component={RutinaFuerza} />
          <Route path='/CarreraLigera' component={CarreraLigera} />
          <Route path='/SaltoCuerda' component={SaltoCuerda} />
          <Route path='/Burpees' component={Burpees} />
          <Route path='/LevantamientoPesas' component={LevantamientoPesas} />
          <Route path='/Flexiones' component={Flexiones} />
          <Route path='/PressBanca' component={PressBanca} />
          <Route path='/EstiramientosPiernas' component={EstiramientosPiernas} />
          <Route path='/YogaBasico' component={YogaBasico} />
          <Route path='/Pilates' component={Pilates} />
          <Route path='/Recetas'component ={Recetas} />
          <Route path='/RecetasSanas' component ={RecetasSanas}/>

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
