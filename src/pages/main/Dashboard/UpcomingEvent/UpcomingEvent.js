import Typography from '../../../../components/Typography'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import styles from './stylesheet'
import palette from './../../../../theme/palette'
import UpcomingEventItems from '../Components/UpcomingEventItems/UpcomingEventItems'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
export default function UpcomingEvent() {
  const navigation = useNavigation()
  const [events, setevents] = useState([])
  const getEvents = async () => {
    request('/Event/GetIncomingEvents', 'POST', {}).then((data) =>
      setevents(data.response.events.events)
    )
  }
  useEffect(() => {
    getEvents()
  }, [])

  return (
    <View style={styles.root}>
      <View style={styles.topPart}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_PRIMARY}>
          فعالیت‌های پیش‌رو
        </Typography>
      </View>
      <View style={styles.eventContainer}>
        {events &&
          events.slice(0, 3).map((item) => (
            <UpcomingEventItems
              key={item.eventId}
              eventId={item.eventId}
              eventName={item.eventName}
              eventDescription={item.eventDescription}
              eventTime={item.eventTime}
              courseTitle={item.courseTitle}
              isDone={item.isDone}
              onPress={() =>
                navigation.navigate('edit-todo', {
                  eventName: item.eventName,
                  eventDescription: item.eventDescription,
                  eventTime: item.eventTime,
                  courseTitle: item.courseTitle,
                  isDone: item.isDone,
                  courseId: item.courseId,
                  eventId: item.eventId
                })
              }
            />
          ))}
      </View>
    </View>
  )
}
