import React from 'react'
import {View} from 'react-native'

import CustomInput from '../../../../../components/CustomInput'
import CustomPicker from '../../../../../components/CustomPicker'
import ErrorMessage from '../../../../../components/ErrroMessage'
import makeStyles from '../../../../../helpers/makeStyles'

export default function GeneralInfo({
  values,
  errors,
  touched,
  primaryColor,
  handleChange,
  setFieldTouched
}) {
  const styles = useStyles()

  return (
    <View>
      <CustomInput
        label="استاد درس:"
        placeholder="شماره استادی"
        keyboardType="numeric"
        maxLength={9}
        labelColor={primaryColor}
        labelStyle={{fontSize: 14, fontFamily: 'Shabnam'}}
        style={styles.textInput}
        value={values.profID}
        onChangeText={handleChange('profID')}
        onBlur={() => setFieldTouched('profID')}
      />
      <ErrorMessage error={errors.profID} visible={touched.profID} />
      <CustomPicker
        label="دانشکده:"
        items={[
          'فنی مهندسی',
          'ریاضی',
          'ادبیات',
          'فنی مهندسی',
          'ریاضی',
          'ادبیات',
          'فنی مهندسی',
          'ریاضی'
        ]}
        labelColor={primaryColor}
        selectedItem={values.faculty}
        onSelectItem={handleChange('faculty')}
      />
      <ErrorMessage error={errors.faculty} visible={touched.faculty} />

      <CustomPicker
        label="گروه درسی:"
        items={['برق', 'کامپیوتر', 'عمران']}
        labelColor={primaryColor}
        selectedItem={values.department}
        onSelectItem={handleChange('department')}
      />
      <ErrorMessage error={errors.department} visible={touched.department} />

      <CustomPicker
        label="نام درس:"
        items={['کامپایلر', 'ریاضی', 'ادبیات عمومی', 'معماری کامپیوتر']}
        labelColor={primaryColor}
        selectedItem={values.courseName}
        onSelectItem={handleChange('courseName')}
      />
      <ErrorMessage error={errors.courseName} visible={touched.courseName} />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  textInput: {
    textAlign: 'right',
    fontSize: 16,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  }
}))
