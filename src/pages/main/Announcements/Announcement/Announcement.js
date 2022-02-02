import React, {useEffect, useState} from 'react'
import DataAnnouncement from './DataAnnouncement/DataAnnouncement'
import SimpleHeader from './../../../../components/SimpleHeader'
import {Pressable, View, ScrollView, RefreshControl} from 'react-native'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import {useSelector} from 'react-redux'

export default function Announcement() {
  const navigation = useNavigation()
  const [announcement, setannouncement] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const {userId: user} = useSelector((state) => state.authReducer)
  const getAnnouncementFunction = async () => {
    setRefreshing(true)
    request('/Announcement/SearchAnnouncements', 'POST', {
      announcementIds: [],
      start: 0,
      step: 10,
      announcementColumn: 6,
      orderDirection: false,
      user
    }).then((data) => {
      if (data.status === 200) {
        setRefreshing(false)
        setannouncement(data.response.announcements)
      }
    })
  }
  useEffect(() => {
    getAnnouncementFunction()
    navigation.addListener('focus', getAnnouncementFunction)
  }, [])

  return (
    <View style={styles.container}>
      <SimpleHeader title="فراخوان" headerRightIcon={'icons8_search_1-1'} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => getAnnouncementFunction()}
          />
        }>
        <View style={{marginBottom: 88}}>
          {announcement.map((item) => (
            <DataAnnouncement
              key={item.announcementId}
              teacherName={item.userFullname}
              teacherImage={item.teacherImage}
              text={item.announcementTitle}
              date={item.announcementDescription}
              onPress={() => navigation.navigate('announcement-item', item)}
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
