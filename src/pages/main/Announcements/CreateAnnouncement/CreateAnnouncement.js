import {View} from 'react-native'
import React, {useState} from 'react'
import SimpleHeader from '../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import CustomInput from './../../../../components/CustomInput'
import styles from './stylesheet'
import palette from '../../../../theme/palette'
import CustomButton from '../../../../components/CustomButton'
export default function CreateAnnouncement() {
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  return (
    <View style={styles.root}>
      <SimpleHeader title="ایجاد فراخوان" />
      <ScrollView>
        <View style={styles.optionsContainer}>
          <CustomInput
            label="عنوان:"
            labelColor={palette.M_3_SYS_PRIMARY}
            value={title}
            onChangeText={(text) => settitle(text)}
          />
          <CustomInput
            value={description}
            label="توضیحات:"
            labelColor={palette.M_3_SYS_PRIMARY}
            multiline
            numberOfLines={19}
            textAlignVertical="top"
            onChangeText={(text) => setdescription(text)}
          />
        </View>
      </ScrollView>
      <View style={styles.optionsContainer}>
        <CustomButton
          title="ایجاد فراخوان"
          size="small"
          style={styles.button}
        />
      </View>
    </View>
  )
}
