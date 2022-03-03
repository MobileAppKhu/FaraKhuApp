import React, {useState} from 'react'
import {View} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import useStyles from './stylesheet'
import MyCoursesCourseViewHeader from './MyCoursesCourseViewParts/MyCoursesCourseViewHeader/MyCoursesCourseViewHeader'
import MyCoursesCourseViewDetails from './MyCoursesCourseViewParts/MyCoursesCourseViewDetails/MyCoursesCourseViewDetails'
import MyCoursesCourseViewAnnouncement from './MyCoursesCourseViewParts/MyCoursesCourseViewAnnouncement/MyCoursesCourseViewAnnouncement'
import AddMenu from './MyCoursesCourseViewParts/Menus/AddMenu/AddMenu'
import ThreeDotMenu from './MyCoursesCourseViewParts/Menus/ThreeDotMenu/ThreeDotMenu'

export default function MyCoursesCourseView() {
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [showThreeDotMenu, setShowThreeDotMenu] = useState(false)
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <ScrollView>
        <MyCoursesCourseViewHeader
          courseName="هوش مصنوعی و سیستم‌های خبره"
          teacherName="دكتر ميرحسين پدارم"
          onPressThreeDot={() => setShowThreeDotMenu(true)}
        />
        <ThreeDotMenu
          visible={showThreeDotMenu}
          onBackdropPress={() => setShowThreeDotMenu(false)}
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

      <AddMenu
        visible={showAddMenu}
        setVisible={() => setShowAddMenu(true)}
        onBackdropPress={() => setShowAddMenu(false)}
      />
    </View>
  )
}
