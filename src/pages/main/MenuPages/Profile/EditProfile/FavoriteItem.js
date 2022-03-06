import React from 'react'
import {View,TextInput, Pressable} from 'react-native'

import CustomIcon from '../../../../../components/CustomIcon'
import theme from '../../../../../theme'
import makeStyles from "../../../../../helpers/makeStyles";

const FavoriteItem = ({
  placeholder = 'مورد1',
  onChangeText,
  removeHandler,
  value
}) => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Pressable
          style={styles.removeIcon}
          onPress={removeHandler}
          android_ripple={{color: '#ddd', borderless: true, radius: 20}}>
          <CustomIcon name="close_24px" size={20} />
        </Pressable>
        <TextInput
          placeholder={placeholder}
          defaultValue={value}
          textAlign="right"
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>

      <View style={styles.icon}>
        <CustomIcon name="menu-2" size={24} />
      </View>
    </View>
  )
}
const useStyles = makeStyles((palette) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16,
    flex: 9
  },
  removeIcon: {
    marginStart: 10
  },
  input: {
    flex: 0.97,
    fontFamily: theme.Shabnam,
    fontSize: 14,
    color: palette.M_3_SYS_ON_SURFACE
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end'
  }
}))

export default FavoriteItem
