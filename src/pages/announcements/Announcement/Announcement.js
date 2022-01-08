import React from 'react'
import {View, Image, Pressable} from 'react-native'
import Typography from '../../../components/Typography'
import {useNavigation} from '@react-navigation/native'
import styles from './stylesheet'
import palette from '../../../theme/palette'
import CustomButton from '../../../components/CustomButton'
import CustomIcon from "../../../components/CustomIcon";
import AnnouncementItem from "./AnnouncementItem/AnnouncementItem";
import {ScrollView} from "react-native-gesture-handler";

export default function Announcement() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.topappbar}>
                <View style={styles.menuIconContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <CustomIcon name="arrow_back_24px" size={24} color={palette.M_3_SYS_ON_PRIMARY}/>
                    </Pressable>
                </View>
                <View style={styles.topappbar}>
                    <Typography
                        variant="black18"
                        color={palette.M_3_SYS_ON_PRIMARY}
                    >
                        فراخوان ها
                    </Typography>
                </View>
            </View>
            <ScrollView>
                <View>
                    {data.map((item, index) =>
                        <AnnouncementItem
                    key={item.text + item.teacherName + index.toString()}
                    teacherName={item.teacherName}
                    teacherImage={item.teacherImage}
                    text={item.text} date={item.date}
                    iconName={item.iconName}/>)}
                </View>

            </ScrollView>
            <View>
                <Pressable
                style={{
                    bottom: 16,
                    left: 24,
                    height: 56,
                    width: 146,
                    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
                    borderRadius: 12,
                }}>
                    <View style={styles.addiconStyle}>
                        <View style={styles.textStyle}>
                            <Typography variant="h6" color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
                                فراخوان جدید
                            </Typography>
                        </View>
                        <View style={styles.iconStyle}>
                            <CustomIcon name="mode_edit_24px" size={24} />
                        </View>

                    </View>

            </Pressable>
            </View>

        </View>
    )
}
const data = [{
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1 vali konie Behnia pesare khobie1 vali konie ',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}, {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'fskahsjkfhas',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}, {
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}, {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'Behnia pesare khobie2',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}, {
    teacherName: 'Arsham1',
    teacherImage: null,
    text: 'Behnia pesare khobie1',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}, {
    teacherName: 'Arsham2',
    teacherImage: null,
    text: 'Behnia pesare khobie2',
    date: '1400/10/29',
    iconName: "arrow_back_24px",
}]