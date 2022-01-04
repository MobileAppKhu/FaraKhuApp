import Typography from '../../../../components/Typography'
import React from 'react'
import {View} from 'react-native'
import styles from './stylesheet'
import palette from './../../../../theme/palette'
import UpcomingEventItems from '../Components/UpcomingEventItems/UpcomingEventItems'
export default function UpcomingEvent() {
  return (
    <View style={styles.root}>
      <View style={styles.topPart}>
        <Typography variant="h4" color={palette.M_3_SYS_ON_PRIMARY}>
          رویدادهای نزدیک
        </Typography>
      </View>
      <View style={styles.eventContainer}>
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="22 آذر 1400"
          courseName="هوش مصنوعی"
        />
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="22 آذر 1400"
          courseName="هوش مصنوعی"
        />
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="22 آذر 1400"
          courseName="هوش مصنوعی"
        />
      </View>
    </View>
  )
}
