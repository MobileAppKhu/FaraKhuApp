import React from 'react'
import {View} from 'react-native'
import styles from './stylesheet'
import palette from '../../../../../../theme/palette'
import UpcomingEventItems from '../../../../Dashboard/Components/UpcomingEventItems/UpcomingEventItems'
import Typography from '../../../../../../components/Typography'
import PollEventItems from './../../../../Dashboard/Components/PollEventItems/PollEventItems'

export default function MyCoursesCourseViewAnnouncement() {
  return (
    <View style={styles.root}>
      <View style={styles.topPart}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_PRIMARY}>
          فعالیت‌های پیش‌رو
        </Typography>
      </View>
      <View style={styles.eventContainer}>
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="22 آذر 1400"
          courseName="هوش مصنوعی"
        />
        <PollEventItems eventName="تکمیل پروژی اول" eventTime="22 آذر 1400" />
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="22 آذر 1400"
          courseName="هوش مصنوعی"
          showEventCheckBox={false}
        />
      </View>
    </View>
  )
}
