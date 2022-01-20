import React from 'react'
import {View} from 'react-native'
import palette from '../theme/palette'

function HorizontalSeparator({
  width = '100%',
  height = 1,
  color = palette.M_3_SYS_OUTLINE,
  marginTop,
  marginBottom,
  margin = 0,
  style
}) {
  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: color,
          marginTop: marginTop ?? margin,
          marginBottom: marginBottom ?? margin
        },
        style
      ]}></View>
  )
}

export default HorizontalSeparator
