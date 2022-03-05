import {View} from 'react-native'
import React from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import styles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import ImagePicker from '../../../../components/ImagePicker'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import {useState} from 'react'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
export default function NewsCreate() {
  const [imageUri, setimageUri] = useState()
  return (
    <View style={styles.root}>
      <SimpleHeader title="ثبت خبر جدید" />
      <ScrollView>
        <View style={styles.imageInput}>
          <ImagePicker
            imageUri={imageUri}
            onChangeImage={(uri) => setimageUri(uri)}
            width={144}
            height={144}
          />
          <Typography variant="bold18" color={palette.M_3_SYS_ON_BACKGROUND}>
            عکس خبر:
          </Typography>
        </View>
        <View style={styles.seperator} />
        <View style={styles.titleContianer}>
          <CustomInput
            placeholder="عنوان"
            label="عنوان خبر:"
            required
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.pickerLabelStyle}
          />
        </View>
        <View style={styles.seperator} />
        <View style={styles.descriptionContainer}>
          <CustomInput
            label="توضیحات خبر:"
            required
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.pickerLabelStyle}
            style={styles.descriptionInput}
            multiline
            textAlignVertical="top"
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <CustomButton
            title="ثبت خبر"
            size="small"
            startIcon="add_24px"
            startIconSize={18}
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
          />
        </View>
      </ScrollView>
    </View>
  )
}
