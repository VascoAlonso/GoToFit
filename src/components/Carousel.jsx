import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const Carousel = () => {
  return (
    <Swiper
      style={styles.wrapper}
      autoplay
      autoplayTimeout={3}
      showsPagination={false} // Oculta los puntos de paginación
    >
      <View style={styles.slide}>
        <Image
          source={require('../images/image1.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image2.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image3.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image4.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image5.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image6.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image7.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image8.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image9.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../images/image10.jpg')}
          style={styles.image}
        />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width,
    height: 300, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'cover'
  }
})

export default Carousel
