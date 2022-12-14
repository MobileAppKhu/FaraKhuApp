import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Pressable, View, Linking} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import CustomIcon from '../../../../../components/CustomIcon'
import useStyles from './stylesheet'
import Clipboard from '@react-native-clipboard/clipboard'

import Typography from './../../../../../components/Typography/index'
import CustomButton from './../../../../../components/CustomButton'
import CustomImage from '../../../../../components/CustomImage'
import {useSelector} from "react-redux";

export default function ProfileMainPage({route}) {
  const navigation = useNavigation()
  const userData = route.params
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (

    <View style={styles.root}>
      <ScrollView>
        <View style={styles.topPart}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <CustomIcon
                name="arrow_back_24px"
                size={24}
                color={palette.M_3_SYS_ON_SECONDARY}
              />
            </Pressable>
            <Typography color={palette.M_3_SYS_ON_SECONDARY} variant="medium18">
              پروفایل
            </Typography>
            <View />
          </View>

          <View style={styles.imageContainer}>
            <CustomImage avatarId={userData.avatarId} style={styles.image} />
            <Pressable style={styles.editImageIcon}>
              <CustomIcon name="mode_edit_24px" size={18} />
            </Pressable>
          </View>

          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="h6"
            style={styles.name}>
            {userData.firstName + ' ' + userData.lastName}
          </Typography>
          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="medium12"
            style={styles.rule}>
            {userData.userType}
          </Typography>
          <View style={styles.studentCartImageButtonContainer}>
            <Pressable style={styles.studentCartImageButton}>
              <Typography
                variant="bold12"
                color={palette.M_3_SYS_SECONDARY_CONTAINER}>
                تصویر کارت دانشجویی
              </Typography>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.studentNumberContainer}>
            <View style={styles.iconContainer}>
              <CustomIcon
                name="person_outline_24px"
                size={24}
                color={palette.M_3_SYS_PRIMARY}
                style={styles.icon}
              />
              <Typography color={palette.M_3_SYS_PRIMARY} variant="bold12">
                شماره دانشجویی
              </Typography>
            </View>
            <Typography color={palette.M_3_SYS_OUTLINE} variant="body2">
              {userData.id}
            </Typography>
          </View>
          <View style={styles.sepetator} />
          <View style={styles.studentNumberContainer}>
            <View style={styles.iconContainer}>
              <CustomIcon
                name="mail_outline"
                size={24}
                color={palette.M_3_SYS_PRIMARY}
                style={styles.icon}
              />
              <Typography color={palette.M_3_SYS_PRIMARY} variant="bold12">
                ایمیل
              </Typography>
            </View>
            <Pressable
              onPress={() => Clipboard.setString('Arsham.ramezani@gmail.com')}>
              <Typography color={palette.M_3_SYS_OUTLINE} variant="body2">
                {userData.email}{' '}
              </Typography>
            </Pressable>
          </View>
          <View style={styles.sepetator} />
          <View style={styles.studentNumberContainer}>
            <View style={styles.iconContainer}>
              <CustomIcon
                name="star_border"
                size={24}
                color={palette.M_3_SYS_PRIMARY}
                style={styles.icon}
              />
              <Typography color={palette.M_3_SYS_PRIMARY} variant="bold12">
                علاقه مندی ها
              </Typography>
            </View>
            <Pressable
              style={styles.iconContainer}
              android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
              onPress={() => navigation.navigate('edit-profile', userData)}>
              <Typography
                color={palette.M_3_SYS_PRIMARY}
                variant="bold12"
                style={styles.icon}>
                ویرایش
              </Typography>
              <CustomIcon
                name="mode_edit_24px"
                size={24}
                color={palette.M_3_SYS_PRIMARY}
              />
            </Pressable>
          </View>
          <View>
            {userData.favourites.map((item) => (
              <View key={item.favouriteId} style={styles.favorite}>
                <Typography color={palette.M_3_SYS_ON_SURFACE} variant="body2">
                  {item.description}
                </Typography>
                <Typography
                  color={palette.M_3_SYS_ON_SURFACE}
                  variant="bold25"
                  style={styles.point}>
                  .
                </Typography>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 24, marginVertical: 20}}>
        <CustomButton
          title="Linkedin"
          size="small"
          onPress={() => {
            if (userData.linkedIn) Linking.openURL(userData.linkedIn)
          }}
        />
      </View>
      <View style={{marginHorizontal: 24}}>
        <CustomButton
          title="Google Scholar"
          size="small"
          onPress={() => {
            if (userData.googleScholar) Linking.openURL(userData.googleScholar)
          }}
        />
      </View>
    </View>
  )
}
