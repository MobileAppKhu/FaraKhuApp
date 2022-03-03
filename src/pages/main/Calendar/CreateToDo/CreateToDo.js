import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import useStyles from './stylesheet'
import {ScrollView, TextInput, View} from 'react-native'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomInput from '../../../../components/CustomInput'
import CustomPicker from '../../../../components/CustomPicker'
import CustomButton from '../../../../components/CustomButton'
import {request} from '../../../../helpers/request'
import moment from 'moment-jalaali'
import {useToast} from 'react-native-toast-notifications'
import {useNavigation} from '@react-navigation/native'

export default function CreatToDo() {
  const [finalExamDate, setFinalExamDate] = useState({
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: ''
  })
  const navigation = useNavigation()
  const [listTodo, setlistTodo] = useState('')
  const [description, setDiscription] = useState('')
  const [todoID, setToDoID] = useState('')
  const toast = useToast()
  const createToDoFunction = async () => {
    const date = moment(
      `${finalExamDate.year}-${finalExamDate.month}-${finalExamDate.day} ${finalExamDate.hour}:${finalExamDate.minute}`,
      'jYYYY-jMM-jDD HH:MM'
    ).format('YYYY-MM-DDTHH:MM:SS')
    request('/Event/AddEvent', 'POST', {
      eventName: todoID,
      eventDescription: description,
      eventTime: date,
      courseId: listTodo.startsWith('شخصی')
        ? ''
        : '2d5fd322-1f99-4cf5-8dbe-7858d59b5189'
    }).then((data) => {
      if (data.status === 200) {
        toast.show('رویداد با موفقیت ایجاد شد', {
          type: 'success'
        })
        navigation.goBack()
      }
    })
  }
  const styles = useStyles()
  return (
    <View style={styles.screen}>
      <SimpleHeader
        title="رویداد جدید"
        backgroundColor={palette.M_3_SYS_PRIMARY}
        titleColor={palette.M_3_SYS_ON_PRIMARY}
        itemsColor={palette.M_3_SYS_ON_PRIMARY}
      />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.textInputContainer}>
          <CustomInput
            label="عنوان رویداد:"
            required={true}
            placeholder="«عنوان رویداد»"
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
            title="ایجاد رویداد ✓"
            size="small"
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
            disabled={!listTodo || !description || !finalExamDate || !todoID}
            onPress={createToDoFunction}
          />
        </View>
      </ScrollView>
    </View>
  )
}
