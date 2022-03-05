import React, {useState} from 'react'
import {View} from 'react-native'
import {ScrollView, TextInput} from 'react-native-gesture-handler'
import CustomPicker from '../../../components/CustomPicker'
import CustomInput from '../../../components/CustomInput'
import styles from './stylesheet'
import CourseEventHeader from './CreateCourseEventHeader/CourseEventHeader'
import palette from '../../../theme/palette'
import Typography from '../../../components/Typography'
import CustomButton from '../../../components/CustomButton'
export default function CreateCourseEvent() {
  const [finalExamDate, setFinalExamDate] = useState({
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: ''
  })
  const [description, setdescription] = useState('')
  return (
    <View style={styles.root}>
      <CourseEventHeader />
      <ScrollView>
        <View style={styles.eventTypeContainer}>
          <CustomPicker
            label="نوع اطلاعیه"
            required
            items={['امتحان', 'تکلیف', 'ارائه', 'سایر']}
            labelStyle={styles.pickerLabelStyle}
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.eventTypeContainer}>
          <CustomInput
            label="عنوان"
            required
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            placeholder="ورودی"
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.dateContainer}>
          <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
            تاریخ رویداد:
          </Typography>
          <View style={styles.dateInput}>
            <TextInput
              maxLength={2}
              placeholder="روز"
              keyboardType="numeric"
              textAlign="center"
              value={finalExamDate.day}
              onChangeText={(day) => setFinalExamDate({...finalExamDate, day})}
              style={styles.dateTextInput}
            />
            <Typography>{`/`}</Typography>
            <TextInput
              maxLength={2}
              placeholder="ماه"
              keyboardType="numeric"
              textAlign="center"
              value={finalExamDate.month}
              onChangeText={(month) =>
                setFinalExamDate({...finalExamDate, month})
              }
              style={styles.dateTextInput}
            />
            <Typography>{`/`}</Typography>
            <TextInput
              maxLength={4}
              placeholder="سال"
              keyboardType="numeric"
              textAlign="center"
              value={finalExamDate.year}
              onChangeText={(year) =>
                setFinalExamDate({...finalExamDate, year})
              }
              style={styles.dateTextInput}
            />
          </View>

          <View style={styles.hourContainer}>
            <Typography variant="body2" color={palette.M_3_SYS_PRIMARY}>
              ساعت:
            </Typography>
          </View>

          <View style={styles.hourInput}>
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              textAlign="center"
              value={finalExamDate.hour}
              onChangeText={(hour) =>
                setFinalExamDate({...finalExamDate, hour})
              }
              style={styles.dateTextInput}
            />
            <Typography>{`:`}</Typography>
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              textAlign="center"
              value={finalExamDate.minute}
              onChangeText={(minute) =>
                setFinalExamDate({...finalExamDate, minute})
              }
              style={styles.dateTextInput}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.descriptionInputContainer}>
          <CustomInput
            label="توضیحات:"
            placeholder="«توضیحات اطلاعیه"
            multiline
            textAlignVertical="top"
            labelColor={palette.M_3_SYS_PRIMARY}
            labelStyle={styles.labelStyle}
            style={styles.descriptionInput}
            value={description}
            onChangeText={(text) => setdescription(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="ایجاد رویداد"
            size="small"
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
            startIcon="add_24px"
            startIconSize={19}
          />
        </View>
      </ScrollView>
    </View>
  )
}
