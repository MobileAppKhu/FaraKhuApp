import React from 'react'
import useStyles from './stylesheet'
import {Image, Pressable, View} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import {useNavigation} from '@react-navigation/native'
import {
  addCommaToPriceUnsigned,
  convertPersianNumbersToEnglishNumbers
} from '../../../../../helpers/numbers'

export default function DataBookShop({
  title,
  type,
  // eslint-disable-next-line no-unused-vars
  bookImage,
  price,
  offerId,
  description,
  userId
}) {
  const navigation = useNavigation()
  const styles = useStyles()
  return (
    <Pressable
      style={styles.root}
      onPress={() =>
        navigation.navigate('each-bookshop', {
          offerId,
          description,
          price,
          type,
          title,
          userId
        })
      }>
      <View style={styles.cardStyle}>
        <View style={styles.cardDesc}>
          <View style={styles.bookTitle}>
            <Typography
              variant="h5"
              color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
              {title}
            </Typography>
          </View>

          <View style={styles.AdType}>
            <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
              {type}
            </Typography>
          </View>

          <View style={styles.priceBook}>
            <Typography
              variant="smallButton"
              color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
              {addCommaToPriceUnsigned(
                convertPersianNumbersToEnglishNumbers(price)
              )}{' '}
              تومان
            </Typography>
          </View>
        </View>

        <View style={styles.bookImageStyle}>
          <Image
            style={styles.bookImage}
            source={require('../../../../../assets/images/sample_avatar.jpg')}
          />
        </View>
      </View>
    </Pressable>
  )
}
