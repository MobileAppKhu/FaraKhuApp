import React from 'react'
import {View} from 'react-native'

import useStyles from './stylesheet'
import CustomInput from './../../../../components/CustomInput'
import CustomButton from './../../../../components/CustomButton'
import Typography from './../../../../components/Typography'
import {useSelector} from 'react-redux'

const ResetPassword = () => {
  const styles = useStyles()

  return (
    <View style={styles.screen}>
      <InputLabel label="رمز عبور جدید خود را وارد کنید:" />
      <CustomInput secureTextEntry placeholder="رمز عبور" />

      <InputLabel label="رمز عبور جدید خود را مجددا وارد کنید:" />
      <CustomInput secureTextEntry placeholder="تکرار رمز عبور" />

      <CustomButton size="small" title="تغییر رمز" style={{marginTop: 48}} />
    </View>
  )
}

const InputLabel = ({label}) => {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)

  return (
    <View style={styles.labelContainer}>
      <Typography color={palette.M_3_SYS_ERROR} style={styles.requiredMark}>
        *
      </Typography>
      <Typography
        variant="h5"
        style={styles.label}
        color={palette.M_3_SYS_PRIMARY}>
        {label}
      </Typography>
    </View>
  )
}

export default ResetPassword
