import React, {useState} from "react";
import Typography from "../../../../components/Typography";
import {ScrollView, View} from "react-native";
import SimpleHeader from "../../../../components/SimpleHeader";
import CustomPicker from "../../../../components/CustomPicker";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import palette from "../../../../theme/palette";
import CustomIcon from "../../../../components/CustomIcon";
import styles from './stylesheet'
import HorizontalSeparator from "../../../../components/HorizontalSeparator";
import ImagePicker from "../../../../components/ImagePicker";
import CustomInput from "../../../../components/CustomInput";
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

export default function BookShopCreate() {
    const navigation = useNavigation()
    const [typeBook, settypeBook] = useState()
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState()
    return (
        <View style={styles.root}>
            <SimpleHeader title="ثبت اگهی جدید"/>
            <ScrollView>
                <Pressable style={styles.Guide} onPress={() => navigation.navigate('guide')}>
                    <Typography variant="body2" color={palette.M_3_SYS_OUTLINE}>
                        راهنمای ثبت اگهی
                    </Typography>
                    <CustomIcon name="ck_24pxarrow_ba" size={20}/>

                </Pressable>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <CustomPicker
                        label="نوع اگهی:"
                        items={['خرید', 'فروش', 'امانت']}
                        labelColor={palette.M_3_SYS_ON_SURFACE}
                        selectedItem={typeBook}
                        onSelectItem={(type) => settypeBook(type)}
                    />
                </View>
                <View style={styles.imageInput}>
                    <ImagePicker
                        imageUri={image}
                        onChangeImage={(uri) => setImage(uri)}
                        width={144}
                        height={144}
                    />
                    <Typography variant="body1" color={palette.M_3_SYS_ON_BACKGROUND}>
                        عکس اگهی:
                    </Typography>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <CustomInput
                        placeholder="عنوان"
                        helperText='در عنوان اگهی به موارد مهم و چشمگیر اشاره کنید'
                        label="عنوان اگهی:"
                        labelColor={palette.M_3_SYS_ON_BACKGROUND}
                    />
                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>

                <View style={{marginHorizontal: 16, flexDirection: 'row-reverse', alignItems: 'center'}}>
                    <View style={{width: '60%'}}>
                        <CustomInput
                            placeholder="واردکنید"
                            label="قیمت:"
                            labelColor={palette.M_3_SYS_ON_BACKGROUND}
                        />
                    </View>
                    <View style={{width:'40%',height:'100%',flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
                        <Typography style={{marginBottom:15}} variant="body1"
                                    color={palette.M_3_SYS_ON_BACKGROUND}>
                            تومن
                        </Typography>
                    </View>

                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <Typography variant="body1" color={palette.M_3_SYS_ON_BACKGROUND}>
                        توضیحات اگهی:
                    </Typography>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <Typography variant="body1" color={palette.M_3_SYS_OUTLINE}>
                        جزئیات و نکات قابل توجه اگهی خود را کامل و دقیق بنویسید.محل تحویل(ترجیحا داخل دانشگاه)و راه
                        ارتباطی حتما ذکر شود (ترجیحا از فضای مجازی استفاده کنید).
                    </Typography>
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
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
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