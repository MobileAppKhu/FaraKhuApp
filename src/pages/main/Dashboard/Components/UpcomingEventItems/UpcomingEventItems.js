import React, {useState} from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import CheckBox from '@react-native-community/checkbox'

export default function UpcomingEventItems({
  eventName,
  eventDescription,
  eventTime,
  courseName,
  showEventCheckBox = true,
  onPress = () => {}
}) {
  const [showEvent, setshowEvent] = useState(false)
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <View
        style={[
          styles.eventControler,
          showEventCheckBox ? styles.eventControlerOnShowCheckBox : {}
        ]}>
        <View
          style={[
            styles.courseNameContainer,
            showEventCheckBox ? styles.courseNameContainerOnShowCheckBox : {}
          ]}>
          <Typography variant="regular10" color={palette.M_3_SYS_ON_PRIMARY}>
            {courseName}
          </Typography>
        </View>
        {showEventCheckBox && (
          <View>
            <CheckBox
              value={showEvent}
              onValueChange={(newValue) => setshowEvent(newValue)}
            />
          </View>
        )}
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
    </Pressable>
  )
}
