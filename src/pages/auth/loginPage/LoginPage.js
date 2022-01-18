import {View, Image, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'
import React, {useState} from 'react'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../components/CustomInput'
import Typography from '../../../components/Typography'
import palette from '../../../theme/palette'
import CustomButton from './../../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {request} from './../../../helpers/request'
import {saveUser} from './../../../redux/auth/actions'
import WelcomeLoginModal from './welcomeLoginModal/WelcomeLoginModal'
import {saveUserIntoStorage} from '../../../helpers/userData'
export default function LoginPage() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [welcomeLoginModalisOpen, setwelcomeLoginModalisOpen] = useState(false)
  const dispatch = useDispatch()
  const login = () => {
    request('/Account/SignIn', 'POST', {
      logon: email,
      password
    }).then((data) => {
      dispatch(saveUser(data.header.map['set-cookie']))
      saveUserIntoStorage(data.header.map['set-cookie'])
      setwelcomeLoginModalisOpen(true)
    })
  }
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
              value={email}
              placeholder="ایمیل دانشگاهی"
              endIcon="mail_outline"
              clearInputOptions
              onChangeText={(text) => setemail(text)}
            />
          </View>
          <View style={styles.passwordContainer}>
            <CustomInput
              value={password}
              onChangeText={(text) => setpassword(text)}
              placeholder="رمز عبور"
              endIcon="icons8_lock-1"
              secureTextEntry={true}
            />
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
            <CustomButton title="ورود به سامانه" size="small" onPress={login} />
          </View>
          <View style={styles.guestLoginButton}>
            <CustomButton title="ورود مهمان" size="small" type="cancel" />
          </View>
        </View>
      </ScrollView>
      <WelcomeLoginModal
        isVisible={welcomeLoginModalisOpen}
        onClsoe={() => setwelcomeLoginModalisOpen(false)}
      />
    </View>
  )
}
