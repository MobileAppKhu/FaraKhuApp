import React from 'react'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import styles from './stylesheet'
import MyCoursesCourseViewHeader from './MyCoursesCourseViewParts/MyCoursesCourseViewHeader/MyCoursesCourseViewHeader'
import MyCoursesCourseViewDetails from './MyCoursesCourseViewParts/MyCoursesCourseViewDetails/MyCoursesCourseViewDetails'
import MyCoursesCourseViewAnnouncement from './MyCoursesCourseViewParts/MyCoursesCourseViewAnnouncement/MyCoursesCourseViewAnnouncement'

export default function MyCoursesCourseView() {
  return (
    <View style={styles.root}>
      <ScrollView>
        <MyCoursesCourseViewHeader
          courseName="هوش مصنوعی و سیستم‌های خبره"
          teacherName="دكتر ميرحسين پدارم"
        />
        <MyCoursesCourseViewDetails
          examDate="۱۴۰۰/۱۰/۲۹"
          classTime={[
            {day: 'شنبه', hour: '۰۸:۰۰'},
            {day: 'چهارشنبه', hour: '۰۸:۰۰'}
          ]}
          location="ساختمان مرکزی-کلاس ۱۴۰"
        />
        <MyCoursesCourseViewAnnouncement />
      </ScrollView>
    </View>
  )
}