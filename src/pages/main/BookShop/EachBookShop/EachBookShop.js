import React, {useState} from 'react'
import {ImageBackground, Pressable, View, ScrollView} from 'react-native'

import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import CustomIcon from '../../../../components/CustomIcon'
import styles from './stylesheet'
import DeleteModal from './DeleteModal'
import OptionsModal from './OptionsModal'
import {useNavigation} from '@react-navigation/native'

const androidRipple = {borderless: true, color: '#ddd', radius: 25}

export default function EachBookShop({
  title = '5 کتاب اصلی مهندسی کامپیوتر یکجا',
  adType = 'فروش',
  price = 400
}) {
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

  const optionsModalItems = [
    {
      text: 'ویرایش',
      color: palette.M_3_SYS_PRIMARY,
      icon: 'mode_edit_24px'
    },
    {
      text: 'حذف',
      color: palette.M_3_SYS_ERROR,
      icon: 'icons8_delete_bin-1',
      onPress: () => {
        setOptionsModal(false)
        setDeleteModal(true)
      }
    }
  ]
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../../../assets/images/sample_avatar.jpg')}
          style={styles.imageContainer}>
          <View style={styles.optionsIcon}>
            <Pressable
              android_ripple={androidRipple}
              onPress={() => navigation.goBack()}>
              <CustomIcon
                name="arrow_back_24px"
                size={30}
                color={palette.M_3_SYS_INVERSE_ON_SURFACE}
              />
            </Pressable>

            <Pressable
              android_ripple={androidRipple}
              onPress={() => setOptionsModal(true)}>
              <CustomIcon
                name="more_vert_24px"
                size={30}
                color={palette.M_3_SYS_INVERSE_ON_SURFACE}
              />
            </Pressable>
          </View>

          <OptionsModal
            isVisible={optionsModal}
            onBackdropPress={() => setOptionsModal(false)}
            items={optionsModalItems}
          />

          <DeleteModal
            isVisible={deleteModal}
            buttons={deleteModalButtons}
            onBackdropPress={() => setDeleteModal(false)}
            onBackButtonPress={() => setDeleteModal(false)}
          />
        </ImageBackground>

        <View style={styles.titleContainer}>
          <Typography
            variant="h4"
            color={palette.M_3_SYS_ON_BACKGROUND}
            style={styles.title}>
            {title}
          </Typography>

          <View style={styles.adType}>
            <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
              {adType}
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />

        <View style={styles.price}>
          <View>
            <Typography variant="body1" color={palette.M_3_SYS_OUTLINE}>
              قیمت
            </Typography>
          </View>
          <View>
            <Typography
              variant="h6"
              color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
              {price} هزار تومان
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />

        <View style={{marginHorizontal: 16}}>
          <View>
            <Typography variant="bold18" color={palette.M_3_SYS_ON_BACKGROUND}>
              توضیحات
            </Typography>
          </View>
          <View style={{marginTop: 16}}>
            <Typography variant="body2" color={palette.M_3_SYS_ON_BACKGROUND}>
              ❌❌فوری❌❌ من به تازگی از رشته‌ی مهندسی کامپیوتر فارغ التحصیل
              شدم و دیگه این کتا‌ب‌ها به دردم نمیخورن، اما واقعا کتاب های خوب و
              شاخصی هستن و اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز
              پیدا می کنید: Java How to Deitel - - معماری کامپیوتر پترسون
              (ویرایش RISC-V) Java How to Deitel - C++How to Deitel - Clean Code
              for Dummies - اگر تمایل به خرید دارید، میتونید به این ایمیل پیام
              بدید: ce_khu@khu.ac.ir 👈🏼 📧 قیمت ها واقعا منصفانه هستن و از این
              کمتر نمیشه. فقط هم فروش یکجا. شدم و دیگه این کتا‌ب‌ها به دردم
              نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و اگر ترم اولی هستید
              قطعا در آینده به این کتاب ها نیاز پیدا می کنید: Java How to Deitel
              - - معماری کامپیوتر پترسون (ویرایش RISC-V) Java How to Deitel -
              C++How to Deitel - Clean Code for Dummies - اگر تمایل به خرید
              دارید، میتونید به این ایمیل پیام بدید: ce_khu@khu.ac.ir 👈🏼 📧 قیمت
              ها واقعا منصفانه هستن و از این کمتر نمیشه. فقط هم فروش یکجا.
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />
      </ScrollView>
    </View>
  )
}
