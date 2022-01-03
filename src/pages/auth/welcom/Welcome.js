import React from 'react'
import {View, Image} from 'react-native'
import Typography from '../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import styles from './stylesheet'
import palette from '../../../theme/palette'
import CustomButton from '../../../components/CustomButton'
export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/FaraKhuLogo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textview1}>
        <View style={styles.texttype1}>
          <Typography
            variant="h3"
            color={palette.M_3_SYS_SECONDARY}
            style={styles.typorgraphy1}>
            به پلتفرم رسمی دانشگاه خوارزمی خوش امدید!
          </Typography>
        </View>
      </View>
      <View style={styles.textview2}>
        <View style={styles.texttype2}>
          <Typography
            variant="body2"
            color={palette.M_3_SYS_ON_SURFACE}
            style={styles.typorgraphy2}>
            با استفاده این اپلیکیشن می توانید از خدمات مختلف دانشگاه خوارزمی به
            صورت یکپارچه استفاده کنید.
          </Typography>
        </View>
      </View>
      <View style={styles.buttonview}>
        <CustomButton
          title={'بزن بریم!'}
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </View>
  )
}
