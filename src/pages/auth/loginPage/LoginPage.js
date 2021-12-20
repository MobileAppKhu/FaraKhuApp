import {View, Image, Pressable} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../components/CustomInput'
import Typography from '../../../components/Typography'
import palette from '../../../theme/palette'
import CustomButton from './../../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
export default function LoginPage() {
  const navigation = useNavigation()
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
            <CustomInput
              placeholder="ایمیل دانشگاهی"
              endIcon="mail_outline"
              clearInputOptions
            />{' '}
          </View>
          <View style={styles.passwordContainer}>
            <CustomInput
              placeholder="رمز عبور"
              endIcon="icons8_lock-1"
              secureTextEntry={true}
            />{' '}
          </View>
          <View style={styles.forgetPasswordContainer}>
            <Pressable onPress={() => navigation.navigate('forget-password')}>
              <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
                بازیابی رمز عبور
              </Typography>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <CustomButton title="ورود به سامانه" size="small" />
          </View>
          <View style={styles.guestLoginButton}>
            <CustomButton title="ورود مهمان" size="small" type="cancel" />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
