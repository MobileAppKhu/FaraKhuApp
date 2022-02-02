import React from 'react'
import {Pressable, View} from 'react-native'
import Modal from 'react-native-modal'

import CustomIcon from '../../../../../../../components/CustomIcon'
import palette from '../../../../../../../theme/palette'
import MenuItem from '../MenuItem/MenuItem'
import styles from './stylesheet'

const modalItems = [
  {
    text: 'ایجاد رویداد شخصی',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'icon_new-event'
  },
  {
    text: 'ایجاد اطلاعیه',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'icons_alarm-ringing',
    onPress: () => {}
  },
  {
    text: 'ایجاد نظرسنجی',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'icons_poll',
    onPress: () => {}
  }
]

function AddMenu({visible, setVisible, onBackdropPress}) {
  return (
    <>
      <Pressable style={styles.container} onPress={setVisible}>
        <CustomIcon name="add_24px" size={24} color={palette.M_3_SYS_PRIMARY} />
      </Pressable>
      <Modal
        isVisible={visible}
        style={styles.modalContainer}
        backdropOpacity={0}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackdropPress}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.modalMenu}>
          {modalItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.text}
              color={item.color}
              icon={item.icon}
              onPress={item.onPress}
            />
          ))}
        </View>
      </Modal>
    </>
  )
}

export default AddMenu