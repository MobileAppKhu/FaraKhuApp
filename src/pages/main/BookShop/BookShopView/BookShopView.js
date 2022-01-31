import React from 'react'
import {Pressable, View, FlatList} from 'react-native'

import DataBookShop from './DataBookShop/DataBookShop'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import BookShopHeader from './BookShopHeader/BookShopHeader'

export default function BookShopView() {
  return (
    <View style={styles.screen}>
      <BookShopHeader />
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={({item, index}) => (
          <DataBookShop
            key={item.title + item.type + index.toString()}
            title={item.title}
            type={item.type}
            lessonImage={item.lessonImage}
            price={item.price}
          />
        )}
      />

      <Pressable style={styles.addBtnContainer}>
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
const data = [
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: null,
    price: 400
  }
]
