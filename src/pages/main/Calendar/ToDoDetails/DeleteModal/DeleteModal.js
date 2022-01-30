import React from 'react'
import {StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import palette from '../../../../../theme/palette'
import CustomAlert from '../../../../../components/CustomAlert'

function DeleteModal({isVisible, buttons, onBackdropPress, onBackButtonPress}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.deleteModal}>
      <CustomAlert
        image={require('../../../../../assets/images/exclamation_icon.png')}
        imageSize={24}
        title="رویداد مورد نظر حذف شود؟"
        titleColor={palette.M_3_SYS_ON_ERROR_CONTAINER}
        bgColor={palette.M_3_SYS_ERROR_CONTAINER}
        buttons={buttons}
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  deleteModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default DeleteModal
