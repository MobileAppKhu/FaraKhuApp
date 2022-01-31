import React, {useState} from 'react'
import {ScrollView, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Typography from '../../../../components/Typography'
import SimpleHeader from '../../../../components/SimpleHeader'
import CustomPicker from '../../../../components/CustomPicker'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import palette from '../../../../theme/palette'
import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import ImagePicker from '../../../../components/ImagePicker'
import CustomInput from '../../../../components/CustomInput'
import CustomButton from '../../../../components/CustomButton'
import styles from './stylesheet'

export default function BookShopCreate() {
  const navigation = useNavigation()
  const [bookType, setBookType] = useState()
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState()

  return (
    <View style={styles.container}>
      <SimpleHeader title="ثبت آگهی جدید" />

      <ScrollView>
        <Pressable
          style={styles.Guide}
          onPress={() => navigation.navigate('guide')}>
          <Typography variant="body2" color={palette.M_3_SYS_OUTLINE}>
            راهنمای ثبت اگهی
          </Typography>
          <Typography>〈</Typography>
        </Pressable>

        <HorizontalSeparator margin={18} />

        <View style={{marginHorizontal: 16}}>
          <CustomPicker
            label="نوع اگهی:"
            labelStyle={styles.pickerLabelStyle}
            required
            items={['خرید', 'فروش', 'امانت']}
            labelColor={palette.M_3_SYS_ON_SURFACE}
            selectedItem={bookType}
            onSelectItem={(type) => setBookType(type)}
          />
        </View>

        <HorizontalSeparator margin={18} />

        <View style={styles.imageInput}>
          <ImagePicker
            imageUri={image}
            onChangeImage={(uri) => setImage(uri)}
            width={144}
            height={144}
          />
          <Typography variant="bold18" color={palette.M_3_SYS_ON_BACKGROUND}>
            عکس اگهی:
          </Typography>
        </View>

        <HorizontalSeparator marginTop={18} marginBottom={0} />

        <View style={{marginHorizontal: 16}}>
          <CustomInput
            placeholder="عنوان"
            helperText="در عنوان اگهی به موارد مهم و چشمگیر اشاره کنید"
            helperTextStyle={styles.helperText}
            label="عنوان اگهی:"
            required
            labelColor={palette.M_3_SYS_ON_BACKGROUND}
            labelStyle={styles.pickerLabelStyle}
          />
        </View>

        <HorizontalSeparator marginTop={18} marginBottom={0} />

        <View style={styles.priceContainer}>
          <View style={styles.priceInput}>
            <CustomInput
              placeholder="وارد کنید"
              label="قیمت:"
              keyboardType="numeric"
              labelColor={palette.M_3_SYS_ON_BACKGROUND}
            />
          </View>
          <View style={styles.tomanContainer}>
            <Typography
              style={{marginBottom: 15}}
              variant="body1"
              color={palette.M_3_SYS_ON_BACKGROUND}>
              تومان
            </Typography>
          </View>
        </View>

        <HorizontalSeparator margin={18} />

        <View style={{marginHorizontal: 16}}>
          <Typography
            variant="bold18"
            color={palette.M_3_SYS_ON_BACKGROUND}
            style={styles.pickerLabelStyle}>
            توضیحات اگهی:
          </Typography>
        </View>

        <View style={{marginHorizontal: 16, marginTop: 16}}>
          <Typography variant="body2" color={palette.M_3_SYS_OUTLINE}>
            جزئیات و نکات قابل توجه اگهی خود را کامل و دقیق بنویسید.محل
            تحویل(ترجیحا داخل دانشگاه)و راه ارتباطی حتما ذکر شود (ترجیحا از فضای
            مجازی استفاده کنید).
          </Typography>
        </View>

        <View style={styles.descInputContainer}>
          <CustomInput
            placeholder="«توضیحات رویداد»"
            textAlignVertical="top"
            labelColor={palette.M_3_SYS_PRIMARY}
            labelStyle={styles.labelStyle}
            style={styles.descInput}
            value={description}
            multiline
            onChangeText={(desc) => setDescription(desc)}
          />
        </View>

        <HorizontalSeparator margin={18} />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="ثبت اگهی"
            size="small"
            startIcon="add_24px"
            startIconSize={18}
            startIconColor={palette.M_3_SYS_ON_PRIMARY}
          />
        </View>
      </ScrollView>
    </View>
  )
}
