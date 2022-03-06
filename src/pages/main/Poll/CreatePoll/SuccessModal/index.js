import React from 'react'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../../components/CustomAlert'
import makeStyles from "../../../../../helpers/makeStyles";
import {useSelector} from "react-redux";

function SuccessModal({isVisible, onPressBtn}) {
    const {theme: palette} = useSelector((state) => state.authReducer)
    const styles = useStyles()
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
        title="نظرسنجی با موفقیت ایجاد شد."
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

const useStyles = makeStyles(() => ({
  deleteModal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default SuccessModal
