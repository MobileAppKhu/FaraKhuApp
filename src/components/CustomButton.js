import React from 'react'
import {useTranslation} from 'react-i18next'
import {Pressable, StyleSheet} from 'react-native'

import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function CustomButton({
  onPress,
  title,
  style,
  textStyle,
  size = 'big',
  type = 'confirm',
  disabled,
  startIcon,
  startIconSize,
  startIconColor,
  endIcon,
  endIconSize,
  endIconColor
}) {
  const {t} = useTranslation()
  console.log(endIconSize ? endIconSize : 1)
  return (
    <Pressable
      android_ripple={{color: palette.mainButton.ripple}}
      style={[
        styles[`${size}Button`],
        styles[`${type}${disabled ? 'Disabled' : ''}Button`],
        style
      ]}
      onPress={onPress}
      disabled={disabled}>
      {startIcon && (
        <CustomIcon
          color={startIconColor}
          name={startIcon}
          style={styles.startIcon}
          size={startIconSize ? startIconSize : 20}
        />
      )}
      <Typography
        variant={`${size}Button`}
        style={[styles.text, styles[`${type}Text`], textStyle]}>
        {t(title)}
      </Typography>
      {endIcon && (
        <CustomIcon
          color={endIconColor}
          name={endIcon}
          style={styles.endIcon}
          size={endIconSize ? endIconSize : 20}
        />
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bigButton: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  smallButton: {
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row'
  },
  confirmButton: {
    backgroundColor: palette.mainButton.background
  },
  confirmDisabledButton: {
    backgroundColor: palette.mainButton.disabledBackground
  },
  cancelButton: {
    backgroundColor: palette.cancelButton.background
  },
  text: {},
  confirmText: {
    color: palette.mainButton.text
  },
  cancelText: {
    color: palette.cancelButton.text
  },
  startIcon: {
    position: 'absolute',
    left: 20
  },
  endIcon: {
    position: 'absolute',
    right: 20
  }
})
