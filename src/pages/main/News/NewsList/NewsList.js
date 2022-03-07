import {Pressable, View, RefreshControl} from 'react-native'
import React, {useEffect, useState} from 'react'
import NewsListHeader from './NewsListHeader/NewsListHeader'
import useStyles from './stylesheet'
import {ScrollView} from 'react-native-gesture-handler'
import NewsListItem from './NewsListItem/NewsListItem'
import Typography from '../../../../components/Typography'
import CustomIcon from '../../../../components/CustomIcon'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
export default function NewsList() {
  const getNews = () => {
    setisLoading(true)
    request('/News/SearchNews', 'POST', {
      // search: 'تست',
      start: 0,
      step: 10,
      newsColumn: 1,
      orderDirection: true
    }).then((response) => {
      if (response.status === 200) {
        setnews(response.response.news)
        setisLoading(false)
      }
    })
  }
  const {theme: palette} = useSelector((state) => state.authReducer)
  const navigation = useNavigation()
  const [news, setnews] = useState([])
  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    getNews()
    navigation.addListener('focus', getNews)
  }, [])
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <NewsListHeader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => getNews()} />
        }>
        <View style={styles.itemsContainer}>
          {news.length || isLoading > 0 ? (
            news.map((item, index) => (
              <NewsListItem
                title={item.title}
                key={index.toString()}
                fileId={item.fileId}
                description={item.description}
                createdDate={item.createdDate}
              />
            ))
          ) : (
            <View style={styles.noNews}>
              <Typography>خبری برای نمایش وجود ندارد</Typography>
            </View>
          )}
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
