import React, {useState} from 'react'
import {View, Pressable, TextInput} from 'react-native'
import {useSelector} from 'react-redux'
import CustomIcon from '../../../../../components/CustomIcon'

import CustomInput from '../../../../../components/CustomInput'
import ErrorMessage from '../../../../../components/ErrroMessage'
import Typography from '../../../../../components/Typography'
import makeStyles from '../../../../../helpers/makeStyles'
import DayPicker from '../DayPicker'

const dayTemplate = {
  id: Date.now(),
  day: '',
  startTime: {
    hour: '08',
    minute: '00'
  },
  endTime: {
    hour: '10',
    minute: '00'
  }
}

export default function GeneralInfo({
  values,
  errors,
  touched,
  primaryColor,
  handleChange,
  setFieldTouched,
  setFieldValue
}) {
  const styles = useStyles()
  const {theme: palette} = useSelector((state) => state.authReducer)

  const [day, setDay] = useState(dayTemplate)

  const handleDayChange = (value, day) => {
    let selectedDay = values.days.findIndex((d) => d.id === day.id)
    let newDays = [...values.days]
    newDays[selectedDay] = {...newDays[selectedDay], day: value}
    setFieldValue('days', newDays)
  }

  const handleTimeChange = (value, field, day, timeType) => {
    // timeType = startTime or endTime  | field = hour or minute
    let selectedDay = values.days.findIndex((d) => d.id === day.id)
    let newDays = [...values.days]
    newDays[selectedDay] = {
      ...newDays[selectedDay],
      [timeType]: {
        ...newDays[selectedDay][timeType],
        [field]: value
      }
    }
    setFieldValue('days', newDays)
  }

  return (
    <View style={styles.container}>
      <View style={styles.daysAndExamDate}>
        <Typography
          variant="body1"
          color={primaryColor}
          style={{marginBottom: 5}}>
          روز های برگزاری:
        </Typography>

        <View>
          {values.days.map((day, index) => (
            <DayPicker
              selectedDay={day}
              onSelectDay={(value) => {
                handleDayChange(value, day)
              }}
              onStartTimeChange={(value, field) => {
                handleTimeChange(value, field, day, 'startTime')
              }}
              onEndTimeChange={(value, field) => {
                handleTimeChange(value, field, day, 'endTime')
              }}
              key={index}
              style={{marginVertical: 5}}
            />
          ))}
          <DayPicker
            selectedDay={day}
            onSelectDay={(value) => setDay({...day, day: value})}
            onStartTimeChange={(value, field) => {
              setDay({
                ...day,
                startTime: {...day.startTime, [field]: value}
              })
            }}
            onEndTimeChange={(value, field) => {
              setDay({
                ...day,
                endTime: {...day.endTime, [field]: value}
              })
            }}
            style={{marginVertical: 5}}
          />
          <ErrorMessage error={errors.days} visible={touched.days} />
        </View>

        <View style={styles.addDayContainer}>
          <Pressable
            android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
            style={styles.addDay}
            onPress={() => {
              setFieldValue('days', [...values.days, day])
              setDay({...dayTemplate, id: Date.now()})
            }}>
            <Typography variant="h6" color={primaryColor}>
              اضافه کردن روز جدید
            </Typography>
            <CustomIcon name="icon_add" size={18} color={primaryColor} />
          </Pressable>
        </View>

        <View style={styles.finalExamDate}>
          <Typography variant="body1" color={primaryColor}>
            تاریخ امتحان پایان ترم:
          </Typography>
          <View style={styles.dateInput}>
            <TextInput
              maxLength={2}
              placeholder="روز"
              keyboardType="numeric"
              textAlign="center"
              value={values.finalExamDay}
              onChangeText={handleChange('finalExamDay')}
              onBlur={() => setFieldTouched('finalExamDay')}
              style={styles.dateTextInput}
            />
            <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
            <TextInput
              maxLength={2}
              placeholder="ماه"
              keyboardType="numeric"
              textAlign="center"
              value={values.finalExamMonth}
              onChangeText={handleChange('finalExamMonth')}
              onBlur={() => setFieldTouched('finalExamMonth')}
              style={styles.dateTextInput}
            />
            <Typography style={{padding: 0, margin: 0}}>{`/`}</Typography>
            <TextInput
              maxLength={4}
              placeholder="سال"
              keyboardType="numeric"
              textAlign="center"
              value={values.finalExamYear}
              onChangeText={handleChange('finalExamYear')}
              onBlur={() => setFieldTouched('finalExamYear')}
              style={styles.dateTextInput}
            />
          </View>
        </View>
        <ErrorMessage
          error={errors.finalExamDay}
          visible={touched.finalExamDay}
        />
        <ErrorMessage
          error={errors.finalExamMonth}
          visible={touched.finalExamMonth}
        />
        <ErrorMessage
          error={errors.finalExamYear}
          visible={touched.finalExamYear}
        />
      </View>

      <View style={styles.classPlace}>
        <CustomInput
          placeholder="مکان برگزاری کلاس"
          value={values.classPlace}
          onChangeText={handleChange('classPlace')}
          onBlur={() => setFieldTouched('classPlace')}
          style={styles.textInput}
        />
        <ErrorMessage error={errors.classPlace} visible={touched.classPlace} />
      </View>
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  addDayContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    width: '100%'
  },
  addDay: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    paddingVertical: 10
  },
  finalExamDate: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 15
  },
  dateInput: {
    width: 147,
    height: 32,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 7
  },
  dateTextInput: {
    padding: 0,
    paddingHorizontal: 5
  },
  classPlace: {
    marginTop: 16
  },
  textInput: {
    textAlign: 'right',
    fontSize: 16,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  }
}))
