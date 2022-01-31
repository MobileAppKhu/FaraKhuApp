import React, {useState} from 'react'
import {View, Pressable, Image, ScrollView} from 'react-native'
import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'

import styles from './stylesheet'
import CustomButton from './../../../../components/CustomButton'
import Modal from 'react-native-modal'
import {useNavigation} from '@react-navigation/native'

export default function AnnouncementView() {
  const [moreOptionViewIsOpen, setmoreOptionViewIsOpen] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.AnnouncementHeader}>
        <View>
          <Pressable onPress={() => setmoreOptionViewIsOpen(true)}>
            <CustomIcon
              name="more_vert_24px"
              size={24}
              color={palette.M_3_SYS_ON_PRIMARY}
            />
          </Pressable>
          <Modal
            isVisible={moreOptionViewIsOpen}
            onBackdropPress={() => setmoreOptionViewIsOpen(false)}
            animationInTiming={-1}
            animationOutTiming={-1}
            backdropOpacity={0}>
            <Pressable
              style={styles.modal}
              onPress={() => {
                setmoreOptionViewIsOpen(false)
                navigation.navigate('edit-announcement')
              }}>
              <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
                ویرایش
              </Typography>
              <CustomIcon
                color={palette.M_3_SYS_PRIMARY}
                name="mode_edit_24px"
                size={24}
                style={styles.editIcon}
              />
            </Pressable>
          </Modal>
        </View>
        <Typography style={styles.pageTitle}>فراخوان‌ها</Typography>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{
            color: palette.M_3_SYS_ON_PRIMARY,
            borderless: true,
            radius: 30
          }}>
          <CustomIcon
            name="ck_24pxarrow_ba"
            size={24}
            color={palette.M_3_SYS_ON_PRIMARY}
          />
        </Pressable>
      </View>
      <View style={styles.AnnouncementTitleContainer}>
        <View style={styles.AnnouncemenAuthor}>
          <Image
            source={require('../../../../assets/images/sample_avatar.jpg')}
            style={styles.authorAvatar}
          />
          <Typography variant="medium13" color={palette.M_3_SYS_PRIMARY}>
            دکتر میرحسین پدرام
          </Typography>
        </View>
        <Typography
          style={styles.AnnouncemenTitle}
          variant="bold20"
          color={palette.M_3_SYS_TERTIARY}>
          همکاری در ساخت دستگاه ضدعفونی کننده برای دانشگاه
        </Typography>
        <Typography style={styles.AnnouncemenDate} variant="medium12">
          29 آذر 1400
        </Typography>
      </View>
      <View style={styles.AnnouncementDetails}>
        <View style={styles.AnnouncementDetailsButton}>
          <Pressable
            android_ripple={{
              color: palette.M_3_SYS_SURFACE_VARIANT,
              radius: 30,
              borderless: true
            }}>
            <CustomIcon
              name="icons8_left_send"
              size={24}
              color={palette.M_3_REF_PRIMARY_PRIMARY_0}
            />
          </Pressable>
        </View>
        <Typography
          style={{marginRight: 15, marginBottom: 8}}
          variant="h5"
          color={palette.M_3_SYS_ON_SURFACE}>
          توضیحات:
        </Typography>
        <ScrollView>
          <Typography variant="body2">
            از دانشجویان علاقه‌مند رشته مکانیک برای شرکت در روند ساخت استندهای
            ضدعفونی کننده، دعوت به همکاری می‌شود. علاقه‌مندان می‌توانند برای
            مشارکت در این پروژه، به اتاق 103 دانشکده فنی و مهندسی در ساعات 10
            الی 12 مراجعه کنند.
          </Typography>
        </ScrollView>
        <CustomButton title="ارسال ایمیل به فراخوان دهنده" size="small" />
      </View>
    </View>
  )
}
