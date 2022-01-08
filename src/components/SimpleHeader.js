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
  isCloseIcon
}) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <CustomIcon
            name={isCloseIcon ? 'close_24px' : 'arrow_back_24px'}
            size={32}
            color={palette.M_3_SYS_ON_SURFACE_VARIANT}
          />
        </Pressable>
      </View>
      <View style={styles.headerCenter}>
        <Typography variant="medium18" style={styles.title}>
          {title}
        </Typography>
      </View>
      <View style={styles.headerRight}>
        {showHeaderRight && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <Typography variant="h5" style={styles.headerRightTypography}>
              {headerRightText}
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    backgroundColor: palette.M_3_SYS_PRIMARY
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
    height: 64,
    paddingRight: 24
  },
  title: {
    color: palette.M_3_SYS_ON_SURFACE,
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
