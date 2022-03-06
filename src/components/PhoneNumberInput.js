import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {StyleSheet, TextInput, View, Pressable, I18nManager} from 'react-native'
import Flag from 'react-native-flags'

import theme from '../theme'
import CountryModal from './CountryModal'
import CustomIcon from './CustomIcon'
import Typography from './Typography'
import makeStyles from "../helpers/makeStyles";

export default function PhoneNumberInput({
  onChangeText,
  value,
  style,
  placeholder,
  countryCode,
  onChangeCountryCode,
  mobile,
  onChangeMobile,
  ...others
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const {t} = useTranslation()
  const styles = useStyles()
  return (
    <>
      <View style={styles.phoneNumberView}>
        <TextInput
          style={{...styles.input, ...style}}
          onChangeText={onChangeMobile}
          value={mobile}
          placeholder={t(placeholder)}
          {...others}
          keyboardType="numeric"
        />
        <Pressable onPress={() => setModalOpen(true)} style={styles.codeView}>
          <CustomIcon
            name="Arrow---Down-2"
            size={16}
            color={palette.balticSea}
          />
          <Typography style={styles.itemCode} variant="body1">
            {`+${countryCode.code}`}
          </Typography>
          <Flag code={countryCode.key} size={24} />
        </Pressable>
      </View>
      <CountryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectCountry={(item) => {
          onChangeCountryCode(item)
        }}
      />
    </>
  )
}

const useStyles = makeStyles((palette) => ({
  phoneNumberView: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    alignItems: 'center',
    borderColor: palette.authInput.border,
    backgroundColor: palette.authInput.background,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingRight: 15,
    paddingLeft: 15
  },
  input: {
    fontFamily: theme.VazirMedium,
    color: palette.searchInput.text,
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 13,
    paddingBottom: 13
  },
  codeView: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    alignItems: 'center',
    paddingLeft: 10,
    borderLeftColor: palette.tuna,
    borderLeftWidth: I18nManager.isRTL ? 1 : 0,
    borderRightColor: palette.tuna,
    borderRightWidth: I18nManager.isRTL ? 0 : 1
  },
  itemCode: {
    color: palette.raven,
    marginRight: I18nManager.isRTL ? 10 : 2,
    marginLeft: I18nManager.isRTL ? 2 : 10
  }
}))
