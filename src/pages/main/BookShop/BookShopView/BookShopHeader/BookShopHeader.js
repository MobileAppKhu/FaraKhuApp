import React from 'react'
import {Pressable, View} from 'react-native'

import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'

const androidRipple = {borderless: true, color: '#ddd', radius: 25}

export default function BookShopHeader({onSearchPress}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.leftIcon} android_ripple={androidRipple}>
        <CustomIcon name={'arrow_back_24px'} size={24} />
      </Pressable>

      <Typography variant="medium18" color={palette.M_3_SYS_ON_SURFACE}>
        کتاب یاب
      </Typography>

      <View style={styles.rightIcons}>
        <Pressable
          style={styles.search}
          android_ripple={androidRipple}
          onPress={onSearchPress}>
          <CustomIcon name={'icons8_search_1-1'} size={24} />
        </Pressable>
        <Pressable style={styles.filterMenu} android_ripple={androidRipple}>
          <CustomIcon name={'icons8_list_1-1'} size={24} />
        </Pressable>
      </View>
    </View>
  )
}
