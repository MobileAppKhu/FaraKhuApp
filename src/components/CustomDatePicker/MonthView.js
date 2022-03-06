import React from 'react'
import {View,FlatList} from 'react-native'

import Typography from '../Typography'
import {styles} from './styles/MonthView.styles'

const weekDays = {
  gregorian: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
}

export default function MonthView({monthDetails}) {
  return (
    <View style={styles.root}>
      <View>
        <FlatList
          data={weekDays.gregorian}
          columnWrapperStyle={styles.list}
          numColumns={7}
          renderItem={({item}) => {
            return (
              <View style={styles.cell}>
                <Typography variant="bold20">{item}</Typography>
              </View>
            )
          }}
          keyExtractor={(item, index) => item + index}
        />
        <FlatList
          data={monthDetails.data.map((item) => ({value: item}))}
          columnWrapperStyle={styles.list}
          numColumns={7}
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  styles.cell,
                  item.value ? styles.dayCell : styles.emptyCell
                ]}>
                {item.value && (
                  <Typography variant="bold20">{item.value}</Typography>
                )}
              </View>
            )
          }}
          keyExtractor={(item, index) => item.value + index}
        />
      </View>
    </View>
  )
}
