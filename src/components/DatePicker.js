import React, {useState} from 'react'
import {Pressable, StyleSheet, TextInput} from 'react-native'
import theme from '../theme'
import BirthdayPickerModal from './BirthdayPickerModal'
import CustomIcon from './CustomIcon'
import Typography from './Typography'
import {useSelector} from "react-redux";
import makeStyles from "../helpers/makeStyles";
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
  const {theme: palette} = useSelector((state) => state.authReducer)
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const styles = useStyles()
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
          placeholder={placeholder}
          {...others}
          editable={false}
          textAlign="center"
          textAlignVertical="center"
        />
        <CustomIcon
          name="icon_calendar_simple"
          size={25}
          color={palette.M_3_SYS_ON_SURFACE}
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
        open={datePickerOpen}
        close={() => setDatePickerOpen(false)}
        onOkPress={(newValue) => {
          onChangeText(newValue)
          setDatePickerOpen(false)
        }}
        type="fa"
      />
    </>
  )
}

const useStyles = makeStyles((palette) => ({
  container: {
    width: '100%'
  },
  label: {marginTop: 20, marginBottom: 10},

  input: {
    fontFamily: theme.ShabnamBold,
    borderColor: palette.M_3_SYS_ON_SECONDARY_CONTAINER,
    color: palette.M_3_SYS_OUTLINE,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 14,
    width: '100%'
    // paddingRight: 50,
    // paddingLeft: 15
    // paddingTop: 13,
    // paddingBottom: 13
  },
  inputError: {
    // borderColor: palette.authInput.borderError,
    borderWidth: 1
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 15
  },
  iconError: {
    // backgroundColor: palette.error,
    borderRadius: 16
  },
  iconSuccess: {},
  helperText: {
    marginBottom: 15
  },
  helperTextError: {
    // color: palette.error
  },
  isFocused: {
    backgroundColor: 'white'
  },
  inputBlured: {
    // backgroundColor: palette.authInput.background
  }
}))
