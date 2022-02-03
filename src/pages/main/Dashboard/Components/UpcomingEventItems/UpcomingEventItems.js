import React, {useState} from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import styles from './stylesheet'
import CheckBox from '@react-native-community/checkbox'
import moment from 'moment-jalaali'
import {request} from '../../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'

export default function UpcomingEventItems({
  eventName,
  eventDescription,
  eventTime,
  courseTitle,
  showEventCheckBox = true,
  isDone,
  eventId,
  courseId,
  onPress = () => {}
}) {
  const toast = useToast()
  const changeIsDoneFunction = async (newValue) => {
    setshowEvent(newValue)
    request('/Event/EditEvent', 'POST', {
      eventName,
      eventDescription,
      eventTime,
      courseTitle,
      courseId,
      eventId,
      changingIsDone: newValue
    }).then((data) => {
      if (data.status !== 200) {
        toast.show('خطایی رخ داد', {
          type: 'warning'
        })
      }
    })
  }
  const [showEvent, setshowEvent] = useState(isDone)
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
            {courseTitle || 'شخصی'}
          </Typography>
        </View>
        {showEventCheckBox && (
          <View>
            <CheckBox value={showEvent} onValueChange={changeIsDoneFunction} />
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
          {moment(eventTime).locale('fa').format('YYYY-jMM-jDD')}
        </Typography>
      </View>
    </Pressable>
  )
}
