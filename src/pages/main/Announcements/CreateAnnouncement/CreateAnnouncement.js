import {View} from 'react-native'
import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../../components/CustomInput'
import useStyles from './stylesheet'
import CustomButton from '../../../../components/CustomButton'
import {request} from './../../../../helpers/request'
import {useNavigation} from '@react-navigation/native'
import {useToast} from 'react-native-toast-notifications'
import {useSelector} from "react-redux";
export default function CreateAnnouncement() {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const navigation = useNavigation()
  const toast = useToast()
  const createAnnouncementFunction = () => {
    request('/Announcement/AddAnnouncement', 'POST', {
      title,
      description,
      department: '',
      avatar: ''
    }).then(() => {
      toast.show('فرخوان با موفقيت ساخته شد', {
        type: 'success',
        animationType: 'zoom-in'
      })
      navigation.goBack()
    })
  }
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <SimpleHeader title="ایجاد فراخوان" />
      <ScrollView>
        <View style={styles.optionsContainer}>
          <CustomInput
            label="عنوان:"
            labelColor={palette.M_3_SYS_PRIMARY}
            value={title}
            onChangeText={(text) => settitle(text)}
          />
          <CustomInput
            value={description}
            label="توضیحات:"
            labelColor={palette.M_3_SYS_PRIMARY}
            multiline
            numberOfLines={19}
            textAlignVertical="top"
            onChangeText={(text) => setdescription(text)}
          />
        </View>
      </ScrollView>
      <View style={styles.optionsContainer}>
        <CustomButton
          title="ایجاد فراخوان"
          size="small"
          style={styles.button}
          onPress={createAnnouncementFunction}
          disabled={!title || !description}
        />
      </View>
    </View>
  )
}
