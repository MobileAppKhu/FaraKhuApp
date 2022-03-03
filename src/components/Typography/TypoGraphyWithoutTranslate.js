import React from 'react'
import {Text} from 'react-native'

import useStyle from './styles/index.styles'

export default function TypoGraphyWithoutTranslate({
  children,
  style = {},
  variant = 'body1'
}) {
  const styles = useStyle()
  return <Text style={[styles[variant], style]}>{children}</Text>
}
