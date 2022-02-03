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
import {request} from '../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'
import {
  addCommaToPriceUnsigned,
  convertPersianNumbersToEnglishNumbers
} from '../../../../helpers/numbers'
import {useDispatch, useSelector} from 'react-redux'
import {getUser} from './../../../../navigations/mainNavigation'
import {getUserId} from '../../../../redux/auth/actions'

const androidRipple = {borderless: true, color: '#ddd', radius: 25}

export default function EachBookShop({route}) {
  const toast = useToast()
  const dispatch = useDispatch()
  const saveUserid = async () => {
    const id = await getUser()
    dispatch(getUserId(id))
  }
  const {userId} = useSelector((state) => state.authReducer)
  if (!userId) {
    saveUserid()
  }
  const {offerId, description, price, type, title, userId: id} = route.params
  const [deleteModal, setDeleteModal] = useState(false)
  const [optionsModal, setOptionsModal] = useState(false)
  const deleteOfferFuntion = () => {
    request('/Offer/DeleteOffer', 'POST', {offerId}).then((data) => {
      if (data.status === 200) {
        toast.show('آگهی با موفقیت حذف شد', {type: 'success'})
        navigation.goBack()
      } else {
        toast.show(data.response.errors[0].message, {type: 'warning'})
      }
    })
  }
  const deleteModalButtons = [
    {
      title: 'حذف رویداد',
      color: palette.M_3_SYS_ON_PRIMARY,
      bgColor: palette.M_3_SYS_ERROR,
      onPress: deleteOfferFuntion
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
      icon: 'mode_edit_24px',
      onPress: () => {
        setOptionsModal(false)
        navigation.navigate('book-shop-edit', {
          offerId,
          description,
          price,
          type,
          title
        })
      }
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
            {id === userId && (
              <Pressable
                android_ripple={androidRipple}
                onPress={() => setOptionsModal(true)}>
                <CustomIcon
                  name="more_vert_24px"
                  size={30}
                  color={palette.M_3_SYS_INVERSE_ON_SURFACE}
                />
              </Pressable>
            )}
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
              {type}
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
              {addCommaToPriceUnsigned(
                convertPersianNumbersToEnglishNumbers(price)
              )}{' '}
              هزار تومان
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
              {description}
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />
      </ScrollView>
    </View>
  )
}
