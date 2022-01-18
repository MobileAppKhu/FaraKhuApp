import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'

import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomPicker from '../../../../components/CustomPicker'

const weekDays = [
  'شنبه',
  'یکشنبه',
  'دوشنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه'
]

function DayPicker({
  selectedDay,
  onSelectDay,
  onStartTimeChange,
  onEndTimeChange,
  style
}) {
  const {day, startTime, endTime} = selectedDay
  return (
    <View style={[styles.container, style]}>
      <View style={styles.dayInput}>
        <CustomPicker
          items={weekDays}
          selectedItem={day}
          labelColor={palette.M_3_SYS_PRIMARY}
          onSelectItem={onSelectDay}
        />
      </View>

      <View style={styles.timeInputContainer}>
        <Typography>از</Typography>
        <View style={[styles.timeInput, {marginLeft: 15, marginRight: 15}]}>
          <TextInput
            defaultValue={startTime.hour}
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => onStartTimeChange(text, 'hour')}
            style={{padding: 0}}
          />
          <Typography style={{padding: 0, margin: 0}}>:</Typography>
          <TextInput
            defaultValue={startTime.minute}
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => onStartTimeChange(text, 'minute')}
            style={{padding: 0}}
          />
        </View>

        <Typography>تا</Typography>
        <View style={[styles.timeInput, {marginRight: 15}]}>
          <TextInput
            defaultValue={endTime.hour}
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => onEndTimeChange(text, 'hour')}
            style={{padding: 0}}
          />
          <Typography style={{padding: 0, margin: 0}}>{`:`}</Typography>
          <TextInput
            defaultValue={endTime.minute}
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(text) => onEndTimeChange(text, 'minute')}
            style={{padding: 0}}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%'
  },
  dayInput: {
    flex: 6
  },
  timeInputContainer: {
    flex: 8,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
  },
  timeInput: {
    width: 60,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 7
  }
})

export default DayPicker
