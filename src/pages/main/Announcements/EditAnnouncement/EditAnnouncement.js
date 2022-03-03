import {View} from 'react-native'
import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from '../../../../components/CustomInput'
import useStyles from './stylesheet'
import palette from '../../../../theme/palette'
import CustomButton from '../../../../components/CustomButton'
import DeleteAnnouncementConfirmationModal from './DeleteAnnouncementConfirmationModal/DeleteAnnouncementConfirmationModal'
import SaveAnnouncementModal from './SaveAnnouncementModal/SaveAnnouncementModal'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'

export default function EditAnnouncement({route}) {
  const toast = useToast()
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
  const deleteAnnouncementFunction = () => {
    request('/Announcement/DeleteAnnouncement', 'POST', {
      announcementId
    }).then((data) => {
      if (data.status === 200) {
        toast.show('فراخوان با موفقيت حذف شد', {
          type: 'success',
          duration: 3000,
          animationType: 'zoom-in'
        })
        navigation.goBack()
        navigation.goBack()
      }
    })
  }
  const editAnnouncementRequest = async ({
    announcementId,
    title,
    description,
    avatarId
  }) => {
    const response = await request('/Announcement/EditAnnouncement', 'POST', {
      announcementId,
      title,
      description,
      avatarId
    })

    if (response.status === 200) {
      setsaveAnnouncementModal(true)
    } else {
      toast.show(response.response.errors[0].message, {
        type: 'warning',
        duration: 3000,
        animationType: 'zoom-in'
      })
    }
  }
  const styles = useStyles()
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
        onDeleteAnnouncement={deleteAnnouncementFunction}
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
