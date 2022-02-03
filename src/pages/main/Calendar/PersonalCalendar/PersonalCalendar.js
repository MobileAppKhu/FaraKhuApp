/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Pressable, RefreshControl, View} from 'react-native'
import SimpleHeader from '../../../../components/SimpleHeader'

import {ScrollView} from 'react-native-gesture-handler'
import styles from './stylesheet'
import DatePicker from '../../../../components/DatePicker'
import UpcomingEventItems from '../../Dashboard/Components/UpcomingEventItems/UpcomingEventItems'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import moment from 'moment-jalaali'
const PersonalCalendar = () => {
  const [date, setdate] = useState()
  const navigation = useNavigation()
  const [events, setevents] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getToDoList = async () => {
    setRefreshing(true)
    request('/Event/SearchEvent', 'POST', {
      eventIds: [],
      eventTime: date
        ? moment(
            moment(date).locale('fa').format('YYYY-MM-DD'),
            'jYYYY-jMM-jDD'
          ).format('YYYY-MM-DD')
        : undefined,
      start: 0,
      step: 10,
      eventColumn: 6,
      orderDirection: false
    }).then((data) => {
      console.log(
        moment(
          moment(date).locale('fa').format('YYYY-MM-DD'),
          'jYYYY-jMM-jDD'
        ).format('YYYY-MM-DD')
      )
      setevents(data.response.event)
    })
    setRefreshing(false)
  }
  useEffect(() => {
    getToDoList()
    navigation.addListener('focus', getToDoList)
  }, [date])
  return (
    <View style={styles.root}>
      <SimpleHeader title="تقویم شخصی" headerRightIcon="more_vert_24px" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => getToDoList()}
          />
        }>
        <View style={styles.datePicker}>
          <DatePicker onChangeText={(text) => setdate(text)} value={date} />
        </View>
        <View style={styles.eventContainer}>
          {events &&
            events.map((item) => (
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
      </ScrollView>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('create-todo')}>
        <View style={styles.addiconStyle}>
          <View style={styles.textStyle}>
            <Typography
              variant="h6"
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
              رویداد جدید
            </Typography>
          </View>
          <View style={styles.iconStyle}>
            <CustomIcon
              name="mode_edit_24px"
              size={24}
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
            />
          </View>
        </View>
      </Pressable>
    </View>
  )
}
export default PersonalCalendar
