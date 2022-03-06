import React, {useState} from 'react'
import {Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import useStyles from './stylesheet'
import CheckBox from '@react-native-community/checkbox'
import moment from 'moment-jalaali'
import {request} from '../../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'
import {useSelector} from "react-redux";

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
  const {theme: palette} = useSelector((state) => state.authReducer)
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
  const styles = useStyles()
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
          {moment(eventTime).locale('fa').format('jYYYY-jMM-jDD')}
        </Typography>
      </View>
    </Pressable>
  )
}
