import React from 'react'
import {View, StyleSheet} from 'react-native'
import CustomIcon from '../../../../components/CustomIcon'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'

function InternetManagement() {
  return (
    <View style={styles.container}>
      <Typography variant="bold12" color={palette.M_3_SOURCE_NEUTRAL}>
        پنل مدیریت اینترنت
      </Typography>
      <CustomIcon
        name="icons8_clock_settings-1"
        size={36}
        style={{marginVertical: 2}}
      />
      <Typography variant="black11" color={palette.M_3_SOURCE_NEUTRAL}>
        به زودی...
      </Typography>
      <View style={styles.progressContainer}>
        <Typography variant="regular9">65%</Typography>
        <View style={styles.progressValue}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dde7f3',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_TERTIARY,
    padding: 11,
    alignItems: 'center',
    marginHorizontal: 16
  },
  progressContainer: {
    paddingHorizontal: 3,
    height: 20,
    width: 156,
    borderWidth: 1,
    borderColor: palette.M_3_REF_NEUTRAL_NEUTRAL_60,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7
  },
  progressValue: {
    padding: 3,
    height: 13,
    width: '65%',
    borderRadius: 50,
    backgroundColor: palette.M_3_REF_NEUTRAL_NEUTRAL_60
  }
})

export default InternetManagement
