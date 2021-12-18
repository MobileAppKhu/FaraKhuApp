import {Image, Pressable, View} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import Typography from '../../../components/Typography/index'
import palette from '../../../theme/palette'
import {useNavigation} from '@react-navigation/native'
export default function LandingPage() {
  const navigation = useNavigation()
  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate('login')}>
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
