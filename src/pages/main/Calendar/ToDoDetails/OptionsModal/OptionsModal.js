import React from 'react'
import {View, Pressable} from 'react-native'
import Modal from 'react-native-modal'
import CustomIcon from '../../../../../components/CustomIcon'
import Typography from '../../../../../components/Typography'

import useStyles from './stylessheet'
import {useSelector} from "react-redux";

const OptionsModalItem = ({text, color, icon, onPress}) => {
  const styles = useStyles()
    const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: palette.M_3_REF_NEUTRAL_NEUTRAL_80}}
      style={styles.optionsModalItem}>
      <Typography
        variant="body2"
        color={color}
        style={styles.optionsModalItemText}>
        {text}
      </Typography>
      <CustomIcon name={icon} size={24} color={color} />
    </Pressable>
  )
}

function OptionsModal({isVisible, onBackdropPress, items}) {
  const styles = useStyles()
  return (
    <Modal
      isVisible={isVisible}
      style={styles.optionsModalContainer}
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}
      animationIn="bounceInDown"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={-1}>
      <View style={styles.optionsModal}>
        {items.map((item, index) => (
          <OptionsModalItem
            key={index}
            text={item.text}
            color={item.color}
            icon={item.icon}
            onPress={item.onPress}
          />
        ))}
      </View>
    </Modal>
  )
}

export default OptionsModal
