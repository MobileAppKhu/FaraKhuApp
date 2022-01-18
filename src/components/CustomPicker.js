import React, {useState} from 'react'
import {View, StyleSheet, Pressable, ScrollView} from 'react-native'
import Modal from 'react-native-modal'

import CustomIcon from './CustomIcon'
import Typography from './Typography'
import palette from '../theme/palette'

const CustomPicker = ({
  items,
  label,
  selectedItem,
  onSelectItem,
  labelStyle,
  labelColor,
  placeholder = 'انتخاب کنید'
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      {label && (
        <Typography
          variant="h5"
          style={[styles.label, labelStyle]}
          color={labelColor || '#495057'}>
          {label}
        </Typography>
      )}
      <Pressable
        android_ripple={{color: '#eee'}}
        style={styles.pickerContiner}
        onPress={() => setModalVisible(true)}>
        <CustomIcon name="arrow_drop_down_24px" size={24} />
        {selectedItem ? (
          <Typography>{selectedItem}</Typography>
        ) : (
          <Typography style={styles.placeholder}>{placeholder}</Typography>
        )}
      </Pressable>
      <Modal
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.modal}>
          <ScrollView>
            {items.map((item, index) => (
              <Pressable
                android_ripple={{color: palette.M_3_REF_PRIMARY_PRIMARY_90}}
                onPress={() => {
                  onSelectItem(item)
                  setModalVisible(false)
                }}
                key={index}
                style={styles.modalItem}>
                <Typography>{item}</Typography>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  label: {
    fontFamily: 'Shabnam',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10
  },
  pickerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE,
    lineHeight: 18,
    padding: 15
  },
  placeholder: {
    color: '#aaa'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 20
  },
  modalItem: {
    marginVertical: 5,
    padding: 10
  }
})

export default CustomPicker