import React, {useState} from 'react'
import {TextInput, View, ScrollView} from 'react-native'

import styles from './stylesheet'
import SimpleHeader from '../../../../components/SimpleHeader'
import palette from '../../../../theme/palette'
import CustomInput from '../../../../components/CustomInput'
import Typography from '../../../../components/Typography'
import CustomPicker from '../../../../components/CustomPicker'
import CustomButton from '../../../../components/CustomButton'
import moment from 'moment-jalaali'

export default function EditToDo({route}) {
  const {eventName, eventDescription, eventTime, courseTitle} = route.params
  const date = moment(eventTime)
  const [finalExamDate, setFinalExamDate] = useState({
    day: '',
    month: '',
    year: ''
  })
  console.log(date.month.toString())
  const [listTodo, setlistTodo] = useState(courseTitle)
  const [description, setDiscription] = useState(eventDescription)
  const [todoID, setToDoID] = useState(eventName)

  return (
    <View style={styles.screen}>
      <SimpleHeader
        title="ویرایش رویداد"
        backgroundColor={palette.M_3_SYS_PRIMARY}
        titleColor={palette.M_3_SYS_ON_PRIMARY}
        itemsColor={palette.M_3_SYS_ON_PRIMARY}
      />

      <ScrollView style={styles.container}>
        <View style={styles.textInputContainer}>
          <CustomInput
            label="عنوان رویداد:"
            placeholder="عنوان رویداد"
            maxLength={9}
            labelColor={palette.M_3_SYS_PRIMARY}
            labelStyle={styles.labelStyle}
            style={styles.textInput}
            value={todoID}
            onChangeText={(id) => setToDoID(id)}
          />
        </View>

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
              onChangeText={(year) =>
                setFinalExamDate({...finalExamDate, year})
              }
              style={styles.dateTextInput}
            />
            <Typography>{`:`}</Typography>
            <TextInput
              maxLength={2}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={(year) =>
                setFinalExamDate({...finalExamDate, year})
              }
              style={styles.dateTextInput}
            />
          </View>
        </View>

        <View style={styles.containerpicker}>
          <CustomPicker
            label="دسته بندی:"
            items={['شخصی', 'مبانی برق']}
            labelColor={palette.M_3_SYS_PRIMARY}
            selectedItem={listTodo}
            onSelectItem={(lst) => setlistTodo(lst)}
          />
        </View>
        <View style={styles.descInputContainer}>
          <CustomInput
            label="توضیحات:"
            placeholder="«توضیحات رویداد»"
            multiline
            textAlignVertical="top"
            labelColor={palette.M_3_SYS_PRIMARY}
            labelStyle={styles.labelStyle}
            style={styles.descInput}
            value={description}
            onChangeText={(des) => setDiscription(des)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="ثبت تغییرات" size="small" />
        </View>
      </ScrollView>
    </View>
  )
}
