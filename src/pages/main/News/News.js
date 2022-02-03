import React, {useState} from 'react'
import {View, Pressable, Image, ScrollView, ImageBackground} from 'react-native'
import CustomIcon from '../../../components/CustomIcon'
import Typography from "../../../components/Typography";
import palette from "../../../theme/palette";
import styles from './stylesheet'
import CustomButton from "../../../components/CustomButton";
import Modal from 'react-native-modal'
import {useNavigation} from '@react-navigation/native'
import OptionsModal from "../BookShop/EachBookShop/OptionsModal";
import DeleteModal from "../BookShop/EachBookShop/DeleteModal";
import SimpleHeader from "../../../components/SimpleHeader";
import CustomInput from "../../../components/CustomInput";
import DatePicker from "../../../components/DatePicker";
import UpcomingEventItems from "../Dashboard/Components/UpcomingEventItems/UpcomingEventItems";
const androidRipple = {borderless: true, color: '#ddd', radius: 25}
export default function News() {
const [title,setTitle]=useState();
const [description,setDescription]=useState();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/my-course-test.jpg')}
                style={styles.root}>
                <View style={styles.moreOption}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        android_ripple={androidRipple}>
                        <CustomIcon
                            name="icons8_back-1-False"
                            size={30}
                            color={palette.M_3_SYS_INVERSE_ON_SURFACE}
                        />
                    </Pressable>
                </View>
                <View style={styles.information}>
                    <Typography variant="h3" color={palette.M_3_SYS_ON_PRIMARY}>
                        اختتامیه اولین مسابقه ملی ایده های زیست فناوری
                    </Typography>
                </View>
            </ImageBackground>

            <View style={styles.AnnouncementDetails}>
                <View style={styles.AnnouncementDetailsButton}>
                    <Pressable
                        android_ripple={{
                            color: palette.M_3_SYS_SURFACE_VARIANT,
                            radius: 30,
                            borderless: true
                        }}>
                        <CustomIcon
                            name="icons8_left_send"
                            size={24}
                            color={palette.M_3_REF_PRIMARY_PRIMARY_0}
                        />
                    </Pressable>
                </View>
                <View style={{marginHorizontal:16,}}>
                    <Typography
                        style={{marginBottom: 8}}
                        variant="medium12"
                        color={palette.M_3_SYS_OUTLINE}>
                        تاریخ ارسال:20ابان 1400
                    </Typography>
                    <ScrollView>
                        <Typography variant="smallButton" color={palette.M_3_SYS_ON_BACKGROUND}>سیبسشبسبس</Typography>
                    </ScrollView>
                </View>
                </View>
        </View>
    )
}
