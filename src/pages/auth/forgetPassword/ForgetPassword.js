import {View} from 'react-native'
import React from 'react'
import SimpleHeader from '../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import styles from './stylesheet'
import Typography from '../../../components/Typography'
import palette from '../../../theme/palette'
import CustomInput from './../../../components/CustomInput'
import CustomButton from './../../../components/CustomButton'
export default function ForgetPassword() {
  return (
    <View style={styles.root}>
      <SimpleHeader />
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.textConatiner}>
            <Typography
              variant="medium18"
              color={palette.M_3_SYS_ON_BACKGROUND}>
              ایمیل دانشگاهی خود را وارد:
            </Typography>
          </View>
          <View style={styles.partContainer}>
            <View style={styles.inputContainer}>
              <CustomInput placeholder="ایمیل دانشگاهی" />
            </View>
            <View>
              <CustomButton title="ارسال کد تایید" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
