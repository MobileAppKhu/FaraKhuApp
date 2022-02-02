import React from 'react'
import {View, StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import palette from '../../../../../../../theme/palette'
import MenuItem from '../MenuItem/MenuItem'

const modalItems = [
  {
    text: 'لیست دانشجویان',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'icons8_people'
  },
  {
    text: 'ویرایش کلاس',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'mode_edit_24px',
    onPress: () => {}
  }
]
function ThreeDotMenu({visible, onBackdropPress}) {
  return (
    <Modal
      isVisible={visible}
      style={styles.modalContainer}
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      animationIn="slideInDown"
      animationOut="slideOutUp">
      <View style={styles.modalMenu}>
        {modalItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.text}
            color={item.color}
            icon={item.icon}
            onPress={item.onPress}
            separator={index !== modalItems.length - 1}
          />
        ))}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0
  },
  modalMenu: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    top: 15,
    right: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 10
  }
})

export default ThreeDotMenu
