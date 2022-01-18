import React from 'react'
import {View, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './stylesheet'
import DataSetting from "./DataSetting/DataSetting";
import SimpleHeader from "../../../../components/SimpleHeader";
import Typography from "../../../../components/Typography";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import palette from "../../../../theme/palette";
import CustomIcon from "../../../../components/CustomIcon";
import {ScrollView} from "react-native-gesture-handler";

export default function Setting() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <SimpleHeader title="تنظیمات" headerRightIcon={'icons8_search_1-1'}/>
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.imageText}>
                        <View>
                            <Image
                                style={styles.imageStyle}
                                source={require('../../../../assets/images/sample_avatar.jpg')}

                            />
                        </View>
                        <View style={styles.textCard}>
                            <Typography variant="h6" color={palette.M_3_REF_NEUTRAL_VARIANT_NEUTRAL_VARIANT_50}>
                                فرهبد دوست داشتنی

                            </Typography>

                        </View>
                    </View>

                    <Pressable style={styles.buttonCard}>
                        <View style={styles.textPressable}>
                            <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
                                تنظیمات پروفایل
                            </Typography>
                        </View>
                        <View style={styles.iconPressable}>
                            <CustomIcon
                                name="arrow_back_24px"
                                size={24}
                                color={palette.M_3_SYS_ON_PRIMARY}
                            />
                        </View>

                    </Pressable>
                </View>
                <DataSetting text={'تنظیمات اطلاع رسانی'}/>
                <DataSetting text={'تغییر رمز عبور'}/>
                <DataSetting text={'راهنمای برنامه'}/>

            </ScrollView>

            <View style={styles.buttonCardmain}>
                <Pressable style={styles.buttonCard2}>
                    <View style={styles.textCard2}>
                        <Typography variant="smallButton" color={palette.M_3_REF_PRIMARY_PRIMARY_40}>
                            خروج از حساب کاربری
                        </Typography>

                    </View>
                        <CustomIcon name="icons8_exit-1"
                                    size={24}
                                    color={palette.M_3_REF_PRIMARY_PRIMARY_40}
                                    style={styles.iconCard2}
                        />
                </Pressable>
            </View>
        </View>
    )
}
