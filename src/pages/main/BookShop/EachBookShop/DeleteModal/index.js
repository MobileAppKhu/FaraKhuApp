import React from 'react'
import {StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../../components/CustomAlert'
import {useSelector} from "react-redux";

function DeleteModal({isVisible, buttons, onBackdropPress, onBackButtonPress}) {
  const {theme: palette} = useSelector((state) => state.authReducer)
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
        title="آگهی مورد نظر حذف شود؟"
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
