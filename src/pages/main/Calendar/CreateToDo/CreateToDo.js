import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import styles from './stylesheet'
import {TextInput, View} from 'react-native'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomInput from '../../../../components/CustomInput'
import CustomPicker from '../../../../components/CustomPicker'
import CustomButton from '../../../../components/CustomButton'

export default function CreatToDo() {
  const [finalExamDate, setFinalExamDate] = useState({
    day: '',
    month: '',
    year: ''
  })
  const [listTodo, setlistTodo] = useState('')
  const [description, setDiscription] = useState()
  const [todoID, setToDoID] = useState('')

  return (
    <View style={styles.container}>
      <SimpleHeader
        title="رویداد جدید"
        backgroundColor={palette.M_3_SYS_PRIMARY}
        titleColor={palette.M_3_SYS_ON_PRIMARY}
        itemsColor={palette.M_3_SYS_ON_PRIMARY}
      />
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
        <Typography variant="body1" color={palette.M_3_SYS_PRIMARY}>
          تاریخ رویداد:
        </Typography>
        <View style={styles.dateInput}>
          <TextInput
            maxLength={2}
            placeholder="روز"
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(day) => setFinalExamDate({...finalExamDate, day})}
            style={styles.dateTextInput}
          />
          <Typography>{`/`}</Typography>
          <TextInput
            maxLength={2}
            placeholder="ماه"
            keyboardType="numeric"
            textAlign="center"
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
            onChangeText={(year) => setFinalExamDate({...finalExamDate, year})}
            style={styles.dateTextInput}
          />
        </View>
        <View style={styles.hourContainer}>
          <Typography variant="body1" color={palette.M_3_SYS_PRIMARY}>
            ساعت:
          </Typography>
        </View>
        <View style={styles.hourInput}>
          <TextInput
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(year) => setFinalExamDate({...finalExamDate, year})}
            style={styles.dateTextInput}
          />
          <Typography>{`:`}</Typography>
          <TextInput
            maxLength={2}
            keyboardType="numeric"
            textAlign="center"
            onChangeText={(year) => setFinalExamDate({...finalExamDate, year})}
            style={styles.dateTextInput}
          />
        </View>
      </View>
      <View style={styles.containerpicker}>
        <CustomPicker
          label="دسته بندی:"
          items={['behnia1', 'behnia2', 'behnia3', 'behnia4']}
          labelColor={palette.M_3_SYS_PRIMARY}
          selectedItem={listTodo}
          onSelectItem={(lst) => setlistTodo(lst)}
        />
      </View>
      <View style={styles.desinputContainer}>
        <CustomInput
          label="توضیحات:"
          placeholder="((توضیحات رویداد))"
          textAlignVertical="top"
          labelColor={palette.M_3_SYS_PRIMARY}
          labelStyle={styles.labelStyle}
          style={styles.desInput}
          value={description}
          onChangeText={(des) => setDiscription(des)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="ایجاد رویداد"
          size="small"
          startIcon="check_24px"
          startIconSize={18}
          startIconColor={palette.M_3_SYS_ON_PRIMARY}
        />
      </View>
    </View>
  )
}
