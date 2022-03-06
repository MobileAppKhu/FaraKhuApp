import React from 'react'
import {View, Image} from 'react-native'
import Typography from '../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'
import useStyles from './stylesheet'
import {useSelector} from "react-redux";
const SecondWelcomePage = () => {
  const navigation = useNavigation()
  const styles = useStyles()
    const {theme: palette} = useSelector((state) => state.authReducer)
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

export default SecondWelcomePage
