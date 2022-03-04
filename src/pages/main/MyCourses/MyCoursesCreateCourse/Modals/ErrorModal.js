import React from 'react'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../../components/CustomAlert'
import {useSelector} from "react-redux";
import makeStyles from "../../../../../helpers/makeStyles";

function ErrorModal({title, message, isVisible, onBtnPress}) {
    const {theme: palette} = useSelector((state) => state.authReducer)
    const styles = useStyles()
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBtnPress}
      onBackButtonPress={onBtnPress}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.deleteModal}>
      <CustomAlert
        image={require('../../../../../assets/images/exclamation_icon.png')}
        imageSize={24}
        title={title}
        titleColor={palette.M_3_SYS_ON_ERROR_CONTAINER}
        bgColor={palette.M_3_SYS_ERROR_CONTAINER}
        message={message}
        messageColor={palette.M_3_SYS_ON_SURFACE_VARIANT}
        buttons={[
          {
            title: 'فهمیدم',
            borderColor: palette.M_3_SYS_OUTLINE,
            borderWidth: 1,
            onPress: onBtnPress
          }
        ]}
      />
    </Modal>
  )
}

const useStyles = makeStyles((palette) => ({
  deleteModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default ErrorModal
