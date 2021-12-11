import React, {useState} from 'react'
import {Pressable, StyleSheet, TextInput, View, Text} from 'react-native'
import Modal from 'react-native-modal'

import theme from '../theme'
import palette from '../theme/palette'
import CustomPicker from './BirthdayPickerModal/CustomPicker'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function TimePicker({
  onChangeText,
  value,
  style,
  placeholder,
  status,
  helperText,
  label,
  ...others
}) {
  const [selectedMinute, setselectedMinute] = useState('')
  const [selectedHour, setselectedHour] = useState('')
  const [customPickerIsOpen, setcustomPickerIsOpen] = useState(false)
  return (
    <>
      {label && (
        <Typography variant="h5" style={styles.label}>
          {label}
        </Typography>
      )}
      <Pressable onPress={() => setcustomPickerIsOpen(true)}>
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
        />
        <CustomIcon
          name="Time-Circle"
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
      <Modal isVisible={customPickerIsOpen}>
        <View style={styles.container}>
          <View style={styles.datePickerContainer}>
            <View style={styles.pickerContainer}>
              <Typography style={styles.pickerTitle} variant="bold20">
                Hour
              </Typography>
              <CustomPicker
                textVariant="h1"
                onChange={(newItem) => setselectedHour(newItem)}
                selected={selectedHour}
                options={Array.from({length: 24}, (v, i) => ({
                  label: i.toString(),
                  value: i
                })).reverse()}
              />
            </View>
            <View style={styles.timeSeparator}>
              <Text style={styles.h1}>:</Text>
            </View>
            <View style={styles.pickerContainer}>
              <Typography style={styles.pickerTitle} variant="bold20">
                Minute
              </Typography>
              <CustomPicker
                textVariant="h1"
                onChange={(newItem) => setselectedMinute(newItem)}
                selected={selectedMinute}
                options={Array.from({length: 12}, (v, i) => ({
                  label: (i * 5).toString(),
                  value: i * 5
                })).reverse()}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.confirmButtonContainer}
              onPress={() => {
                setcustomPickerIsOpen(false)
                onChangeText(selectedHour.value + ':' + selectedMinute.value)
              }}>
              <Typography variant="h5">Confirm</Typography>
            </Pressable>
            <Pressable
              style={styles.cancelButtonContainer}
              onPress={() => setcustomPickerIsOpen(false)}>
              <Typography variant="h5">Cancel</Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 275,
    backgroundColor: palette.white,
    borderRadius: 10,
    paddingVertical: 14,
    marginHorizontal: '15%'
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

  helperText: {
    marginBottom: 15
  },
  helperTextError: {
    color: palette.error
  },

  inputBlured: {
    backgroundColor: palette.authInput.background
  },
  datePickerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  pickerTitle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 24
  },
  confirmButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#19223d',
    borderRadius: 5,
    height: 40,
    marginRight: 3.5
  },
  cancelButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
    height: 40,
    marginLeft: 3.5
  },
  h1: {fontFamily: theme.VazirBold, fontSize: 35},
  timeSeparator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12%'
  }
})
