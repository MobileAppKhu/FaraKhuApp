import React, {useState} from 'react'
import {View, ScrollView} from 'react-native'
import useStyles from './stylesheet'
import CustomPicker from '../../../../components/CustomPicker'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import CustomInput from '../../../../components/CustomInput'
import palette from '../../../../theme/palette'
import SimpleHeader from '../../../../components/SimpleHeader'
import CustomButton from '../../../../components/CustomButton'
export default function AddUser() {
  const [typeTeacher, setTypeTeacher] = useState()
  const [name, setName] = useState()
  const [familyname, setFamilyName] = useState()
  const [identitycode, setIdentityCode] = useState()
  const [email, setEmail] = useState()
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <SimpleHeader
        title="ایجاد کاربر جدید"
        titleColor={palette.M_3_SYS_ON_SURFACE}
        backgroundColor={palette.M_3_SYS_ON_PRIMARY}
        itemsColor={palette.M_3_SYS_ON_SURFACE}
      />
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <View>
            <CustomPicker
              label="نوع کاربر:"
              labelStyle={styles.pickerLabelStyle}
              required
              items={['استاد', 'داشنجو', 'ادمین روابط عمومی', 'ادمین  کلی']}
              labelColor={palette.M_3_SYS_ON_SURFACE}
              selectedItem={typeTeacher}
              onSelectItem={(type) => setTypeTeacher(type)}
            />
          </View>
          <View style={{marginHorizontal: 16}}>
            <HorizontalSeparator margin={18} />
          </View>

          <CustomInput
            label="نام:"
            placeholder="مثال:سیاورش"
            required={true}
            maxLength={20}
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.labelStyle}
            style={styles.textInput}
            value={name}
            onChangeText={(nm) => setName(nm)}
          />
          <View style={{marginHorizontal: 16}}>
            <HorizontalSeparator margin={18} />
          </View>
          <CustomInput
            label="نام خانوادگی:"
            placeholder="مثال:کسرایی"
            required={true}
            maxLength={9}
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.labelStyle}
            style={styles.textInput}
            value={familyname}
            onChangeText={(fname) => setFamilyName(fname)}
          />
          <View style={{marginHorizontal: 16}}>
            <HorizontalSeparator margin={18} />
          </View>
          <CustomInput
            label="کدهویت کاربری:"
            placeholder="مثال:شماره استادی/دانشجویی/کارمندی"
            required={true}
            maxLength={20}
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.labelStyle}
            style={styles.textInput}
            value={identitycode}
            onChangeText={(identity) => setIdentityCode(identity)}
          />
          <View style={{marginHorizontal: 16}}>
            <HorizontalSeparator margin={18} />
          </View>
          <CustomInput
            label="ایمیل دانشگاهی:"
            placeholder="مثال:Exaple@Khu.ac.ir"
            required={true}
            maxLength={20}
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.labelStyle}
            style={styles.textInput}
            value={email}
            onChangeText={(mail) => setEmail(mail)}
          />
          <View style={{marginHorizontal: 16}}>
            <HorizontalSeparator margin={18} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="ایجاد کاربر"
              size="small"
              startIcon="add_24px"
              startIconSize={19}
              startIconColor={palette.M_3_SYS_ON_PRIMARY}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
