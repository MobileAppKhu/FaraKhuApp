import React from 'react'
import {View} from 'react-native'

import Typography from '../../../../components/Typography'
import makeStyles from '../../../../helpers/makeStyles'

const UserItem = ({name, id}) => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <Typography>{name}</Typography>
      <Typography>{id}</Typography>
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.M_3_READ_ONLY_ON_SURFACE_OPACITY_0_16
  }
}))

export default UserItem
