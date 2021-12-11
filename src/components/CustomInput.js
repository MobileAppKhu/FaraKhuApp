import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {I18nManager, Pressable, StyleSheet, TextInput, View} from 'react-native'

import theme from '../theme'
import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function CustomInput({
  label,
  onChangeText,
  value,
  style,
  placeholder,
  status,
  helperStatus,
  helperText,
  keyboardType = 'default',
  secureTextEntry,
  endIcon,
  startIcon,
  clearInputOptions,
  ...others
}) {
  const {t} = useTranslation()
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      {label && (
        <Typography variant="h5" style={styles.label} color="#495057">
          {label}
        </Typography>
      )}
      <TextInput
        style={[
          styles.input,
          style,
          status === 'error' ? styles.inputError : {},
          isFocused ? styles.inputFocused : styles.inputBlured,
          startIcon ? styles.inputInStartIcon : {},
          clearInputOptions ? styles.clearInputOptions : {}
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={t(placeholder)}
        {...others}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        keyboardType={keyboardType}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
        secureTextEntry={secureTextEntry}
      />
      {status === 'error' && (
        <CustomIcon
          name="Close-Square"
          size={25}
          color={palette.white}
          style={[styles.icon, styles.iconError]}
        />
      )}
      {status === 'success' && (
        <CustomIcon
          name="checked"
          size={25}
          color={palette.success}
          style={[styles.icon, styles.iconSuccess]}
        />
      )}
      {!!helperText && (
        <Typography
          variant="body1"
          style={[
            styles.helperText,
            status === 'error' || helperStatus === 'error'
              ? styles.helperTextError
              : {}
          ]}>
          {helperText}
        </Typography>
      )}
      {endIcon && (
        <CustomIcon
          name={endIcon}
          size={25}
          color={palette.raven}
          style={styles.icon}
        />
      )}
      {startIcon && (
        <CustomIcon
          name={startIcon}
          size={25}
          color={palette.raven}
          style={styles.startIcon}
        />
      )}
      {clearInputOptions && (
        <Pressable style={styles.startIcon} onPress={() => onChangeText('')}>
          <CustomIcon name="Arrow---Right-Square" size={25} color="#19223d" />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  label: {marginTop: 20, marginBottom: 10},
  input: {
    fontFamily: theme.VazirMedium,
    borderColor: palette.authInput.border,
    color: palette.authInput.text,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 14,
    lineHeight: 18,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 13
  },
  inputError: {
    borderColor: palette.authInput.borderError,
    borderWidth: 1
  },
  inputInStartIcon: {
    paddingLeft: 50
  },
  icon: {
    position: 'absolute',
    top: 14,
    right: 15
  },
  iconError: {
    backgroundColor: palette.error,
    borderRadius: 16
  },
  iconSuccess: {},
  helperText: {
    marginBottom: 15
  },
  helperTextError: {
    color: palette.error
  },
  isFocused: {
    backgroundColor: 'white'
  },
  inputBlured: {
    backgroundColor: palette.authInput.background
  },
  startIcon: {position: 'absolute', top: 14, left: 15},
  clearInputOptions: {
    paddingLeft: 45
  }
})
