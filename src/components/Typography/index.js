import React from 'react'
import {useTranslation} from 'react-i18next'
import {Text} from 'react-native'

import styles from './styles/index.styles'

export default function Typography({
  children,
  style = {},
  variant = 'body1',
  withoutTranslation = false,
  color
}) {
  const {t} = useTranslation()

  return (
    <Text style={[styles[variant], style, color ? {color: color} : {}]}>
      {withoutTranslation ? children : t(children)}
    </Text>
  )
}
