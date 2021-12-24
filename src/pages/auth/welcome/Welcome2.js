import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import Typography from '../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import palette from '../../../theme/palette'
import CustomButton from '../../../components/CustomButton'

const Welcome2 = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/KhuSmallLogo.png')}
          style={styles.khuLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/welcome-picture.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textContent}>
          <Typography
            variant="body2"
            color={palette.M_3_SYS_ON_SURFACE}
            style={{textAlign: 'center'}}>
            برای استفاده کامل از امکانات و پیوستن به خانواده‌ی{' '}
            <Typography
              variant="body2"
              color={palette.M_3_SYS_ON_SURFACE}
              style={{textDecorationLine: 'underline'}}>
              ۱۴۰۰۰
            </Typography>{' '}
            نفری دانشگاه خوارزمی، لطفا وارد شوید:
          </Typography>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="حتما!"
          style={{borderRadius: 25}}
          onPress={() => navigation.navigate('login')}
        />
      </View>
      <View style={styles.slideIndicatorContainer}>
        <View style={styles.slideIndicator}>
          <View style={styles.slideCircle} />
          <View style={[styles.slideCircle, styles.activeSlide]} />
          <View style={styles.slideCircle} />
        </View>
      </View>
    </View>
  )
}

export default Welcome2

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  khuLogo: {
    width: 45,
    height: 70,
    marginTop: 36,
    marginBottom: 10
  },
  image: {
    width: 300,
    height: 290
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 49,
    marginTop: 20,
    marginBottom: 50
  },
  textContent: {
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginHorizontal: 150
  },
  slideIndicatorContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 48
  },
  slideIndicator: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  slideCircle: {
    width: 8,
    height: 8,
    borderRadius: 1000,
    backgroundColor: '#c4c4c4'
  },
  activeSlide: {
    backgroundColor: '#6c5677'
  }
})
