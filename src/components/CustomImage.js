import React, {useEffect, useState} from 'react'
import {Platform, Image, View} from 'react-native'
import RNFS from 'react-native-fs'
import Icon from 'react-native-vector-icons/Feather'

import palette from '../theme/palette'

export default function CustomImage({avatarId, style}) {
  const [imageAddress, setImageAddress] = useState(null)
  useEffect(() => {
    downloadPhoto(avatarId).then((imagePath) => {
      setImageAddress(imagePath)
    })
  }, [avatarId])

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
          console.log('getting data was successfull')
          const fileNameWithPath = getImageFilePath(
            avatarId,
            response.headers.map['content-type'].split('/').pop()
          )
          console.log('filenamepath: ' + fileNameWithPath)
          RNFS.exists(fileNameWithPath)
            .then((file) => {
              if (file) {
                console.log('file is existed')
                resolve(fileNameWithPath)
              } else {
                console.log('file is donwloading')
                RNFS.downloadFile({
                  fromUrl:
                    'https://api.farakhu.markop.ir/api/File/Download' +
                    '?FileId=' +
                    avatarId,
                  toFile: fileNameWithPath
                })
                  .promise.then((res) => {
                    console.log(res)
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
