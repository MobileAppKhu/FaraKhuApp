import {Pressable, View} from 'react-native'
import React from 'react'
import styles from './stylesheet'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import Typography from '../../../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
export default function NewsListHeader() {
  const navigation = useNavigation()

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
          اخبار و رویدادها
        </Typography>
      </View>
      <Pressable>
        <CustomIcon
          name="more_vert_24px"
          size={24}
          color={palette.M_3_SYS_ON_SURFACE}
        />
      </Pressable>
    </View>
  )
}
