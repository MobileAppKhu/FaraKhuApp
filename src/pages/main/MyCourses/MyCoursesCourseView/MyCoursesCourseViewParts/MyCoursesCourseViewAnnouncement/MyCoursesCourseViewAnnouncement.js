import React from 'react'
import {View} from 'react-native'
import useStyles from './stylesheet'
import UpcomingEventItems from '../../../../Dashboard/Components/UpcomingEventItems/UpcomingEventItems'
import Typography from '../../../../../../components/Typography'
import PollEventItems from './../../../../Dashboard/Components/PollEventItems/PollEventItems'
import {useSelector} from "react-redux";

export default function MyCoursesCourseViewAnnouncement() {
    const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <View style={styles.topPart}>
        <Typography variant="h5" color={palette.M_3_SYS_ON_PRIMARY}>
          اطلاعیه‌ها و رویدادها
        </Typography>
      </View>
      <View style={styles.eventContainer}>
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="2022-02-26"
          courseName="هوش مصنوعی"
        />
        <PollEventItems
          eventName="نظرسنجی: «کدام تاریخ برای کوییز سوم برای شما مناسب است؟»"
          eventTime="28 آذر 1400"
        />
        <UpcomingEventItems
          eventName="تکمیل پروژی اول"
          eventDescription="Tehran Metro with DFS"
          eventTime="2022-02-26"
          courseName="هوش مصنوعی"
          showEventCheckBox={false}
        />
      </View>
    </View>
  )
}
