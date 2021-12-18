import {View, Image, Pressable} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../components/CustomInput'
import Typography from '../../../components/Typography'
import palette from '../../../theme/palette'
import CustomButton from './../../../components/CustomButton'
export default function LoginPage() {
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/KhuSmallLogo.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.emailContainer}>
            <CustomInput placeholder="ایمیل دانشگاهی" />
          </View>
          <View style={styles.passwordContainer}>
            <CustomInput placeholder="رمز عبور" />
          </View>
          <View style={styles.forgetPasswordContainer}>
            <Pressable>
              <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
                بازیابی رمز عبور
              </Typography>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="ورود به سامانه" />
        </View>
      </ScrollView>
    </View>
  )
}
