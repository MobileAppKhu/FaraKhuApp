import {Pressable, View} from 'react-native'
import React, {useState} from 'react'
import styles from './stylesheet'
import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import {useNavigation} from '@react-navigation/native'
import Modal from 'react-native-modal'
import MenuItem from '../../MyCoursesCourseView/MyCoursesCourseViewParts/Menus/MenuItem/MenuItem'

const androidRipple = {color: '#ddd', borderless: true, radius: 24}

export default function MyCoursesMainPageHeader() {
  const navigation = useNavigation()
  const [moreOptionViewIsOpen, setMoreOptionViewIsOpen] = useState(false)

  const modalItems = [
    {
      text: 'ایجاد درس جدید',
      color: palette.M_3_SYS_PRIMARY,
      icon: 'add_24px',
      onPress: () => {
        setMoreOptionViewIsOpen(false)
        navigation.navigate('create-course')
      }
    }
  ]

  return (
    <Pressable style={styles.root}>
      <View style={styles.optionsConainers}>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={androidRipple}>
          <CustomIcon name="arrow_back_24px" size={24} />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Typography variant="medium18" color={palette.M_3_SYS_ON_SURFACE}>
          درس های من
        </Typography>
      </View>
      <View style={styles.searchIconContainer}>
        <Pressable android_ripple={androidRipple}>
          <CustomIcon name="icons8_search_1-1" size={24} />
        </Pressable>

        <Pressable
          style={styles.moreIconContainer}
          onPress={() => setMoreOptionViewIsOpen(true)}
          android_ripple={androidRipple}>
          <CustomIcon name="more_vert_24px" size={24} />
        </Pressable>

        <Modal
          isVisible={moreOptionViewIsOpen}
          style={styles.modalContainer}
          backdropOpacity={0}
          onBackdropPress={() => setMoreOptionViewIsOpen(false)}
          onBackButtonPress={() => setMoreOptionViewIsOpen(false)}
          animationIn="bounceInDown"
          animationOut="fadeOut"
          animationInTiming={500}
          animationOutTiming={-1}>
          <View style={styles.modalMenu}>
            {modalItems.map((item, index) => (
              <MenuItem
                key={index}
                title={item.text}
                color={item.color}
                icon={item.icon}
                onPress={item.onPress}
                fontVariant="h6"
              />
            ))}
          </View>
        </Modal>
      </View>
    </Pressable>
  )
}
