import React from 'react'
import {useTranslation} from 'react-i18next'
import {Pressable, StyleSheet} from 'react-native'

import palette from '../theme/palette'
import Typography from './Typography'

export default function IntroButton({onPress, title, style, textStyle}) {
  const {t} = useTranslation()

  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Typography variant="smallButton" style={[styles.text, textStyle]}>
        {t(title)}
      </Typography>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 170,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.introButton
  },
  text: {
    // fontWeight: 'bold',
    color: palette.mainButton.text
    // fontSize: 20,
    // width: '100%'
    // lineHeight: 32,
    // paddingRight: 15,
    // paddingLeft: 15,
    // paddingTop: 13,
    // paddingBottom: 13
  }
})
