import {View} from 'react-native'
import SimpleHeader from '../../../../components/SimpleHeader'
import React, {useState} from 'react'
import {ScrollView} from 'react-native-gesture-handler'
import Typography from '../../../../components/Typography'
import CodeInput from '../../../../components/CodeInput'
import CustomButton from '../../../../components/CustomButton'
import styles from './stylesheet'
import palette from '../../../../theme/palette'
export default function ConfirmCodePage() {
  const [code, setcode] = useState('')
  console.log(code)
  return (
    <View style={styles.root}>
      <SimpleHeader />
      <ScrollView>
        <View style={styles.textContainer}>
          <Typography variant="medium18" color={palette.M_3_SYS_ON_BACKGROUND}>
            کد تایید ارسال شده به
          </Typography>
          <Typography
            variant="medium18"
            color={palette.M_3_SYS_ON_BACKGROUND}
            style={styles.email}>
            Behnia@khu.ac.ir
          </Typography>
          {/* <View style={styles.emailContainer}> */}
          <Typography variant="medium18" color={palette.M_3_SYS_ON_BACKGROUND}>
            را وارد کنید
          </Typography>

          {/* </View> */}
        </View>
        <View>
          <CodeInput code={code} onChange={(text) => setcode(text)} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="بررسی کد" size="small" />
        </View>
      </ScrollView>
    </View>
  )
}
