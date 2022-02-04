import React, {useEffect, useState} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator
} from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {useNavigation} from '@react-navigation/native'
import ToggleSwitch from 'toggle-switch-react-native'

import Typography from '../../components/Typography'
import Icon from 'react-native-vector-icons/Feather'
import palette from '../../theme/palette'
import HorizontalSeparator from '../../components/HorizontalSeparator'
import {changeTheme} from './../../redux/auth/actions'
import {request} from '../../helpers/request'
import {useDispatch} from 'react-redux'
import CustomImage from '../../components/CustomImage'

const DrawerItem = ({icon, title, onPress}) => {
  return (
    <View style={styles.drawerItemContainer}>
      <Pressable
        onPress={onPress}
        style={styles.drawerItemInnerContainer}
        android_ripple={{
          color: palette.M_3_SYS_SECONDARY_CONTAINER,
          borderless: true
        }}>
        <Typography variant="body2">{title}</Typography>
        <Image
          source={icon}
          style={styles.drawerItemIcon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  )
}

function CustomDrawer(props) {
  const [darkTheme, setDarkTheme] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [userData, setUserData] = useState()

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

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: palette.M_3_READ_ONLY_SURFACE_1
      }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: 20
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row-reverse',
              paddingHorizontal: 20,
              alignItems: 'center'
            }}>
            <CustomImage
              avatarId={userData?.avatarId}
              style={{
                width: 38,
                height: 38,
                borderRadius: 30,
                marginStart: 16
              }}
            />

            {/* <Image source={require('../../assets/images/sample_avatar.jpg')} /> */}
            <Typography variant="h6">
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

          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: 25,
              paddingHorizontal: 35,
              justifyContent: 'space-between'
            }}>
            <View style={{flexDirection: 'row-reverse'}}>
              <Icon
                name={darkTheme ? 'moon' : 'sun'}
                size={22}
                color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}
                style={{
                  marginStart: 13
                }}
              />
              <Typography variant="h6">
                {darkTheme ? 'تم تاریک' : 'تم روشن'}
              </Typography>
            </View>
            <ToggleSwitch
              isOn={darkTheme}
              onColor={palette.M_3_SYS_PRIMARY}
              offColor={palette.M_3_SYS_SURFACE_VARIANT}
              size="small"
              onToggle={() => {
                setDarkTheme(!darkTheme)
                dispatch(changeTheme(darkTheme))
              }}
              animationSpeed={200}
            />
          </View>
        </View>

        <HorizontalSeparator
          margin={16}
          color={palette.M_3_SYS_OUTLINE}
          width="85%"
          style={{alignSelf: 'center'}}
        />

        <View>
          <Typography
            variant="body2"
            color={palette.M_3_SYS_OUTLINE}
            style={{paddingHorizontal: 24, marginBottom: 10}}>
            سامانه های دیگر
          </Typography>
          <DrawerItem
            icon={require(`../../assets/images/self.png`)}
            title="سلف و رزور غذا"
            onPress={() =>
              navigation.navigate('web-view', {uri: 'https://efood.khu.ac.ir/'})
            }
          />
          <DrawerItem
            icon={require(`../../assets/images/library.png`)}
            title="کتابخانه مرکزی"
            onPress={() =>
              navigation.navigate('web-view', {
                uri: 'http://library.khu.ac.ir/'
              })
            }
          />
          <DrawerItem
            icon={require(`../../assets/images/email.png`)}
            title="ایمیل دانشگاهی"
            onPress={() =>
              navigation.navigate('web-view', {
                uri: 'https://mail.khu.ac.ir/'
              })
            }
          />
          <DrawerItem
            icon={require(`../../assets/images/request.png`)}
            title="سامانه آموزش مجازی LMS"
            onPress={() =>
              navigation.navigate('web-view', {
                uri: 'https://lms.khu.ac.ir/'
              })
            }
          />
        </View>

        <HorizontalSeparator
          margin={10}
          color={palette.M_3_SYS_OUTLINE}
          width="85%"
          style={{alignSelf: 'center'}}
        />

        <View>
          <DrawerItem
            icon={require(`../../assets/images/settings.png`)}
            title="تنظیمات"
            onPress={() => navigation.navigate('setting')}
          />
          <DrawerItem
            icon={require(`../../assets/images/question.png`)}
            title="سوالات متداول"
            onPress={() =>
              navigation.navigate('web-view', {
                uri: 'https://khu.ac.ir/page/23666/%D9%BE%D8%A7%D8%B3%D8%AE-%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84'
              })
            }
          />
          <DrawerItem
            icon={require(`../../assets/images/message.png`)}
            title="پشتیبانی"
          />
          <DrawerItem
            icon={require(`../../assets/images/phone.png`)}
            title="ارتباط با دانشگاه"
            onPress={() =>
              navigation.navigate('web-view', {
                uri: 'https://khu.ac.ir/page/5757/%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7-%D8%A8%D8%A7-%D9%85%D8%A7'
              })
            }
          />
          <DrawerItem
            icon={require(`../../assets/images/exclamation.png`)}
            title="درباره ما"
          />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerItemContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: palette.M_3_READ_ONLY_SURFACE_1
  },
  drawerItemInnerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  drawerItemIcon: {
    width: 24,
    height: 30,
    marginStart: 13
  }
})

export default CustomDrawer
