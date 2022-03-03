import React from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
import useStyles from './stylesheet'
import {useNavigation} from '@react-navigation/native'
export default function BookShopHeader() {
  const navigation = useNavigation()
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
        <CustomIcon name={'arrow_back_24px'} size={24} />
      </Pressable>
      <View>
        <Typography variant="medium18" color={palette.M_3_SYS_ON_SURFACE}>
          کتاب یاب
        </Typography>
      </View>
      <View style={styles.rightIcons}>
        <Pressable>
          <CustomIcon name={'icons8_search_1-1'} size={24} />
        </Pressable>
        <Pressable>
          <CustomIcon name={'icons8_list_1-1'} size={24} />
        </Pressable>
      </View>
    </View>
  )
}
