import {View, Platform, ToastAndroid, AlertIOS} from 'react-native'
import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from '../../../../components/CustomInput'
import styles from './stylesheet'
import palette from '../../../../theme/palette'
import CustomButton from '../../../../components/CustomButton'
import DeleteAnnouncementConfirmationModal from './DeleteAnnouncementConfirmationModal/DeleteAnnouncementConfirmationModal'
import SaveAnnouncementModal from './SaveAnnouncementModal/SaveAnnouncementModal'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'

export default function EditAnnouncement({route}) {
  const announcementData = route.params
  const {announcementId, announcementTitle, announcementDescription} =
    announcementData

  const [title, settitle] = useState(announcementTitle)
  const [description, setdescription] = useState(announcementDescription)

  const [
    deleteAnnouncementConfirmationModalIsOpen,
    setdeleteAnnouncementConfirmationModalIsOpen
  ] = useState(false)
  const [saveAnnouncementModal, setsaveAnnouncementModal] = useState(false)
  const navigation = useNavigation()

  const editAnnouncementRequest = async ({
    announcementId,
    title,
    description,
    department,
    avatarId
  }) => {
    const res = await request('/Announcement/EditAnnouncement', 'POST', {
      announcementId,
      title,
      description,
      department,
      avatarId
    })

    if (res.status === 200) {
      setsaveAnnouncementModal(true)
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('خطایی رخ داده!', ToastAndroid.SHORT)
      } else {
        AlertIOS.alert('خطایی رخ داده!')
      }
    }
  }

  const deleteAnnouncementRequest = async (announcementId) => {
    const res = await request('/Announcement/DeleteAnnouncement', 'POST', {
      announcementId
    })
    if (res.status === 200) {
      setdeleteAnnouncementConfirmationModalIsOpen(false)
      setsaveAnnouncementModal(true)
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('خطایی رخ داده!', ToastAndroid.SHORT)
      } else {
        AlertIOS.alert('خطایی رخ داده!')
      }
    }
  }

  return (
    <View style={styles.root}>
      <SimpleHeader
        title="ویرایش فراخوان"
        showHeaderRight
        headerRightText="حذف"
        onHeaderRightClicked={() =>
          setdeleteAnnouncementConfirmationModalIsOpen(true)
        }
      />
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
          title="ثبت تغییرات"
          size="small"
          style={styles.button}
          onPress={() => {
            editAnnouncementRequest({...announcementData, title, description})
            // setsaveAnnouncementModal(true)
          }}
        />
      </View>
      <DeleteAnnouncementConfirmationModal
        isVisible={deleteAnnouncementConfirmationModalIsOpen}
        onDeleteAnnouncement={() => deleteAnnouncementRequest(announcementId)}
        onClose={() => setdeleteAnnouncementConfirmationModalIsOpen(false)}
      />
      <SaveAnnouncementModal
        isVisible={saveAnnouncementModal}
        onClsoe={() => {
          setsaveAnnouncementModal(false)
          navigation.goBack()
        }}
      />
    </View>
  )
}
