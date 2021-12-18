import React from 'react'
import {Text} from 'react-native'

import styles from './styles/index.styles'

export default function Typography({
  children,
  style = {},
  variant = 'body1',
  color
}) {
  return (
    <Text style={[styles[variant], style, color ? {color: color} : {}]}>
      {children}
    </Text>
  )
}
