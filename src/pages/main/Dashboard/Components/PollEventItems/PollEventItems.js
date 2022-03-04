import React from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import useStyles from './stylesheet'
import CustomIcon from '../../../../../components/CustomIcon'
import {useSelector} from "react-redux";

export default function PollEventItems({eventName, eventTime}) {
  const styles = useStyles()
    const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <Pressable style={styles.root}>
      <View style={styles.eventControler}>
        <CustomIcon
          name="icons8_back-1-False"
          size={24}
          color={palette.M_3_SYS_TERTIARY}
        />
      </View>
      <View style={styles.eventDetails}>
        <Typography variant="bold12" color={palette.M_3_SYS_ON_SURFACE}>
          {eventName}
        </Typography>
        <View>
          <Typography
            variant="medium12"
            color={palette.M_3_SYS_ON_SURFACE}
            style={styles.timeContainer}>
            {eventTime}
          </Typography>
        </View>
      </View>
    </Pressable>
  )
}
