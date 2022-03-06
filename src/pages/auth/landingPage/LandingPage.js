import {Image, Pressable, View} from 'react-native'
import React from 'react'
import useStyles from './stylesheet'
import Typography from '../../../components/Typography/index'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";
export default function LandingPage() {
  const navigation = useNavigation()
  const styles = useStyles()
    const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate('first-welcome')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../assets/images/FaraKhuLogo.png')}
        />
      </View>
      <View>
        <Typography variant="bold18" color={palette.M_3_SYS_SECONDARY}>
          اولین مرکز آموزش عالی ایران
        </Typography>
      </View>
    </Pressable>
  )
}
