import React from 'react'
import {View, Pressable} from 'react-native'

import Typography from '../../../../../components/Typography'
import CustomIcon from '../../../../../components/CustomIcon'
import FavoriteItem from './FavoriteItem'
import {useSelector} from 'react-redux'
import makeStyles from '../../../../../helpers/makeStyles'

function Favorites({favoriteItems, setFavoriteItems}) {
  const favoriteItemChangeHandler = (text, option) => {
    const selectedItem = favoriteItems.findIndex((opt) => option.id === opt.id)
    const newOptions = favoriteItems
    newOptions[selectedItem] = {
      ...newOptions[selectedItem],
      value: text
    }
    setFavoriteItems(newOptions)
  }

  const favoriteItemRemoveHandler = (option) => {
    const newOptions = favoriteItems.filter((opt) => option.id !== opt.id)
    setFavoriteItems(newOptions)
  }
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <View style={styles.favoriteItem}>
      <View style={styles.favoriteItemTitle}>
        <Typography variant="h6" color={palette.M_3_SYS_PRIMARY}>
          علاقه‌مندی‌ها:
        </Typography>
      </View>

      {favoriteItems.map((option, index) => (
        <FavoriteItem
          key={option.id}
          value={option.value}
          onChangeText={(text) => favoriteItemChangeHandler(text, option)}
          removeHandler={() => favoriteItemRemoveHandler(option)}
          placeholder={`گزینه${index + 1}`}
        />
      ))}

      <View style={styles.addItemContainer}>
        <Pressable
          android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
          style={styles.addItem}
          onPress={() => {
            setFavoriteItems([...favoriteItems, {id: Date.now(), value: ''}])
          }}>
          <CustomIcon
            name="icon_add"
            size={22}
            color={palette.M_3_SYS_PRIMARY}
          />
          <Typography variant="h6" color={palette.M_3_SYS_PRIMARY}>
            افزودن
          </Typography>
        </Pressable>
      </View>
    </View>
  )
}

const useStyles = makeStyles(() => ({
  favoriteItemTitle: {
    marginBottom: 15
  },
  favoriteItem: {
    marginTop: 20,
    marginBottom: 10
  },
  requiredMark: {
    marginLeft: 5
  },
  addItemContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    width: '100%'
  },
  addItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '22%',
    paddingVertical: 10
  }
}))

export default Favorites
