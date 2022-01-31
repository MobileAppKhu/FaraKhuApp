import React from "react";
import Typography from "../../../../components/Typography";
import {Image, ImageBackground, Pressable, View} from 'react-native';
import MyCoursesCourseViewHeader
    from "../../MyCourses/MyCoursesCourseView/MyCoursesCourseViewParts/MyCoursesCourseViewHeader/MyCoursesCourseViewHeader";
import {ScrollView} from "react-native-gesture-handler";
import palette from "../../../../theme/palette";
import styles from './stylesheet'
import HorizontalSeparator from "../../../../components/HorizontalSeparator";
import CustomIcon from "../../../../components/CustomIcon";
export default function EachBookShop() {
    return (
        <View style={styles.root}>
            <ImageBackground
                source={require('../../../../assets/images/sample_avatar.jpg')}
                style={styles.root2}>
                <View style={styles.moreOption}>
                    <Pressable>
                        <CustomIcon
                            name="icons8_back-1"
                            size={30}
                            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
                        />
                    </Pressable>
                    <Pressable>
                        <CustomIcon
                            name="more_vert_24px"
                            size={30}
                            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
                        />
                    </Pressable>
                </View>

            </ImageBackground>
            <ScrollView>
                <View style={styles.textType}>
                    <View>
                        <Typography variant="h4" color={palette.M_3_SYS_ON_BACKGROUND}>
                            5کتاب اصلی مهندسی کامپیوتر اینجاست
                        </Typography>
                    </View>
                    <View style={styles.typeBook}>
                        <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
                            فروش
                        </Typography>
                    </View>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
                <View style={styles.price}>
                    <View>
                        <Typography variant="body1" color={palette.M_3_SYS_OUTLINE}>
                            قیمت
                        </Typography>
                    </View>
                    <View>
                        <Typography variant="h6" color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
                            400هزار تومن
                        </Typography>
                    </View>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
                <View style={{marginHorizontal:16}}>
                    <View>
                        <Typography variant="bold18" color={palette.M_3_SYS_ON_BACKGROUND}>
                            توضیحات
                        </Typography>
                    </View>
                    <View style={{marginTop:16}}>
                        <Typography variant="body2" color={palette.M_3_SYS_ON_BACKGROUND}>
                            ❌❌فوری❌❌
                            من به تازگی از رشته‌ی مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این کتا‌ب‌ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می کنید:

                            Java How to Deitel -
                            - معماری کامپیوتر پترسون (ویرایش RISC-V)
                            Java How to Deitel -
                            C++How to Deitel -
                            Clean Code for Dummies -

                            اگر تمایل به خرید دارید، میتونید به این ایمیل پیام بدید:

                            ce_khu@khu.ac.ir 👈🏼 📧

                            قیمت ها واقعا منصفانه هستن و از این کمتر نمیشه.
                            فقط هم فروش یکجا.
                        </Typography>
                    </View>
                </View>
                <View style={{marginHorizontal: 16}}>
                    <HorizontalSeparator margin={18}/>
                </View>
            </ScrollView>
        </View>

    )
}