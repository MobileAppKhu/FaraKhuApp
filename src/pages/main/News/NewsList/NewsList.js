import {Pressable, View} from 'react-native'
import React from 'react'
import NewsListHeader from './NewsListHeader/NewsListHeader'
import useStyles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import NewsListItem from './NewsListItem/NewsListItem'
import Typography from '../../../../components/Typography'
import CustomIcon from '../../../../components/CustomIcon'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
export default function NewsList() {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
  const navigation = useNavigation()
  return (
    <View style={styles.root}>
      <NewsListHeader />
      <ScrollView>
        <View style={styles.itemsContainer}>
          {Array(8)
            .fill(null)
            .map((item, index) => (
              <NewsListItem key={index.toString()} />
            ))}
        </View>
      </ScrollView>
      <View>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('news-create')}>
          <View style={styles.textStyle}>
            <Typography
              variant="h6"
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
              خبر جدید
            </Typography>
          </View>
          <View style={styles.iconStyle}>
            <CustomIcon
              name="add_24px"
              size={24}
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
            />
          </View>
        </Pressable>
      </View>
    </View>
  )
}
