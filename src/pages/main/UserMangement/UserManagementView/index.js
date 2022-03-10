import React from 'react'
import {View, TextInput, ScrollView, Pressable} from 'react-native'
import {useSelector} from 'react-redux'

import SimpleHeader from '../../../../components/SimpleHeader'
import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import useStyles from './stylesheet'
import UserItem from './userItem'

const UserManagementView = () => {
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()

  return (
    <View style={styles.screen}>
      <SimpleHeader
        title="مدیریت کاربران"
        titleColor={palette.M_3_SYS_ON_SURFACE}
        backgroundColor={palette.M_3_SYS_SURFACE}
        itemsColor={palette.M_3_SYS_ON_SURFACE}
        shadow={0}
      />

      <View style={styles.container}>
        <View style={styles.searchBox}>
          <CustomIcon
            name="icons8_search_1-1"
            size={24}
            color={palette.M_3_SYS_ON_SURFACE}
            style={styles.searchIcon}
          />
          <TextInput style={styles.textInput}>982023026</TextInput>
        </View>

        <ScrollView style={styles.searchOutput}>
          <UserItem name="بهنیا فرهبد" id="982023026" />
        </ScrollView>

        <Pressable style={styles.addBtnContainer}>
          <View style={styles.addBtn}>
            <View style={styles.addBtnText}>
              <Typography
                variant="h6"
                color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
                کاربر جدید
              </Typography>
            </View>
            <View style={styles.addBtnIcon}>
              <CustomIcon
                name="add_24px"
                size={24}
                color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default UserManagementView
