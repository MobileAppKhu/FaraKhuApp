import React from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import CustomIcon from '../../../../../components/CustomIcon'

export default function PollEventItems({eventName, eventTime}) {
  return (
    <Pressable style={styles.root}>
      <Typography variant="bold12" color={palette.M_3_SYS_ON_SURFACE}>
        {eventName}
      </Typography>
      <View style={styles.eventControler}>
        <CustomIcon
          name="icons8_back-1-False"
          size={24}
          color={palette.M_3_SYS_TERTIARY}
          style={{marginLeft: 16}}
        />
      </View>
      <View style={styles.eventDetails}>
        <Typography
          variant="medium12"
          color={palette.M_3_SYS_ON_SURFACE}
          style={styles.timeContainer}>
          {eventTime}
        </Typography>
      </View>
    </Pressable>
  )
}
