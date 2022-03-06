import React from 'react'
import {useTranslation} from 'react-i18next'
import {View,Pressable} from 'react-native'
import CustomIcon from './CustomIcon'
import Typography from './Typography'
import {useSelector} from "react-redux";
import makeStyles from "../helpers/makeStyles";

export default function CustomTab({
  tabs,
  tabContents,
  activeTab,
  onChangeActiveTab,
  tabsStyles,
  rootStyle,
  withIcons = false,
  withoutContent = false
}) {
  const {t} = useTranslation()
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
  return (
    <View>
      <View style={[styles.tabView, rootStyle ? rootStyle : {}]}>
        {tabs.map((tab, index) => (
          <Pressable
            key={index}
            onPress={() => onChangeActiveTab(index)}
            style={[
              styles.tab,
              index === activeTab ? styles.activeTab : null,
              tabsStyles ? tabsStyles : {}
            ]}>
            {withIcons ? (
              <CustomIcon
                name={tab}
                size={32}
                color={
                  index === activeTab
                    ? palette.primary.main
                    : palette.tabs.inactiveTabText
                }
              />
            ) : (
              <Typography
                variant={index === activeTab ? 'h5' : 'body1'}
                style={
                  index === activeTab
                    ? styles.activeTabText
                    : styles.inactiveTabText
                }>
                {t(`${tab}`)}
              </Typography>
            )}
          </Pressable>
        ))}
      </View>
      {!withoutContent && (
        <View style={styles.tabContent}>{tabContents[activeTab]}</View>
      )}
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  tabView: {
    backgroundColor: palette.tabs.Background,
    borderRadius: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    padding: 4
  },
  tabContent: {
    flexDirection: 'column',
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 10
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 7
  },
  activeTab: {
    backgroundColor: palette.tabs.activeTabBackground
  },
  activeTabText: {
    color: palette.primary.main
  },
  inactiveTabText: {
    color: palette.tabs.inactiveTabText
  }
}))
