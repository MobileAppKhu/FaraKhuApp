import {Pressable, View} from 'react-native'
import React, {useState} from 'react'
import styles from './stylesheet'
import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import {useNavigation} from '@react-navigation/native'
import Modal from 'react-native-modal'

export default function MyCoursesMainPageHeader() {
  const navigation = useNavigation()
  const [moreOptionViewIsOpen, setmoreOptionViewIsOpen] = useState(false)
  return (
    <Pressable style={styles.root}>
      <View style={styles.optionsConainers}>
        <Pressable onPress={() => navigation.goBack()}>
          <CustomIcon name="arrow_back_24px" size={24} />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Typography variant="medium18" color={palette.M_3_SYS_ON_SURFACE}>
          درس های من
        </Typography>
      </View>
      <View style={styles.searchIconContainer}>
        <Pressable>
          <CustomIcon name="icons8_search_1-1" size={24} />
        </Pressable>
        <Pressable
          style={styles.moreIconContainer}
          onPress={() => setmoreOptionViewIsOpen(true)}>
          <CustomIcon name="more_vert_24px" size={24} />
        </Pressable>
        <Modal
          isVisible={moreOptionViewIsOpen}
          onBackdropPress={() => setmoreOptionViewIsOpen(false)}
          animationInTiming={-1}
          animationOutTiming={-1}
          backdropOpacity={0}>
          <Pressable style={styles.modal}>
            <Typography variant="h6" color={palette.M_3_SYS_PRIMARY}>
              ایجاد درس جدید
            </Typography>
            <CustomIcon
              color={palette.M_3_SYS_PRIMARY}
              name="icon_add"
              size={24}
            />
          </Pressable>
        </Modal>
      </View>
    </Pressable>
  )
}
