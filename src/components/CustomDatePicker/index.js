/* eslint-disable no-unused-vars */
import moment from 'moment'
import momentJalaali from 'moment-jalaali'
import React, {useEffect, useRef, useState} from 'react'
import {Pressable, View} from 'react-native'

import palette from '../../theme/palette'
import CustomIcon from '../CustomIcon'
import Typography from '../Typography'
import MonthView from './MonthView'
import {styles} from './styles/index.styles'

const builsNewJalaaliMonth = (month) => {
  const tempMonth = momentJalaali(month.clone())
  const monthLength = momentJalaali.jDaysInMonth(
    tempMonth.jYear(),
    tempMonth.jMonth()
  )
  const monthName = tempMonth.format('jMMMM')
  let numberOfEmptyDays = tempMonth.day()
  numberOfEmptyDays = numberOfEmptyDays === 6 ? 0 : numberOfEmptyDays + 1
  const newMonth = {
    firstDayDate: tempMonth,
    firstDay: tempMonth.format('jYYYY-jMM-jDD'),
    name: monthName,
    data: new Array(numberOfEmptyDays).fill(null)
  }
  for (let i = 1; i <= monthLength; i += 1) {
    newMonth.data.push(i)
  }
  return newMonth
}

const buildNewGregorianMonth = (month) => {
  const tempMonth = month.clone()
  const monthLength = tempMonth.daysInMonth()
  const monthName = tempMonth.format('MMMM')
  const numberOfEmptyDays = tempMonth.day()
  const newMonth = {
    firstDayDate: tempMonth,
    firstDay: tempMonth.format('YYYY-MM-DD'),
    name: monthName,
    data: new Array(numberOfEmptyDays).fill(null)
  }
  for (let i = 1; i <= monthLength; i += 1) {
    newMonth.data.push(i)
  }
  const emptyDaysAtTheEnd = 7 - (newMonth.data.length % 7)
  console.log('emptyDaysAtTheEnd', emptyDaysAtTheEnd)
  if (emptyDaysAtTheEnd !== 7) {
    newMonth.data = [
      ...newMonth.data,
      ...new Array(emptyDaysAtTheEnd).fill(null)
    ]
  }
  return newMonth
}

const buildNewMonth = (month, type) =>
  type === 'jalaali'
    ? builsNewJalaaliMonth(month)
    : buildNewGregorianMonth(month)

export default function CustomDatePicker() {
  const [currentMonth, setcurrentMonth] = useState(0)
  const [type, settype] = useState('gregorian')
  const [renderedMonths, setrenderedMonths] = useState([])
  const carousel = useRef(null)

  const renderGregorianMonths = () => {
    const calendarStartDate = moment().clone()
    const newRenderedMonths = []
    const thisMonth = calendarStartDate.startOf('month')
    const defaultNumberOfMonths = 12
    for (let j = 0; j < defaultNumberOfMonths; j += 1) {
      const newMonth = buildNewMonth(thisMonth, type)
      newRenderedMonths.push(newMonth)
      if (j !== defaultNumberOfMonths - 1) {
        thisMonth.add(1, 'months')
      }
    }
    setrenderedMonths(newRenderedMonths)
  }

  const renderJalaaliMonths = () => {
    const calendarStartDate = momentJalaali().clone()
    const newRenderedMonths = []

    const thisMonth =
      window.innerWidth < 600
        ? calendarStartDate.startOf('jMonth')
        : calendarStartDate.subtract(1, 'jMonth').startOf('jMonth')
    const defaultNumberOfMonths = window.innerWidth < 600 ? 12 : 4
    for (let j = 0; j < defaultNumberOfMonths; j += 1) {
      const newMonth = buildNewMonth(thisMonth, type)
      newRenderedMonths.push(newMonth)
      if (j !== defaultNumberOfMonths - 1) {
        thisMonth.add(1, 'jMonth')
      }
    }
    setrenderedMonths(newRenderedMonths)
  }

  const renderMonths =
    type === 'jalaali' ? renderJalaaliMonths : renderGregorianMonths

  useEffect(() => {
    renderMonths()
  }, [])

  console.log({renderedMonths: renderedMonths[0]})

  return (
    <View style={styles.root}>
      <Typography variant="h4">Choose Date</Typography>
      <View style={styles.divider} />
      <View style={styles.monthHeader}>
        <CustomIcon
          name="Arrow---Left-2"
          size={30}
          color={currentMonth ? palette.tuna : palette.cyanBlue}
          onPress={() => currentMonth && setcurrentMonth(currentMonth - 1)}
        />
        {renderedMonths.length > 0 && (
          <Typography>{renderedMonths[currentMonth].name}</Typography>
        )}
        <CustomIcon
          name="Arrow---Right-2"
          size={30}
          color={currentMonth !== 11 ? palette.tuna : palette.cyanBlue}
          onPress={() =>
            currentMonth !== 11 && setcurrentMonth(currentMonth + 1)
          }
        />
      </View>
      <MonthView monthDetails={renderedMonths[currentMonth]} />
      {/* <Carousel
        layout="default"
        ref={carousel}
        data={renderedMonths.map((item) => item)}
        renderItem={({item, index}) => <MonthView monthDetails={item} />}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => setcurrentMonth(index)}
      /> */}
      <Pressable
        style={styles.confirmButton}
        // onPress={() => navigation.goBack()}
      >
        <Typography style={styles.confirmButtonText} variant="h5">
          Confirm
        </Typography>
      </Pressable>
    </View>
  )
}
