import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error al abrir el enlace', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Contáctanos: gotofit@gmail.com</Text>
        <Text style={styles.contactText}>Teléfono: +452756983</Text>
      </View>
      <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
          <Icon name="facebook" type="font-awesome" color="#3b5998" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.instagram.com')}>
          <Icon name="instagram" type="font-awesome" color="#e4405f" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://twitter.com')}>
          <Icon name="twitter" type="font-awesome" color="#1da1f2" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.navigationLinks}>
        <TouchableOpacity onPress={() => openLink('/terms')}>
          <Text style={styles.linkText}>Términos y Condiciones</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('/privacy')}>
          <Text style={styles.linkText}>Política de Privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('/help')}>
          <Text style={styles.linkText}>Ayuda y Soporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E3D58',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 2,
  },
  socialLinks: {
    flex: 2,
    flexDirection: 'colum',
    justifyContent: 'space-between'
  },
  navigationLinks: {
    flex: 2,
    flexDirection: 'colum',
    justifyContent: 'space-between',
  },
  contactText: {
    color: 'white',
    marginBottom: 10,
  },
  linkText: {
    color: 'white',
    fontSize: 10,
  },
});

export default Footer;
