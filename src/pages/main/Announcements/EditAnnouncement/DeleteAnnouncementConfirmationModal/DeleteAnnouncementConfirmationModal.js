import React from 'react'
import {View} from 'react-native'
import Modal from 'react-native-modal'
import CustomButton from '../../../../../components/CustomButton'
import CustomIcon from '../../../../../components/CustomIcon'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
export default function DeleteAnnouncementConfirmationModal({
  isVisible,
  onClose,
  onDeleteAnnouncement
}) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.root}>
        <View style={styles.iconContainer}>
          <CustomIcon
            name="icons8_high_priority-1-warning"
            size={24}
            color={palette.M_3_SYS_ERROR}
          />
        </View>
        <View style={styles.textContainer}>
          <Typography
            variant="medium18"
            color={palette.M_3_SYS_ON_ERROR_CONTAINER}>
            فراخوان مورد نظر حذف شود؟
          </Typography>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="بی خیال"
            style={styles.buttonStyleCancel}
            textStyle={styles.buttonStyleCancelTextStyle}
            size="small"
            type="cancel"
            onPress={onClose}
          />
          <CustomButton
            title="حذف فراخوان"
            style={styles.buttonStyleConfirm}
            textStyle={styles.buttonStyleConfirmTextStyle}
            size="small"
            onPress={onDeleteAnnouncement}
          />
        </View>
      </View>
    </Modal>
  )
}
