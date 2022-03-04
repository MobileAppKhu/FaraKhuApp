import {View} from 'react-native'
import React from 'react'
import NewsListHeader from './NewsListHeader/NewsListHeader'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import NewsListItem from './NewsListItem/NewsListItem'
export default function NewsList() {
  return (
    <View style={styles.root}>
      <NewsListHeader />
      <ScrollView>
        {Array(2)
          .fill(null)
          .map((item, index) => (
            <NewsListItem key={index.toString()} />
          ))}
      </ScrollView>
    </View>
  )
}
