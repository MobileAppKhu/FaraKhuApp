import React from 'react'
import {Pressable} from 'react-native'
import {useSelector} from 'react-redux'
import CustomIcon from '../../../../../components/CustomIcon'
import Typography from '../../../../../components/Typography'
import useStyles from './stylesheet'
export default function DashboardButtonPage({iconName, title, onPress}) {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)

  return (
    <Pressable style={styles.root} onPress={onPress}>
      <CustomIcon name={iconName} size={50} color={palette.M_3_SYS_PRIMARY} />
      <Typography variant="bold12" color={palette.M_3_SYS_SECONDARY}>
        {title}
      </Typography>
    </Pressable>
  )
}
