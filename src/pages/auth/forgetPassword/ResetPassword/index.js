import React from 'react'
import {View} from 'react-native'

import useStyles from './stylesheet'
import CustomInput from './../../../../components/CustomInput'
import CustomButton from './../../../../components/CustomButton'
import {useSelector} from 'react-redux'

const ResetPassword = () => {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)

  return (
    <View style={styles.screen}>
      <CustomInput
        label="رمز عبور جدید خود را وارد کنید:"
        required={true}
        secureTextEntry
        placeholder="رمز عبور"
        labelColor={palette.M_3_SYS_PRIMARY}
        labelStyle={{fontSize: 14}}
      />
      <CustomInput
        label="رمز عبور جدید خود را مجددا وارد کنید:"
        required
        secureTextEntry
        placeholder="تکرار رمز عبور"
        labelColor={palette.M_3_SYS_PRIMARY}
        labelStyle={{fontSize: 14}}
      />
      <CustomInput
        label={'رمز'}
        placeholder="رمز عبور"
        endIcon="icons8_lock-1"
        secureTextEntry={true}
      />
      <CustomButton size="small" title="تغییر رمز" style={{marginTop: 48}} />
    </View>
  )
}

export default ResetPassword
