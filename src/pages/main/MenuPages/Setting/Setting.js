import React, {useEffect, useState} from 'react'
import {View, Image, Pressable, ActivityIndicator} from 'react-native'
import useStyles from './stylesheet'
import SimpleHeader from '../../../../components/SimpleHeader'
import Typography from '../../../../components/Typography'
import CustomIcon from '../../../../components/CustomIcon'
import {ScrollView} from 'react-native-gesture-handler'
import SettingPart from './SettingPart/SettingPart'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import {useDispatch, useSelector} from 'react-redux'
import {logOut} from '../../../../redux/auth/actions'
import {deleteUserFromStorage} from '../../../../helpers/userData'

export default function Setting() {
  const [userData, setUserData] = useState()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const getUserData = async () => {
    const {
      response: {userId}
    } = await request('/User/GetUserId', 'POST', {})

    const {
      response: {profile}
    } = await request('/User/SearchProfile', 'POST', {
      userId
    })
    setUserData(profile)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const styles = useStyles()
  return (
    <View style={styles.container}>
      <SimpleHeader
        title="تنظیمات"
        headerRightIcon={'icons8_search_1-1'}
        backgroundColor={palette.M_3_SYS_SURFACE}
        titleColor={palette.M_3_SYS_ON_SURFACE}
        itemsColor={palette.M_3_SYS_ON_SURFACE_VARIANT}
      />
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.imageText}>
            <Image
              style={styles.imageStyle}
              source={require('../../../../assets/images/sample_avatar.jpg')}
            />
            <View style={styles.textCard}>
              <Typography
                variant="body2"
                color={palette.M_3_REF_NEUTRAL_VARIANT_NEUTRAL_VARIANT_50}>
                {userData ? (
                  userData.firstName + ' ' + userData.lastName
                ) : (
                  <ActivityIndicator
                    color={palette.M_3_SYS_PRIMARY}
                    size="large"
                    animating
                  />
                )}
              </Typography>
            </View>
          </View>
          <Pressable
            style={styles.buttonCard}
            onPress={() =>
              userData ? navigation.navigate('profile-main-page', userData) : {}
            }>
            <View style={styles.textPressable}>
              <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
                تنظیمات پروفایل
              </Typography>
            </View>
            <View style={styles.iconPressable}>
              <CustomIcon
                name="arrow_back_24px"
                size={24}
                color={palette.M_3_SYS_ON_PRIMARY}
              />
            </View>
          </Pressable>
        </View>
        <SettingPart text={'تنظیمات اطلاع رسانی'} />
        <SettingPart text={'تغییر رمز عبور'} />
        <SettingPart text={'راهنمای برنامه'} />
      </ScrollView>

      <View style={styles.buttonCardmain}>
        <Pressable
          style={styles.buttonCard2}
          android_ripple={{
            color: palette.M_3_SYS_SECONDARY_CONTAINER,
            borderless: true
          }}
          onPress={async () => {
            dispatch(logOut())
            deleteUserFromStorage()
          }}>
          <View style={styles.textCard2}>
            <Typography
              variant="smallButton"
              color={palette.M_3_REF_PRIMARY_PRIMARY_40}>
              خروج از حساب کاربری
            </Typography>
          </View>
          <CustomIcon
            name="icons8_exit-1"
            size={24}
            color={palette.M_3_REF_PRIMARY_PRIMARY_40}
            style={styles.iconCard2}
          />
        </Pressable>
      </View>
    </View>
  )
}
