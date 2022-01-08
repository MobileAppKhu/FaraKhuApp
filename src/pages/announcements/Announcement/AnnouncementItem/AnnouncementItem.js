import React from 'react'
import styles from './stylesheet'
import Typography from "../../../../components/Typography";
import {Image, View} from 'react-native'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CustomIcon from '../../../../components/CustomIcon'
import palette from "../../../../theme/palette";

export default function AnnouncementItem({teacherName, teacherImage, text, date, iconName}) {
    return (

        <Pressable style={styles.root}>
            <View style={styles.cardStyle}>
                <View style={styles.imgTeachStyle}>
                    <Image style={styles.imageStyle}
                           source={require('../../../../assets/images/sample_avatar.jpg')}
                    />
                    <View style={styles.teacherName}>
                        <Typography variant="black11" color={palette.M_3_SYS_PRIMARY}>
                            {teacherName}
                        </Typography>
                    </View>
                </View>
                <View style={styles.textIcon}>


                        <Typography variant="font13bold" color={palette.M_3_SYS_TERTIARY}>
                            {text}
                        </Typography>

                </View>
                <View style={styles.dateStyle}>
                    <Typography variant="black11" color={palette.M_3_SYS_TERTIARY}>
                        {date}
                    </Typography>
                </View>
            </View>
            <View style={styles.iconStyle}>
                <Pressable>
                    <CustomIcon name={iconName} size={24} color={palette.M_3_SYS_TERTIARY}/>
                </Pressable>
            </View>

        </Pressable>
    )
}