import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10
  },
  scroll: {
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 30
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
<<<<<<< HEAD
        <AppBarTab to='/'>Inicio</AppBarTab>
        <AppBarTab to= '/rutinas'>Rutinas</AppBarTab>
        <AppBarTab to='/miperfil'>Mi Perfil</AppBarTab>
        <AppBarTab to='/login'>Sign In/Sign Up</AppBarTab>
=======
        <AppBarTab to='/'><Ionicons name='home' size={30} color='white' /></AppBarTab>
        <AppBarTab to='/rutinas'><MaterialIcons name='fitness-center' size={30} color='white' /></AppBarTab>
        <AppBarTab to='/miperfil'><Ionicons name='person' size={30} color='white' /></AppBarTab>
        <AppBarTab to='/signin'><Entypo name='login' size={30} color='white' /></AppBarTab>
>>>>>>> 3147d844b3997120f5fbae18596c91250a103c36
      </ScrollView>
    </View>
  )
}

export default AppBar
