import React, {useEffect, useState} from 'react'
import DataBookShop from './DataBookShop/DataBookShop'
import {ScrollView} from 'react-native-gesture-handler'
import {Pressable, RefreshControl, View} from 'react-native'
import useStyles from './stylesheet'
import Typography from '../../../../components/Typography'
import CustomIcon from '../../../../components/CustomIcon'
import BookShopHeader from './BookShopHeader/BookShopHeader'
import {useNavigation} from '@react-navigation/native'
import {request} from '../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'
import {bookShopType} from '../BookShopCreate/BookShopCreate'
import {useSelector} from "react-redux";

export default function BookShopView() {
  // const [searchModal, setSearchModal] = useState(false)
  const toast = useToast()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const [refreshing, setRefreshing] = useState(false)
  const [offer, setoffer] = useState([])
  const getOffers = () => {
    setRefreshing(true)
    request('/Offer/SearchOffers', 'POST', {
      start: 0,
      step: 10,
      offerColumn: 6,
      orderDirection: false
    }).then((data) => {
      setRefreshing(false)
      if (data.status === 200) {
        setoffer(data.response.offer)
      } else {
        toast.show('خطایی رخ داد', {
          type: 'warning'
        })
      }
    })
  }
  const navigation = useNavigation()
  useEffect(() => {
    getOffers()
    navigation.addListener('focus', getOffers)
  }, [])
  const styles = useStyles()
  return (
    <View style={styles.screen}>
      <BookShopHeader />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => getOffers()}
          />
        }>
        <View>
          {offer.map((item) => (
            <DataBookShop
              key={item.offerId}
              title={item.title}
              type={bookShopType[item.offerType]}
              offerId={item.offerId}
              description={item.description}
              userId={item.userId}
              // bookImage={require(item.lessonImage)}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>
      <Pressable
        style={styles.addBtnContainer}
        onPress={() => navigation.navigate('book-shop-create')}>
        <View style={styles.addBtn}>
          <View style={styles.addBtnText}>
            <Typography
              variant="h6"
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
              اگهی جدید
            </Typography>
          </View>
          <View style={styles.addBtnIcon}>
            <CustomIcon
              name="mode_edit_24px"
              size={24}
              color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
            />
          </View>
        </View>
      </Pressable>
    </View>
  )
}
