import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, StyleSheet, Pressable, I18nManager} from 'react-native'

import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function SimpleHeader({
  title,
  showHeaderRight,
  headerRightText,
  onHeaderRightClicked,
  headerRightIcon
}) {
  const navigation = useNavigation()
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <CustomIcon
            name="Arrow---Left-2"
            size={32}
            color={palette.balticSea}
          />
        </Pressable>
      </View>
      <View style={styles.headerCenter}>
        <Typography variant="h4" style={styles.title}>
          {t(title)}
        </Typography>
      </View>
      <View style={styles.headerRight}>
        {showHeaderRight && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <Typography variant="h5" style={styles.headerRightTypography}>
              {t(headerRightText)}
            </Typography>
          </Pressable>
        )}
        {headerRightIcon && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <CustomIcon name={headerRightIcon} size={30} />
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: palette.secondary.background
  },
  headerLeft: {
    width: 99,
    height: 54,
    paddingLeft: 24
  },
  headerCenter: {
    flex: 1
  },
  headerRight: {
    width: 99,
    height: 54,
    paddingRight: 24
  },
  title: {
    color: palette.nero,
    textAlign: 'center'
  },
  goBackButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
    // alignItems: 'center'
  },
  confirmButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRightTypography: {
    color: palette.balticSea
  }
})
