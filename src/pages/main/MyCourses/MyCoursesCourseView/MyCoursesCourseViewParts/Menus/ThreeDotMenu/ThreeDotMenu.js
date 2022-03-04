import React from 'react'
import {View} from 'react-native'
import Modal from 'react-native-modal'
import MenuItem from '../MenuItem/MenuItem'
import makeStyles from "../../../../../../../helpers/makeStyles";
import {useSelector} from "react-redux";
const {theme: palette} = useSelector((state) => state.authReducer)
const modalItems = [
  {
    text: 'لیست دانشجویان',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'icons8_people'
  },
  {
    text: 'ویرایش کلاس',
    color: palette.M_3_SYS_PRIMARY,
    icon: 'mode_edit_24px',
    onPress: () => {}
  }
]
function ThreeDotMenu({visible, onBackdropPress}) {
  const styles = useStyles()
  return (
    <Modal
      isVisible={visible}
      style={styles.modalContainer}
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      animationIn="slideInDown"
      animationOut="slideOutUp">
      <View style={styles.modalMenu}>
        {modalItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.text}
            color={item.color}
            icon={item.icon}
            onPress={item.onPress}
            separator={index !== modalItems.length - 1}
          />
        ))}
      </View>
    </Modal>
  )
}

const useStyles = makeStyles((palette) => ({
  modalContainer: {
    flex: 1,
    margin: 0
  },
  modalMenu: {
    backgroundColor: '#e4ebf6',
    borderRadius: 20,
    position: 'absolute',
    top: 15,
    right: 24,
    alignItems: 'stretch',
    overflow: 'hidden',
    elevation: 10
  }
}))

export default ThreeDotMenu
