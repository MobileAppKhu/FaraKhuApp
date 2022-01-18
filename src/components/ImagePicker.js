import React from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker'
import palette from '../theme/palette'

import CustomIcon from './CustomIcon'

function ImagePicker({imageUri, onChangeImage, width = 100, height = 100}) {
  const selectImg = async () => {
    try {
      const {didCancel, assets} = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1
      })
      if (!didCancel) {
        onChangeImage(assets[0].uri)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Pressable onPress={() => selectImg()}>
      <View style={[styles.container, {width, height}]}>
        {!imageUri && <CustomIcon name="icon_add" size={40} color={'gray'} />}
        {imageUri && (
          <Image
            source={{uri: imageUri}}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImagePicker
