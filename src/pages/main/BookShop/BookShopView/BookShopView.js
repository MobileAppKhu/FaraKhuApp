import React from 'react'
import DataBookShop from './DataBookShop/DataBookShop'
import {ScrollView} from 'react-native-gesture-handler'
import {Pressable, View} from 'react-native'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import BookShopHeader from './BookShopHeader/BookShopHeader'
import {useNavigation} from '@react-navigation/native'
export default function BookShopView() {
  // const [searchModal, setSearchModal] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <BookShopHeader />
      <ScrollView>
        <View>
          {data.map((item, index) => (
            <DataBookShop
              key={item.title + item.type + index.toString()}
              title={item.title}
              type={item.type}
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
const data = [
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: '../../../../assets/images/sample_avatar.jpg',
    price: '400هزارتومن'
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: '../../../../assets/images/sample_avatar.jpg',
    price: '400هزارتومن'
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: '../../../../assets/images/sample_avatar.jpg',
    price: '400هزارتومن'
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: '../../../../assets/images/sample_avatar.jpg',
    price: '400هزارتومن'
  },
  {
    title: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
    type: 'فروش',
    lessonImage: '../../../../assets/images/sample_avatar.jpg',
    price: '400هزارتومن'
  }
]
