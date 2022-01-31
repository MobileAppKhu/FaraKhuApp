import React from 'react'
import {View} from 'react-native'
import palette from '../theme/palette'

function HorizontalSeparator({
  width = '100%',
  height = 1,
  color = palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16,
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
      ]}
    />
  )
}

export default HorizontalSeparator
