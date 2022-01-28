import React, {useState} from 'react'
import {View, ScrollView, Pressable} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import Modal from 'react-native-modal'

import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import SimpleHeader from '../../../../components/SimpleHeader'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import styles from './stylessheet'
import CustomAlert from '../../../../components/CustomAlert'
import CustomIcon from '../../../../components/CustomIcon'

const OptionsModalItem = ({text, color, icon, onPress}) => (
  <Pressable
    onPress={onPress}
    android_ripple={{color: palette.M_3_REF_NEUTRAL_NEUTRAL_80}}
    style={styles.optionsModalItem}>
    <Typography
      variant="body2"
      color={color}
      style={styles.optionsModalItemText}>
      {text}
    </Typography>
    <CustomIcon name={icon} size={24} color={color} />
  </Pressable>
)

export default function ToDoDetails({
  date = '2 بهمن - 08:00، 37 روز مانده',
  overdue,
  title = 'امتحان پایان ترم هوش مصنوعی(شفاهی)-4نمره',
  category = 'هوش مصنوعی و سیستم های خبره',
  description = 'پاسخ پروژه مربوط به حل تمرین DFS در گوگل درایو قرار داده شده. لینک گیت هاب و گوگل کولب هم اینجا هست.'
}) {
  const [done, setDone] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [optionsModal, setOptionsModal] = useState(false)

  const deleteModalButtons = [
    {
      title: 'حذف رویداد',
      color: palette.M_3_SYS_ON_PRIMARY,
      bgColor: palette.M_3_SYS_ERROR,
      onPress: () => console.log('delete event')
    },
    {
      title: 'بیخیال',
      borderColor: palette.M_3_READ_ONLY_BLACK,
      borderWidth: 1,
      onPress: () => setDeleteModal(false)
    }
  ]

  return (
    <View style={styles.container}>
      <SimpleHeader
        title="تقویم شخصی"
        headerRightIcon="more_vert_24px"
        onHeaderRightClicked={() => setOptionsModal(true)}
      />
      <Modal
        isVisible={optionsModal}
        style={styles.optionsModalContainer}
        backdropOpacity={0}
        onBackdropPress={() => setOptionsModal(false)}
        animationIn="bounceInDown"
        animationOut="fadeOut"
        animationInTiming={500}
        animationOutTiming={-1}>
        <View style={styles.optionsModal}>
          <OptionsModalItem
            text="ویرایش"
            color={palette.M_3_SYS_PRIMARY}
            icon="mode_edit_24px"
          />
          <OptionsModalItem
            text="حذف"
            color={palette.M_3_SYS_ERROR}
            icon="icons8_delete_bin-1"
            onPress={() => {
              setOptionsModal(false)
              setDeleteModal(true)
            }}
          />
        </View>
      </Modal>

      <Modal
        isVisible={deleteModal}
        onBackdropPress={() => setDeleteModal(false)}
        onBackButtonPress={() => setDeleteModal(false)}
        animationIn="bounceIn"
        animationOut="bounceOut"
        style={styles.deleteModal}>
        <CustomAlert
          image={require('../../../../assets/images/exclamation_icon.png')}
          imageSize={24}
          title="رویداد مورد نظر حذف شود؟"
          titleColor={palette.M_3_SYS_ON_ERROR_CONTAINER}
          bgColor={palette.M_3_SYS_ERROR_CONTAINER}
          buttons={deleteModalButtons}
        />
      </Modal>

      <ScrollView style={styles.container}>
        <View style={styles.date}>
          <CheckBox
            value={done}
            onValueChange={(value) => setDone(value)}
            tintColors={{true: palette.M_3_SYS_PRIMARY}}
          />
          <Typography variant="medium12" style={overdue && styles.error}>
            {date}
          </Typography>
        </View>

        <HorizontalSeparator style={styles.separator} />

        <View style={styles.title}>
          <Typography variant="bold18">{title}</Typography>
        </View>
        <HorizontalSeparator style={styles.separator} />
        <View style={styles.description}>
          <Typography variant="body2">
            {description !== '' ? description : 'توضیحات'}
          </Typography>
        </View>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Typography variant="regular10" color={palette.M_3_SYS_BACKGROUND}>
              {category}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
