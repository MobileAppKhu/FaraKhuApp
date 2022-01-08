import React from 'react'
import styles from './stylesheet'
import Typography from "../../../../components/Typography";
import {View} from 'react-native'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function AnnouncementItem({teacherName, teacherImage, text, date}) {
    return (<Pressable style={styles.root}>
        <Typography>
            {teacherName}
        </Typography>
    </Pressable>)
}