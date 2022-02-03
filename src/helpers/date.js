import jalaali from 'jalaali-js'
import moment from 'moment'
import momentJalaali from 'moment-jalaali'

const gregorianMonthsList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const jalaaliMonthsList = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]

export const getCurrentYear = (type = 'fa') => {
  return type === 'fa'
    ? momentJalaali().format('jYYYY')
    : moment().format('YYYY')
}

export const getListOfYears = (type = 'en') => {
  const year = parseInt(getCurrentYear(type), 10) + 5
  const numberOfYears = 120
  return Array.from({length: numberOfYears}, (v, i) => ({
    label: (year - numberOfYears + i + 1).toString(),
    value: year - numberOfYears + i + 1
  })).reverse()
}

export const getListOfMonths = (type = 'en') => {
  const monthsList = type === 'fa' ? jalaaliMonthsList : gregorianMonthsList
  return monthsList.map((item, i) => ({label: item, value: i + 1}))
}

export const getListOfDays = (
  type = 'en',
  year = getCurrentYear('en'),
  month = 1
) => {
  const monthLength =
    type === 'fa'
      ? jalaali.jalaaliMonthLength(parseInt(year, 10), parseInt(month, 10))
      : moment(`${year}-${month}`, 'YYYY-M').daysInMonth()

  return Array.from({length: monthLength}, (v, i) => ({
    label: (i + 1).toString(),
    value: i + 1
  }))
}

export const formatNumberToMinutesAndSecond = (time) => {
  var minutes = Math.floor(time / 60)
  var seconds = time - minutes * 60
  var result = ''
  result += minutes < 10 ? `0${minutes}` : minutes
  result += ':'
  result += seconds < 10 ? `0${seconds}` : seconds
  return result
}

export const gregorianToJalaali = (year, month, day) => {
  const {jy, jm, jd} = jalaali.toJalaali(year, month, day)
  return {jYear: jy, jMonth: jm, jDay: jd}
}

export const jalaaliToGregorian = (year, month, day) => {
  const {gy, gm, gd} = jalaali.toGregorian(year, month, day)
  return {gYear: gy, gMonth: gm, gDay: gd}
}
