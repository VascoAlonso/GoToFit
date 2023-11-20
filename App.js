import React, { useState } from 'react';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setLoggedIn(false);
  };

  return <NativeRouter><Main isLoggedIn={isLoggedIn} onLogout={handleLogout} /></NativeRouter>;
}
