import React from 'react'
import {Pressable} from 'react-native'
import CustomIcon from '../../../../../components/CustomIcon'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import useStyles from './stylesheet'
export default function DashboardButtonPage({iconName, title, onPress}) {
  const styles = useStyles()
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <CustomIcon name={iconName} size={50} color={palette.M_3_SYS_PRIMARY} />
      <Typography variant="bold12" color={palette.M_3_SYS_SECONDARY}>
        {title}
      </Typography>
    </Pressable>
  )
}
