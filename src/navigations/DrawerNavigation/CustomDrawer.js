import React, {useState} from 'react'
import {View, StyleSheet, Image, Pressable} from 'react-native'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {useNavigation} from '@react-navigation/native'
import ToggleSwitch from 'toggle-switch-react-native'

import Typography from '../../components/Typography'
import Icon from 'react-native-vector-icons/Feather'
import palette from '../../theme/palette'
import HorizontalSeparator from '../../components/HorizontalSeparator'

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

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
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
            <Image
              source={require('../../assets/images/sample_avatar.jpg')}
              style={{
                width: 38,
                height: 38,
                borderRadius: 30,
                marginStart: 16
              }}
            />
            <Typography variant="h6">کامیار غضنفری</Typography>
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
              <Typography variant="h6">تم تاریک</Typography>
            </View>
            <ToggleSwitch
              isOn={darkTheme}
              onColor={palette.M_3_SYS_PRIMARY}
              offColor={palette.M_3_SYS_SURFACE_VARIANT}
              size="small"
              onToggle={() => setDarkTheme(!darkTheme)}
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
          />
          <DrawerItem
            icon={require(`../../assets/images/library.png`)}
            title="کتابخانه مرکزی"
            onPress={() => navigation.navigate('bookshop-view')}
          />
          <DrawerItem
            icon={require(`../../assets/images/email.png`)}
            title="ایمیل دانشگاهی"
          />
          <DrawerItem
            icon={require(`../../assets/images/request.png`)}
            title="درخواست‌های دانشجویی"
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
          />
          <DrawerItem
            icon={require(`../../assets/images/message.png`)}
            title="پشتیبانی"
          />
          <DrawerItem
            icon={require(`../../assets/images/phone.png`)}
            title="تماس با ما"
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
    justifyContent: 'center'
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
