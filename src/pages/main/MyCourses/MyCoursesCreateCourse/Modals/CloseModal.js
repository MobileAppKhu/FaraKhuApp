import React from 'react'
import {StyleSheet} from 'react-native'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../../components/CustomAlert'
import {useSelector} from "react-redux";
import makeStyles from "../../../../../helpers/makeStyles";

function CloseModal({isVisible, onClosePress, onStayPress}) {
    const {theme: palette} = useSelector((state) => state.authReducer)
    const styles = useStyles()
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onStayPress}
      onBackButtonPress={onStayPress}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.deleteModal}>
      <CustomAlert
        image={require('../../../../../assets/images/exclamation_icon2.png')}
        imageSize={24}
        title="صفحه بسته شود؟"
        titleColor={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
        bgColor={palette.M_3_SYS_PRIMARY_CONTAINER}
        message="اطلاعات وارد شده ذخیره نخواهد شد."
        buttons={[
          {
            title: 'در صفحه بمان',
            color: palette.M_3_SYS_ON_PRIMARY,
            bgColor: palette.M_3_SYS_PRIMARY,
            onPress: onStayPress
          },
          {
            title: 'بستن صفحه',
            borderColor: palette.M_3_SYS_OUTLINE,
            borderWidth: 1,
            onPress: onClosePress
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

export default CloseModal
