import React from 'react'
import {View} from 'react-native'
import {useSelector} from "react-redux";

function HorizontalSeparator({
  width = '100%',
  height = 1,
  color ,
  marginTop,
  marginBottom,
  margin = 0,
  style
}) {
    const {theme: palette} = useSelector((state) => state.authReducer)
    color = color || palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16
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
