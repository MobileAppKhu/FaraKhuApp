import React from 'react'
import {Text} from 'react-native'

import styles from './styles/index.styles'

export default function TypoGraphyWithoutTranslate({
  children,
  style = {},
  variant = 'body1'
}) {
  return <Text style={[styles[variant], style]}>{children}</Text>
}
