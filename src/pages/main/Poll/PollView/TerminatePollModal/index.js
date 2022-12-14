import React from 'react'
import Modal from 'react-native-modal'

import CustomAlert from '../../../../../components/CustomAlert'
import {useSelector} from "react-redux";
import makeStyles from "../../../../../helpers/makeStyles";

function TerminatePollModal({
  isVisible,
  onCancelBtnPress,
  onTerminateBtnPress
}) {

    const {theme: palette} = useSelector((state) => state.authReducer)
    const styles = useStyles()
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancelBtnPress}
      onBackButtonPress={onCancelBtnPress}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.modal}>
      <CustomAlert
        image={require('../../../../../assets/images/exclamation_icon3.png')}
        imageSize={24}
        title="نظرسنجی مورد نظر خاتمه یابد؟"
        titleColor={palette.M_3_SYS_ON_SECONDARY_CONTAINER}
        bgColor={palette.M_3_SYS_SECONDARY_CONTAINER}
        message="پس از اتمام، نظرسنجی از دسترس خارج خواهد شد و دیگر قابل مشاهده و بازیابی نیست."
        buttons={[
          {
            title: 'اتمام نظرسنجی',
            color: palette.M_3_SYS_ON_SECONDARY,
            bgColor: palette.M_3_SYS_SECONDARY,
            onPress: onTerminateBtnPress
          },
          {
            title: 'نه',
            borderColor: palette.M_3_SYS_OUTLINE,
            borderWidth: 1,
            onPress: onCancelBtnPress
          }
        ]}
      />
    </Modal>
  )
}

const useStyles = makeStyles(() => ({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default TerminatePollModal
