import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'

import palette from '../theme/palette'
// import CustomIcon from './CustomIcon'
import Typography from './Typography'

export default function SimpleHeader({
  title,
  showHeaderRight,
  headerRightText,
  onHeaderRightClicked,
  // eslint-disable-next-line no-unused-vars
  headerRightIcon
}) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          {/* <CustomIcon
            name="Arrow---Left-2"
            size={32}
            color={palette.balticSea}
          /> */}
          <Typography>ریدم تو بهنیا</Typography>
        </Pressable>
      </View>
      <View style={styles.headerCenter}>
        <Typography variant="h4" style={styles.title}>
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
        {/* {headerRightIcon && (
          <Pressable
            onPress={onHeaderRightClicked}
            style={styles.confirmButton}>
            <CustomIcon name={headerRightIcon} size={30} />
          </Pressable>
        )} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: palette.M_3_SYS_BACKGROUND
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
