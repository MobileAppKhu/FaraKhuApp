import React, {useState} from 'react'
import {Pressable, StyleSheet, TextInput, View} from 'react-native'

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
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordType, setisPasswordType] = useState(secureTextEntry)
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
          clearInputOptions ? styles.clearInputOptions : {},
          endIcon ? {paddingRight: 45} : {}
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        {...others}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        keyboardType={keyboardType}
        textAlign="right"
        secureTextEntry={isPasswordType}
      />
      {/* {status === 'error' && (
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
      )} */}
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
          color={palette.M_3_SYS_OUTLINE}
          style={styles.icon}
        />
      )}
      {startIcon && (
        <CustomIcon
          name={startIcon}
          size={25}
          color={palette.M_3_SYS_OUTLINE}
          style={styles.startIcon}
        />
      )}
      {clearInputOptions && isFocused && (
        <Pressable style={styles.startIcon} onPress={() => onChangeText('')}>
          <CustomIcon name="close_24px" size={25} color="#19223d" />
        </Pressable>
      )}
      {secureTextEntry && (
        <Pressable
          style={styles.startIcon}
          onPress={() => setisPasswordType(!isPasswordType)}>
          <CustomIcon
            name={isPasswordType ? 'icons8_hide' : 'icons8_eye'}
            size={25}
            color="#19223d"
          />
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
    fontFamily: theme.Shabnam,
    borderColor: palette.M_3_SYS_SURFACE_VARIANT,
    color: palette.M_3_SYS_INVERSE_SURFACE,
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 14,
    lineHeight: 18,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  inputError: {
    borderColor: palette.M_3_READ_ONLY_BACKGROUND_OPACITY_0_08,
    borderWidth: 1
  },
  inputInStartIcon: {
    paddingLeft: 50
  },
  icon: {
    position: 'absolute',
    top: 18,
    right: 15
  },
  iconError: {
    backgroundColor: palette.M_3_READ_ONLY_BACKGROUND_OPACITY_0_08,
    borderRadius: 16
  },
  iconSuccess: {},
  helperText: {
    marginBottom: 15
  },
  helperTextError: {
    color: palette.M_3_READ_ONLY_BACKGROUND_OPACITY_0_08
  },
  inputFocused: {
    backgroundColor: palette.M_3_SYS_BACKGROUND,
    borderColor: palette.M_3_SYS_PRIMARY
  },
  inputBlured: {
    backgroundColor: palette.M_3_SYS_BACKGROUND
    // borderColor: palette.M_3_SYS_PRIMARY
  },
  startIcon: {position: 'absolute', top: 18, left: 15},
  clearInputOptions: {
    paddingLeft: 45
  }
})
