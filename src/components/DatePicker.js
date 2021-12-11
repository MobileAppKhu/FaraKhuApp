import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Pressable, StyleSheet, TextInput} from 'react-native'

import theme from '../theme'
import palette from '../theme/palette'
import BirthdayPickerModal from './BirthdayPickerModal'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function DatePicker({
  onChangeText,
  value,
  style,
  placeholder,
  status,
  helperText,
  label,
  ...others
}) {
  const {t, i18n} = useTranslation()
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  return (
    <>
      {label && (
        <Typography variant="h5" style={styles.label} color="#495057">
          {label}
        </Typography>
      )}
      <Pressable
        style={styles.container}
        onPress={() => setDatePickerOpen(true)}>
        <TextInput
          style={[
            styles.input,
            style,
            status === 'error' ? styles.inputError : {},
            styles.inputBlured
          ]}
          onChangeText={onChangeText}
          value={value}
          placeholder={t(placeholder)}
          {...others}
          editable={false}
        />
        <CustomIcon
          name="Calendar"
          size={25}
          color={palette.raven}
          style={styles.icon}
        />

        {!!helperText && (
          <Typography
            variant="body1"
            style={[
              styles.helperText,
              status === 'error' ? styles.helperTextError : {}
            ]}>
            {helperText}
          </Typography>
        )}
      </Pressable>
      <BirthdayPickerModal
        type={i18n.language}
        open={datePickerOpen}
        close={() => setDatePickerOpen(false)}
        onOkPress={(newValue) => {
          onChangeText(newValue)
          setDatePickerOpen(false)
        }}
      />
    </>
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
    color: palette.balticSea,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 14,
    lineHeight: 18,
    width: '100%',
    paddingRight: 50,
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 13
  },
  inputError: {
    borderColor: palette.authInput.borderError,
    borderWidth: 1
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
  }
})
