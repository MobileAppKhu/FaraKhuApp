import Modal from 'react-native-modal'
import React from 'react'
import {View} from 'react-native'
import useStyles from './stylesheet'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import CustomButton from '../../../../../components/CustomButton'
import CustomIcon from '../../../../../components/CustomIcon'

export default function SaveAnnouncementModal({isVisible, onClsoe}) {
  const styles = useStyles()
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClsoe}>
      <View style={styles.root}>
        <View style={styles.iconContainer}>
          <CustomIcon
            size={24}
            color={palette.M_3_SYS_PRIMARY}
            name="icons8_info_1-1"
          />
        </View>
        <View style={styles.messageContainer}>
          <Typography
            variant="medium18"
            color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
            تغییرات مورد نظرثبت شد.
          </Typography>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={styles.button}
            title="باشه"
            size="small"
            onPress={onClsoe}
            type="cancel"
            textStyle={styles.buttonTextStyle}
          />
        </View>
      </View>
    </Modal>
  )
}
