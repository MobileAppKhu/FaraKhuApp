import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, StyleSheet, Pressable, I18nManager} from 'react-native'

import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function IntroHeader({title}) {
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
      <View style={styles.headerRight} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    paddingTop: 25,
    // paddingBottom: 25,
    backgroundColor: palette.secondary.background
  },
  headerLeft: {
    width: 54,
    height: 54
  },
  headerCenter: {
    flex: 1
  },
  headerRight: {
    width: 54,
    height: 54
  },
  title: {
    color: palette.nero,
    textAlign: 'center'
  },
  goBackButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
