import {View, Image, Pressable} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import React, {useState} from 'react'
import useStyles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../components/CustomInput'
import Typography from '../../../components/Typography'
import CustomButton from './../../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'
import {request} from './../../../helpers/request'
import {saveUser} from './../../../redux/auth/actions'
import WelcomeLoginModal from './welcomeLoginModal/WelcomeLoginModal'
import {saveUserIntoStorage} from '../../../helpers/userData'
import {useToast} from 'react-native-toast-notifications'
export default function LoginPage() {
  const toast = useToast()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [welcomeLoginModalisOpen, setwelcomeLoginModalisOpen] = useState(false)
  const [token, settoken] = useState()
  const [name, setname] = useState('')
  const dispatch = useDispatch()
  const login = () => {
    request('/Account/SignIn', 'POST', {
      logon: email,
      password
    }).then((data) => {
      if (data.status === 200) {
        settoken(data.header.map['set-cookie'])
        setname(
          `${data.response.profileDto.firstName} ${data.response.profileDto.lastName}`
        )
        setwelcomeLoginModalisOpen(true)
      } else {
        toast.show('ایمیل یا رمز عبور اشتباه است', {
          type: 'danger'
        })
      }
    })
  }
  const navigation = useNavigation()
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
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
            <CustomButton
              title="ورود مهمان"
              size="small"
              type="cancel"
              onPress={() => navigation.navigate('news')}
            />
          </View>
        </View>
      </ScrollView>
      <WelcomeLoginModal
        isVisible={welcomeLoginModalisOpen}
        onClsoe={() => setwelcomeLoginModalisOpen(false)}
        onPress={() => {
          dispatch(saveUser(token))
          saveUserIntoStorage(token)
          setwelcomeLoginModalisOpen(false)
        }}
        name={name}
      />
    </View>
  )
}
