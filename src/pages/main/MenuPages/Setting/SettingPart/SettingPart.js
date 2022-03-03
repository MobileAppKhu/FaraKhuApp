import React from 'react'
import {Pressable, View} from 'react-native'
import useStyles from './stylesheet'
import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import palette from '../../../../../theme/palette'
export default function SettingPart({text, onPress}) {
  //   const navigation = useNavigation()
  const styles = useStyles()
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <View>
        <Typography variant="h6" color={palette.M_3_SYS_ON_SURFACE_VARIANT}>
          {text}
        </Typography>
      </View>
      <View>
        <CustomIcon
          name="arrow_back_24px"
          size={24}
          color={palette.M_3_SYS_TERTIARY}
        />
      </View>
    </Pressable>
  )
}
