import React from 'react'
import {Pressable, View} from 'react-native'
import Modal from 'react-native-modal'
import {useNavigation} from '@react-navigation/native'

import MenuItem from '../MenuItem/MenuItem'
import useStyles from './stylesheet'
import CustomIcon from '../../../../../../../components/CustomIcon'
import {useSelector} from "react-redux";

function AddMenu({visible, setVisible, onBackdropPress}) {
  const navigation = useNavigation()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const modalItems = [
    {
      text: 'ایجاد رویداد شخصی',
      color: palette.M_3_SYS_PRIMARY,
      icon: 'icon_new-event',
      onPress: () => {
        onBackdropPress()
        navigation.navigate('create-todo')
      }
    },
    {
      text: 'ایجاد اطلاعیه',
      color: palette.M_3_SYS_PRIMARY,
      icon: 'icons_alarm-ringing',
      onPress: () => {
        onBackdropPress()
        navigation.navigate('create-course-event')
      }
    },
    {
      text: 'ایجاد نظرسنجی',
      color: palette.M_3_SYS_PRIMARY,
      icon: 'icons_poll',
      onPress: () => {
        onBackdropPress()
        navigation.navigate('create-poll')
      }
    }
  ]
  const styles = useStyles()
  return (
    <>
      <Pressable style={styles.container} onPress={setVisible}>
        <CustomIcon name="add_24px" size={24} color={palette.M_3_SYS_PRIMARY} />
      </Pressable>
      <Modal
        isVisible={visible}
        style={styles.modalContainer}
        backdropOpacity={0}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackdropPress}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.modalMenu}>
          {modalItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.text}
              color={item.color}
              icon={item.icon}
              onPress={item.onPress}
            />
          ))}
        </View>
      </Modal>
    </>
  )
}

export default AddMenu
