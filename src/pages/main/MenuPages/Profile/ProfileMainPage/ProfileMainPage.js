import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {Image, Pressable, View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import Clipboard from '@react-native-clipboard/clipboard'

import Typography from './../../../../../components/Typography/index'
import CustomButton from './../../../../../components/CustomButton'
export default function ProfileMainPage() {
  const navigation = useNavigation()
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
            <Image
              style={styles.image}
              source={require('../../../../../assets/images/sample_avatar.jpg')}
            />
            <Pressable style={styles.editImageIcon}>
              <CustomIcon name="mode_edit_24px" size={18} />
            </Pressable>
          </View>
          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="h6"
            style={styles.name}>
            آرشام رمضانی پارگامی
          </Typography>
          <Typography
            color={palette.M_3_SYS_ON_SECONDARY}
            variant="medium12"
            style={styles.rule}>
            دانشجو
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
              982023014
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
                Arsham.ramezani@gmail.com
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
            <Pressable style={styles.iconContainer}>
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
            {['Go', 'ReactNative', 'Nodejs', 'React js'].map((item) => (
              <View key={item} style={styles.favorite}>
                <Typography color={palette.M_3_SYS_ON_SURFACE} variant="body2">
                  {item}
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
        <CustomButton title="Linkedin" size="small" />
      </View>
      <View style={{marginHorizontal: 24}}>
        <CustomButton title="Google Scholar" size="small" />
      </View>
    </View>
  )
}
