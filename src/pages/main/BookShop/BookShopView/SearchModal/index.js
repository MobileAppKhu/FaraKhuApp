import React from 'react'
import {View, TextInput, StyleSheet, Pressable} from 'react-native'
import Modal from 'react-native-modal'
import CustomButton from '../../../../../components/CustomButton'

import CustomIcon from '../../../../../components/CustomIcon'
import theme from '../../../../../theme'
import palette from '../../../../../theme/palette'

function SearchModal({isVisible, onBackPress}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onBackPress}
      onBackdropPress={onBackPress}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Pressable
            android_ripple={{color: '#ddd', borderless: true, radius: 24}}
            onPress={onBackPress}>
            <CustomIcon
              name="arrow_forward_24px"
              size={20}
              style={styles.backBtn}
            />
          </Pressable>

          <TextInput
            placeholder="جستجو بین آگهی‌ها..."
            style={styles.textInput}
          />
        </View>

        <Pressable style={styles.button}>
          <CustomButton
            title="جستجو"
            size="small"
            startIcon="icons8_search_1-1"
            startIconColor={palette.M_3_READ_ONLY_WHITE}
          />
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.M_3_SYS_SURFACE,
    borderRadius: 12
  },
  searchBox: {
    padding: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_SYS_OUTLINE
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: theme.Shabnam
  },
  button: {
    padding: 16,
    paddingTop: 24
  }
})

export default SearchModal
