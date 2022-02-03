import React, {useState, useEffect} from 'react'
import {View, StyleSheet, I18nManager} from 'react-native'
import Modal from 'react-native-modal'

import {
  getCurrentYear,
  getListOfMonths,
  getListOfYears,
  getListOfDays
} from '../../helpers/date'
import palette from '../../theme/palette'
import CustomButton from '../CustomButton'
import Typography from '../Typography'
import CustomPicker from './CustomPicker'

export default function Index({type, open, close, onOkPress}) {
  const [selectedYear, setSelectedYear] = useState(getCurrentYear(type) - 18)
  const [selectedMonth, setSelectedMonth] = useState(1)
  const [selectedDay, setSelectedDay] = useState(1)
  const [daysList, setDaysList] = useState(
    getListOfDays(type, getCurrentYear(type), 1)
  )

  useEffect(() => {
    setDaysList(getListOfDays(type, selectedYear.value, selectedMonth.value))
  }, [selectedMonth, selectedYear, setDaysList, type])

  return (
    <Modal isVisible={open}>
      <View style={styles.container}>
        <View style={styles.datePickerContainer}>
          <View style={styles.pickerContainer}>
            <Typography style={styles.pickerTitle} variant="bold20">
              سال
            </Typography>
            <CustomPicker
              onChange={(newItem) => setSelectedYear(newItem)}
              selected={selectedYear}
              options={getListOfYears(type)}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Typography style={styles.pickerTitle} variant="bold20">
              ماه
            </Typography>
            <CustomPicker
              onChange={(newItem) => setSelectedMonth(newItem)}
              selected={selectedMonth}
              options={getListOfMonths(type)}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Typography style={styles.pickerTitle} variant="bold20">
              روز
            </Typography>
            <CustomPicker
              onChange={(newItem) => setSelectedDay(newItem)}
              selected={selectedDay}
              options={daysList}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.confirmButtonContainer}>
            <CustomButton
              title="تایید"
              size="small"
              onPress={() => {
                var result = selectedYear.value
                result += '-'
                result +=
                  selectedMonth < 10
                    ? `0${selectedMonth.value}`
                    : selectedMonth.value
                result += '-'
                result +=
                  selectedDay < 10 ? `0${selectedDay.value}` : selectedDay.value
                onOkPress(result)
              }}
              style={styles.button}
            />
          </View>
          <View style={styles.cancelButtonContainer}>
            <CustomButton
              title="بستن"
              // type="cancel"
              size="small"
              onPress={close}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 275,
    backgroundColor: palette.M_3_SYS_PRIMARY,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20
  },
  datePickerContainer: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    flex: 1
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  pickerTitle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 24
  },
  confirmButtonContainer: {
    flex: 1,
    paddingRight: 4
  },
  cancelButtonContainer: {
    flex: 1,
    paddingLeft: 4
  }
})
