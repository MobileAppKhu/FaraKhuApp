import React from 'react'
import {Pressable, View} from 'react-native'
import Modal from 'react-native-modal'

import CustomIcon from '../../../../../../components/CustomIcon'
import Typography from '../../../../../../components/Typography'
import palette from '../../../../../../theme/palette'
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

const ModalItem = ({text, color, icon, onPress}) => (
  <Pressable
    onPress={onPress}
    android_ripple={{color: palette.M_3_REF_NEUTRAL_NEUTRAL_80}}
    style={styles.modalItem}>
    <Typography variant="body2" color={color} style={styles.modalItemText}>
      {text}
    </Typography>
    <CustomIcon name={icon} size={24} color={color} />
  </Pressable>
)

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
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.modalMenu}>
          {modalItems.map((item, index) => (
            <ModalItem
              key={index}
              text={item.text}
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
