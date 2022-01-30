import React from 'react'
import styles from './stylesheet'
import {Image, Pressable, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import CustomIcon from '../../../../../components/CustomIcon'

export default function DataBookShop({

                                         text,
                                         type,
                                         lessonImage,
                                         price,
                                     }) {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.root}>
            <View style={styles.cardStyle}>
                <View style={styles.desCard}>
                    <View style={styles.textBook}>
                        <Typography variant="bold13" color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
                            {text}
                        </Typography>
                    </View>
                    <View style={styles.typeBook}>
                        <Typography variant="medium12" color={palette.M_3_SYS_ON_PRIMARY}>
                            {type}
                        </Typography>
                    </View>
                    <View style={styles.priceBook}>
                        <Typography variant="smallButton" color={palette.M_3_SYS_ON_SECONDARY_CONTAINER}>
                            {price}
                        </Typography>
                    </View>

                </View>

                <View style={styles.imgLessonStyle}>
                    <Image
                        style={styles.imgLesson}
                        source={require('../../../../../assets/images/sample_avatar.jpg')}
                    />
                </View>
            </View>
        </Pressable>
    )
}
