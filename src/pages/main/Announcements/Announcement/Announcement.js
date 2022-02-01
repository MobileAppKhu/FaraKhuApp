import React, {useEffect, useState} from 'react'
import DataAnnouncement from './DataAnnouncement/DataAnnouncement'
import SimpleHeader from './../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import {Pressable, View} from 'react-native'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
export default function Announcement() {
  const navigation = useNavigation()
  // eslint-disable-next-line no-unused-vars
  const [announcement, setannouncement] = useState([])
  const getAnnouncementFunction = () => {
    request('/Announcement/SearchAnnouncements', 'POST', {
      announcementIds: [],
      start: 0,
      step: 10,
      announcementColumn: 1,
      orderDirection: true
    }).then((data) => setannouncement(data.response.announcements))
  }
  useEffect(() => {
    getAnnouncementFunction()
  }, [])

  return (
    <View style={styles.container}>
      <SimpleHeader title="فراخوان ها" headerRightIcon={'icons8_search_1-1'} />
      <ScrollView>
        <View style={{marginBottom: 88}}>
          {announcement.map((item) => (
            <DataAnnouncement
              key={item.announcementId}
              teacherName={item.userFullname}
              teacherImage={item.teacherImage}
              text={item.announcementTitle}
              date={item.announcementDescription}
            />
          ))}
        </View>
      </ScrollView>
      <View>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('create-announcement')}>
          <View style={styles.addiconStyle}>
            <View style={styles.textStyle}>
              <Typography
                variant="h6"
                color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
                فراخوان جدید
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
    </View>
  )
}
