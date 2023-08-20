import React from 'react'
import { Text, View } from 'react-native'
import AppBar from './AppBar.jsx'
import { Navigate, Route, Routes } from 'react-router-native'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Perfil from './Perfil.jsx'
import Rutinas from './Rutinas.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path= '/rutinas' element={<Rutinas/>}/>
        <Route path= '/miperfil' element={<Perfil />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </View>
  )
}

export default Main