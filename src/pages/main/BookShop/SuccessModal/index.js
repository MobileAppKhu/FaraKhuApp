import React from 'react'
import {StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../components/CustomAlert'
import palette from '../../../../theme/palette'

function SuccessModal({isVisible, onPressBtn, title}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onPressBtn}
      onBackButtonPress={onPressBtn}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.deleteModal}>
      <CustomAlert
        image={require('../../../../../assets/images/exclamation_icon2.png')}
        imageSize={24}
        title={title}
        titleColor={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
        bgColor={palette.M_3_SYS_PRIMARY_CONTAINER}
        buttons={[
          {
            title: 'باشه',
            borderColor: palette.M_3_SYS_OUTLINE,
            borderWidth: 1,
            onPress: onPressBtn
          }
        ]}
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

export default SuccessModal
