import {Pressable, View, Image} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import CustomIcon from '../../../../components/CustomIcon'
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
        <Image
          source={require('./../../../../assets/images/KhuSmallLogo.png')}
          style={styles.image}
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
