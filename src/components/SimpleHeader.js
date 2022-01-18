import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'

import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function SimpleHeader({
  title,
  showHeaderRight,
  headerRightText,
  onHeaderRightClicked,
  headerRightIcon,
  isCloseIcon,
  backgroundColor,
  itemsColor,
  titleColor
}) {
  const navigation = useNavigation()
  return (
    <View
      style={[
        styles.container,
        backgroundColor ? {backgroundColor: backgroundColor} : {}
      ]}>
      <View style={styles.headerLeft}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <CustomIcon
            name={isCloseIcon ? 'close_24px' : 'arrow_back_24px'}
            size={32}
            color={itemsColor || palette.M_3_SYS_ON_PRIMARY}
          />
        </Pressable>
      </View>
      <View style={styles.headerCenter}>
        <Typography
          variant="medium18"
          style={[styles.title, titleColor ? {color: titleColor} : {}]}>
          {title}
        </Typography>
      </View>
      <View style={styles.headerRight}>
        {showHeaderRight && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <Typography
              variant="h6"
              color={itemsColor || palette.M_3_SYS_ON_PRIMARY}>
              {headerRightText}
            </Typography>
          </Pressable>
        )}
        {headerRightIcon && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <CustomIcon
              name={headerRightIcon}
              size={30}
              color={itemsColor || palette.M_3_SYS_ON_PRIMARY}
            />
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    backgroundColor: palette.M_3_SYS_PRIMARY,
    elevation: 6
  },
  headerLeft: {
    width: 99,
    height: 64,
    paddingLeft: 24
  },
  headerCenter: {
    flex: 1
  },
  headerRight: {
    width: 99,
    height: 64
  },
  title: {
    color: palette.M_3_SYS_ON_PRIMARY,
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
