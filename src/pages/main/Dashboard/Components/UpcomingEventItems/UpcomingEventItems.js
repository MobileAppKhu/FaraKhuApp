import React, {useState} from 'react'
import {View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import CheckBox from '@react-native-community/checkbox'

export default function UpcomingEventItems({
  eventName,
  eventDescription,
  eventTime,
  courseName
}) {
  const [showEvent, setshowEvent] = useState(false)
  return (
    <View style={styles.root}>
      <View style={styles.eventControler}>
        <View style={styles.courseNameContainer}>
          <Typography variant="regular10" color={palette.M_3_SYS_ON_PRIMARY}>
            {courseName}
          </Typography>
        </View>
        <View>
          <CheckBox
            value={showEvent}
            onValueChange={(newValue) => setshowEvent(newValue)}
          />
        </View>
      </View>
      <View style={styles.eventDetails}>
        <Typography variant="bold12" color={palette.M_3_SYS_ON_SURFACE}>
          {eventName}
        </Typography>
        <Typography variant="bold12" color={palette.M_3_SYS_ON_SURFACE}>
          {eventDescription}
        </Typography>
        <Typography
          variant="medium12"
          color={palette.M_3_SYS_ON_SURFACE}
          style={styles.timeContainer}>
          {eventTime}
        </Typography>
      </View>
    </View>
  )
}
