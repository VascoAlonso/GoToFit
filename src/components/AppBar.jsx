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
  },
  logoutButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10
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

const AppBar = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    // Lógica de cierre de sesión
    onLogout()
  }

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'><Ionicons name='home' size={30} color='white' /></AppBarTab>
        <AppBarTab to='/rutinas'><MaterialIcons name='fitness-center' size={30} color='white' /></AppBarTab>
        <AppBarTab to='/miperfil'><Ionicons name='person' size={30} color='white' /></AppBarTab>
        {isLoggedIn ? (
          <TouchableWithoutFeedback onPress={handleLogout}>
            <View style={[styles.text, styles.logoutButton]}>
              <StyledText fontWeight='bold' style={{ color: 'black' }}>
                Cerrar Sesión
              </StyledText>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <AppBarTab to='/login'><Entypo name='login' size={30} color='white' /></AppBarTab>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
