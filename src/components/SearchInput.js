import React from 'react'
import {useTranslation} from 'react-i18next'
import {TextInput, View} from 'react-native'

import theme from '../theme'
import CustomIcon from './CustomIcon'
import makeStyles from "../helpers/makeStyles";
import {useSelector} from "react-redux";

export default function SearchInput({
  onChangeText,
  value,
  style,
  placeholder,
  ...others
}) {
  const {t} = useTranslation()
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)
  return (
    <View style={styles.searchView}>
      <CustomIcon name="Search" size={22} color={palette.balticSea} />
      <TextInput
        style={{...styles.input, ...style}}
        onChangeText={onChangeText}
        value={value}
        placeholder={t(placeholder)}
        {...others}
      />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: palette.authInput.border,
    backgroundColor: palette.searchInput.background,
    borderWidth: 0.5,
    borderRadius: 8,
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  input: {
    fontFamily: theme.VazirMedium,
    color: palette.searchInput.text,
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 13,
    paddingBottom: 13
  }
}))
