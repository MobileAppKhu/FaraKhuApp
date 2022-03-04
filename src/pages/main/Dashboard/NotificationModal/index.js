import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'
import Modal from 'react-native-modal'
import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import {useSelector} from "react-redux";
import makeStyles from "../../../../helpers/makeStyles";
const {theme: palette} = useSelector((state) => state.authReducer)
const styles = useStyles()
const modalItems = [
  {
    title: 'تکلیف دوم از فصل3',
    courseName: 'معماری کامپیوتر',
    time: '3 روز پیش',
    color: palette.M_3_SYS_ON_SURFACE_VARIANT,
    icon: 'icons8_delete_bin-1'
  },
  {
    title: 'کوییز سوم از فصل2',
    courseName: 'معماری کامپیوتر',
    time: '5 روز پیش',
    color: palette.M_3_SYS_ON_SURFACE_VARIANT,
    icon: 'icons8_delete_bin-1'
  }
]

const NotifModalItem = ({title, color, icon, courseName, time, onPress}) => (
  <Pressable
    onPress={onPress}
    android_ripple={{color: palette.M_3_REF_NEUTRAL_NEUTRAL_90}}
    style={styles.notifModalItem}>
    <Pressable
      style={styles.removeIcon}
      android_ripple={{color: '#bbb', borderless: true, radius: 24}}>
      <CustomIcon name={icon} size={24} color={color} />
    </Pressable>

    <View style={styles.notifModalItemDetails}>
      <Typography
        variant="body2"
        color={color}
        style={styles.notifModalItemText}>
        {title}
      </Typography>
      <Typography variant="regular10">
        {courseName} | {time}
      </Typography>
    </View>
  </Pressable>
)

function NotificationModal({isVisible, onBackdropPress, items = modalItems}) {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.ModalContainer}
      backdropOpacity={0.3}
      onBackdropPress={onBackdropPress}
      animationIn="bounceInDown"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={-1}>
      <View style={styles.notifModal}>
        {items.map((item, index) => (
          <NotifModalItem key={index} {...item} />
        ))}
      </View>
    </Modal>
  )
}

const useStyles = makeStyles((palette) => ({
  ModalContainer: {
    flex: 1,
    margin: 0
  },
  notifModal: {
    backgroundColor: palette.M_3_SYS_BACKGROUND,
    borderRadius: 16,
    position: 'absolute',
    top: 50,
    left: 25,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 20,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  notifModalItem: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: 224,
    height: 65,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER
  },
  notifModalItemText: {},
  notifModalItemDetails: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flex: 3
  },
  removeIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default NotificationModal
