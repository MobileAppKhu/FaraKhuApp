import {View} from 'react-native'
import React from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import useStyles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import ImagePicker from '../../../../components/ImagePicker'
import Typography from '../../../../components/Typography'
import {useState} from 'react'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
import {useSelector} from 'react-redux'
import {request} from '../../../../helpers/request'
import {useNavigation} from '@react-navigation/native'
import {useToast} from 'react-native-toast-notifications'
export default function NewsCreate() {
  const navigation = useNavigation()
  const toast = useToast()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const [imageUri, setimageUri] = useState()
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const addNewFunction = () => {
    request('/News/AddNews', 'POST', {
      title,
      description,
      fileId: 'smiley.png'
    }).then((response) => {
      if (response.status === 200) {
        toast.show('خبر مورد نظر اضافه شد', {
          type: 'success'
        })
        navigation.goBack()
      }
    })
  }
  const styles = useStyles()
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
            value={title}
            onChangeText={(text) => settitle(text)}
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
            value={description}
            onChangeText={(text) => setdescription(text)}
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <CustomButton
            title="ثبت خبر"
            size="small"
            startIcon="add_24px"
            startIconSize={18}
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
            disabled={!description || !title}
            onPress={addNewFunction}
          />
        </View>
      </ScrollView>
    </View>
  )
}
