import React from 'react'
import {StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import CustomDatePicker from './CustomDatePicker'

export default function DatePickerModal() {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={0}
      animationOutTiming={0}
      isVisible
      style={styles.modal}>
      <CustomDatePicker />
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    margin: 0,
    justifyContent: 'flex-end'
  }
})
