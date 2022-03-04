import React, {useEffect, useState} from 'react'
import {Platform, Image, View} from 'react-native'
import RNFS from 'react-native-fs'
import Icon from 'react-native-vector-icons/Feather'
import {useSelector} from 'react-redux'

export default function CustomImage({avatarId, style}) {
  const [imageAddress, setImageAddress] = useState(null)
  useEffect(() => {
    downloadPhoto(avatarId).then((imagePath) => {
      setImageAddress(imagePath)
    })
  }, [avatarId])
  const {theme: palette} = useSelector((state) => state.authReducer)

  return (
    <>
      {!imageAddress && (
        <View
          style={{
            backgroundColor: palette.M_3_SYS_ON_PRIMARY_CONTAINER,
            height: 104,
            width: 104,
            borderRadius: 52,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Icon
            name={'camera-off'}
            size={50}
            color={palette.M_3_READ_ONLY_WHITE}
          />
        </View>
      )}
      {imageAddress && <Image style={style} source={{uri: imageAddress}} />}
    </>
  )
}

export function getImageFilePath(imageName, extension) {
  const FILE = Platform.OS === 'ios' ? '' : 'file://'
  return FILE + RNFS.CachesDirectoryPath + '/' + imageName + '.' + extension
}

export function downloadPhoto(avatarId) {
  return new Promise((resolve) => {
    fetch(
      'https://api.farakhu.markop.ir/api/File/Download' + '?FileId=' + avatarId
    )
      .then((response) => {
        if (response.status === 200) {
          const fileNameWithPath = getImageFilePath(
            avatarId,
            response.headers.map['content-type'].split('/').pop()
          )
          RNFS.exists(fileNameWithPath)
            .then((file) => {
              if (file) {
                resolve(fileNameWithPath)
              } else {
                RNFS.downloadFile({
                  fromUrl:
                    'https://api.farakhu.markop.ir/api/File/Download' +
                    '?FileId=' +
                    avatarId,
                  toFile: fileNameWithPath
                })
                  .promise.then(() => {
                    resolve(fileNameWithPath)
                  })
                  .catch((err) => console.log('downloadFile:', err))
              }
            })
            .catch((err) => console.log('exist: ', err))
        } else {
          resolve(null)
        }
      })
      .catch((err) => console.log('fetch: ', err))
  })
}
