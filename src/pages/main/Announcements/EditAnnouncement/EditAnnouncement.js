import {View} from 'react-native'
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
export default function EditAnnouncement() {
  const [title, settitle] = useState('عنوان')
  const [description, setdescription] = useState(
    ' از سال 1391  شوراي سياستگذاري  جشنواره بين‌المللي خوارزمي با توجه به گذشت ربع قرن از برگزاري جشنواره  بر آن شد تا  نگاهي نو و جستجوگر بر برگزيدگان دوره‌هاي قبل خود داشته باشد. گروه تخصصي طرح برگزیده موفق در تولید ملی تلاش دارد از ميان پژوهش‌هاي  برگزيده دوره‌هاي قبل، صاحبان طرح‌هايي را كه موفق شده‌اند در اقتصاد مقاومتي نقش موثر  ايفا نمايند و محصول را به توليد انبوه و  ايجاد شركت دانش بنيان برسانند ، شناسايي و برترين آنها را به جامعه علمي و صنعتي كشور معرفي نمايد. '
  )
  const [
    deleteAnnouncementConfirmationModalIsOpen,
    setdeleteAnnouncementConfirmationModalIsOpen
  ] = useState(false)
  const [saveAnnouncementModal, setsaveAnnouncementModal] = useState(false)
  const navigation = useNavigation()
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
          onPress={() => setsaveAnnouncementModal(true)}
        />
      </View>
      <DeleteAnnouncementConfirmationModal
        isVisible={deleteAnnouncementConfirmationModalIsOpen}
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
