import {Pressable, View} from 'react-native'
import React from 'react'
import useStyles from './stylesheet'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from 'react-redux'
import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
export default function CourseEventHeader() {
  const navigation = useNavigation()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <Pressable onPress={() => navigation.goBack()}>
        <CustomIcon
          name="icons8_back-1-False"
          size={24}
          color={palette.M_3_SYS_ON_SURFACE}
        />
      </Pressable>
      <View>
        <Typography color={palette.M_3_SYS_ON_SURFACE} variant="medium18">
          اطلاعیه جدید
        </Typography>
      </View>
      <View />
    </View>
  )
}
