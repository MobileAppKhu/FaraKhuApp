import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Image, Pressable, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import Typography from './../../../../../components/Typography/index'
export default function ProfileMainPage() {
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.topPart}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <CustomIcon
                name="arrow_back_24px"
                size={24}
                color={palette.M_3_SYS_ON_SECONDARY}
              />
            </Pressable>
            <Typography color={palette.M_3_SYS_ON_SECONDARY} variant="medium18">
              پروفایل
            </Typography>
            <View />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../../assets/images/sample_avatar.jpg')}
            />
            <Pressable style={styles.editImageIcon}>
              <CustomIcon name="mode_edit_24px" size={18} />
            </Pressable>
          </View>
          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="h6"
            style={styles.name}>
            آرشام رمضانی پارگامی
          </Typography>
          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="medium12"
            style={styles.rule}>
            دانشجو
          </Typography>
        </View>
      </ScrollView>
    </View>
  )
}
