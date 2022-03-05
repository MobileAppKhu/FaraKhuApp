import React from 'react'
import {View, Pressable} from 'react-native'
import Modal from 'react-native-modal'
import {useSelector} from 'react-redux'
import Typography from '../../../../../components/Typography'
import styles from './stylesheet'

export default function NewsListMoreOptionModal({isOpen, onClose}) {
  const {theme: palette} = useSelector((state) => state.authReducer)

  return (
    <Modal
      isVisible={isOpen}
      style={styles.modalContainer}
      backdropOpacity={0}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="bounceInDown"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={-1}>
      <View style={styles.modalMenu}>
        <Pressable style={styles.menuItem}>
          <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
            اطلاعیه‌های عمومی دانشگاه
          </Typography>
        </Pressable>
        <Pressable style={styles.menuItem}>
          <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
            اخبار مرکز فاوا
          </Typography>
        </Pressable>
      </View>
    </Modal>
  )
}
