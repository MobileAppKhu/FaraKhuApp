import React from 'react'
import DataAnnouncement from './DataAnnouncement/DataAnnouncement'
import SimpleHeader from './../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import {Pressable, View} from 'react-native'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
export default function Announcement() {
  return (
    <View style={styles.container}>
      <SimpleHeader title="فراخوان ها" headerRightIcon={'icons8_search_1-1'} />
      <ScrollView>
        <View style={{marginBottom: 88}}>
          {data.map((item, index) => (
            <DataAnnouncement
              key={item.text + item.teacherName + index.toString()}
              teacherName={item.teacherName}
              teacherImage={item.teacherImage}
              text={item.text}
              date={item.date}
            />
          ))}
        </View>
      </ScrollView>
      <View>
        <Pressable style={styles.buttonStyle}>
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
const data = [
  {
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1 vali konie Behnia pesare khobie1 vali konie ',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'کیرم تو بهنیا  کیرم تو بهنیا کیرم تو بهنیا کیرم تو بهنیا',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'Behnia pesare khobie2',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'Behnia pesare khobie2',
    date: '1400/10/29'
  },
  {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'Behnia pesare khobie2',
    date: '1400/10/29'
  }
]
