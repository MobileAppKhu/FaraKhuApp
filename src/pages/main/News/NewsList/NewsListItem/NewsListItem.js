import {Image, View} from 'react-native'
import React from 'react'
import styles from './stylesheet'
export default function NewsListItem() {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image />
      </View>
    </View>
  )
}
