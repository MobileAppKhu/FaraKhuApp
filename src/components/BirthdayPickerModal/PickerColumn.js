import Picker from '@gregfrench/react-native-wheel-picker'
import React from 'react'
import {StyleSheet} from 'react-native'

import theme from '../../theme'
import palette from '../../theme/palette'

var PickerItem = Picker.Item

export default function PickerColumn({options, value, onChange}) {
  return (
    <Picker
      style={styles.picker}
      lineColor={palette.white} //to set top and bottom line color (Without gradients)
      lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
      lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
      selectedValue={value}
      itemStyle={styles.item}
      onValueChange={onChange}>
      {options.map((option) => (
        <PickerItem
          label={option.label}
          value={option.value}
          key={option.value}
        />
      ))}
    </Picker>
  )
}

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    height: '100%'
  },
  item: {
    fontFamily: theme.VazirMedium,
    color: palette.balticSea,
    fontSize: 16
  }
})
