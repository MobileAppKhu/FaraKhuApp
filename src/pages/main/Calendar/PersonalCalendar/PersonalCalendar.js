import React, {useState} from 'react'
import {Pressable, View} from 'react-native'
import SimpleHeader from '../../../../components/SimpleHeader'

import {ScrollView} from 'react-native-gesture-handler'
import styles from './stylesheet'
import DatePicker from '../../../../components/DatePicker'
import UpcomingEventItems from '../../Dashboard/Components/UpcomingEventItems/UpcomingEventItems'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import {useNavigation} from '@react-navigation/native'
const PersonalCalendar = () => {
  const [date, setdate] = useState()
  const navigation = useNavigation()
  console.log(date)
  return (
    <View style={styles.root}>
      <SimpleHeader title="تقويم شخصي" headerRightIcon="more_vert_24px" />
      <ScrollView>
        <View style={styles.datePicker}>
          <DatePicker onChangeText={(text) => setdate(text)} value={date} />
        </View>
        <View style={styles.eventContainer}>
          <UpcomingEventItems
            eventName="تکمیل پروژی اول"
            eventDescription="Tehran Metro with DFS"
            eventTime="22 آذر 1400"
            courseName="هوش مصنوعی"
            onPress={() => navigation.navigate('edit-todo')}
          />
          <UpcomingEventItems
            eventName="تکمیل پروژی اول"
            eventDescription="Tehran Metro with DFS"
            eventTime="22 آذر 1400"
            onPress={() => navigation.navigate('edit-todo')}
            courseName="هوش مصنوعی"
          />
          <UpcomingEventItems
            eventName="تکمیل پروژی اول"
            eventDescription="Tehran Metro with DFS"
            eventTime="22 آذر 1400"
            onPress={() => navigation.navigate('edit-todo')}
            courseName="هوش مصنوعی"
          />
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
