import {Pressable, View} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import CustomIcon from '../../../../components/CustomIcon'
import palette from './../../../../theme/palette'
export default function DashboardHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.optionsConainers}>
        <Pressable>
          <CustomIcon name="icons8_search_1-1" size={24} />
        </Pressable>
        <Pressable style={styles.notificationIconContainer}>
          <CustomIcon name="icons8_notification-1-bell" size={24} />
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <CustomIcon
          name="KHU_Logo_without_text"
          size={48}
          color={palette.M_3_SYS_PRIMARY}
        />
      </View>
      <View style={styles.menuIconContainer}>
        <Pressable>
          <CustomIcon name="menu-2" size={24} />
        </Pressable>
      </View>
    </View>
  )
}
