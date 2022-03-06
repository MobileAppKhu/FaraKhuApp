import React, {useState} from 'react'
import {TextInput, View, ScrollView} from 'react-native'

import useStyles from './stylesheet'
import SimpleHeader from '../../../../components/SimpleHeader'
import CustomInput from '../../../../components/CustomInput'
import Typography from '../../../../components/Typography'
import CustomPicker from '../../../../components/CustomPicker'
import CustomButton from '../../../../components/CustomButton'
import moment from 'moment-jalaali'
import {request} from '../../../../helpers/request'
import {useToast} from 'react-native-toast-notifications'
import {useNavigation} from '@react-navigation/native'
import {useSelector} from "react-redux";

export default function EditToDo({route}) {
  const {
    eventName,
    eventDescription,
    eventTime,
    courseTitle,
    courseId,
    isDone,
    eventId
  } = route.params
  const date = moment(moment(eventTime).format('jYYYY-jMM-jDD HH-MM'))
  const {theme: palette} = useSelector((state) => state.authReducer)
  const [finalExamDate, setFinalExamDate] = useState({
    day: date.day().toString(),
    month: date.month().toString(),
    year: date.year().toString(),
    hour: date.hour().toString(),
    minute: date.minute().toString()
  })
  const [listTodo, setlistTodo] = useState(
    courseTitle === '' ? 'شخصی' : courseTitle
  )
  const navigation = useNavigation()
  const [description, setDiscription] = useState(eventDescription)
  const [todoID, setToDoID] = useState(eventName)
  const toast = useToast()
  const editToDoFunction = async () => {
    const date = moment(
      moment(
        `${finalExamDate.year}-${finalExamDate.month}-${finalExamDate.day} ${finalExamDate.hour}:${finalExamDate.minute}`
      )
        .locale('fa')
        .format('YYYY-MM-DDTHH:MM:SS'),
      'jYYYY-jMM-jDDTHH:MM:SS'
    ).format('YYYY-MM-DDTHH:MM:SS')
    request('/Event/EditEvent', 'POST', {
      eventName: todoID,
      eventDescription: description,
      eventTime: date,
      courseId,
      eventId,
      isDone
    }).then((data) => {
      if (data.status === 200) {
        toast.show('رویداد با موفقیت تغییر کرد', {
          type: 'success'
        })
        navigation.goBack()
      } else {
        toast.show(data.response.errors[0].message)
      }
    })
  }
  const styles = useStyles()
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
          <CustomButton
            title="ثبت تغییرات"
            size="small"
            onPress={editToDoFunction}
            disabled={!description || !todoID || !listTodo}
          />
        </View>
      </ScrollView>
    </View>
  )
}
