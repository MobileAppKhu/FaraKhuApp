import Modal from 'react-native-modal'
import React from 'react'
import {Image, View} from 'react-native'
import useStyles from './stylesheet'
import Typography from '../../../../components/Typography'
import CustomButton from '../../../../components/CustomButton'
import {useSelector} from "react-redux";
export default function WelcomeLoginModal({isVisible, onClsoe, name, onPress}) {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClsoe}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/sample_avatar.jpg')}
          />
        </View>
        <View style={styles.messageContainer}>
          <Typography
            variant="medium18"
            color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
            {`${name} عزیز، خوش آمدید`}
          </Typography>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="وارد شو" size="small" onPress={onPress} />
        </View>
      </View>
    </Modal>
  )
}
