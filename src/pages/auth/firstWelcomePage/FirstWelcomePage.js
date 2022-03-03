import React from 'react'
import {View, Image} from 'react-native'
import Typography from '../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import useStyles from './stylesheet'
import palette from '../../../theme/palette'
import CustomButton from '../../../components/CustomButton'
export default function FirstWelcomePage() {
  const navigation = useNavigation()
  return (
    <View style={useStyles.container}>
      <View style={useStyles.imageContainer}>
        <Image
          source={require('../../../assets/images/FaraKhuLogo.png')}
          style={useStyles.image}
        />
      </View>
      <View style={useStyles.textview1}>
        <View style={useStyles.texttype1}>
          <Typography
            variant="h3"
            color={palette.M_3_SYS_SECONDARY}
            style={useStyles.typorgraphy1}>
            به پلتفرم رسمی دانشگاه خوارزمی خوش امدید!
          </Typography>
        </View>
      </View>
      <View style={useStyles.textview2}>
        <View style={useStyles.texttype2}>
          <Typography
            variant="body2"
            color={palette.M_3_SYS_ON_SURFACE}
            style={useStyles.typorgraphy2}>
            با استفاده این اپلیکیشن می توانید از خدمات مختلف دانشگاه خوارزمی به
            صورت یکپارچه استفاده کنید.
          </Typography>
        </View>
      </View>
      <View style={useStyles.buttonview}>
        <CustomButton
          title={'بزن بریم!'}
          onPress={() => navigation.navigate('login')}
        />
      </View>
    </View>
  )
}
