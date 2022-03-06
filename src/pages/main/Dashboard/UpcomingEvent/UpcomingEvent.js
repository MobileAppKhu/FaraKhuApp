import Typography from '../../../../components/Typography'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import useStyles from './stylesheet'
import UpcomingEventItems from '../Components/UpcomingEventItems/UpcomingEventItems'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import {useSelector} from "react-redux";
export default function UpcomingEvent() {
    const {theme: palette} = useSelector((state) => state.authReducer)
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
  // const theme = useSelector((state) => state.authReducer.theme)

  const styles = useStyles()
  return (
    <View style={styles.root}>
      <View style={styles.topPart}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_PRIMARY}>
          فعالیت‌های پیش‌رو
        </Typography>
      </View>

      <View style={styles.eventContainer}>
        {events.length > 0 ? (
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
          ))
        ) : (
          <View style={styles.noEventContainer}>
            <Typography variant="h5">فعالیت نزدیکی نداریم</Typography>
          </View>
        )}
      </View>
    </View>
  )
}
