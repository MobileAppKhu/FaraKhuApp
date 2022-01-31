import React from 'react'
import DataBookShop from "./DataBookShop/DataBookShop";
import SimpleHeader from './../../../../components/SimpleHeader'
import {ScrollView} from 'react-native-gesture-handler'
import {Pressable, View} from 'react-native'
import styles from './stylesheet'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import CustomIcon from '../../../../components/CustomIcon'
import {useNavigation} from '@react-navigation/native'
import BookShopHeader from "./BookShopHeader/BookShopHeader";
export default function BookShopView() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <BookShopHeader/>
            <ScrollView>
            <View>
                {data.map((item, index) => (
                    <DataBookShop
                        key={item.text + item.type + index.toString()}
                        text={item.text}
                        type={item.type}
                        lessonImage={item.lessonImage}
                        price={item.price}
                    />
                ))}

            </View>
            </ScrollView>
            <View>
                <Pressable
                    style={styles.buttonStyle}onPress={() => navigation.navigate('bookshop-create')}>
                    <View style={styles.addiconStyle}>
                        <View style={styles.textStyle}>
                            <Typography
                                variant="h6"
                                color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}>
                                اگهی جدید
                            </Typography>
                        </View>
                        <View style={styles.iconStyle}>
                            <CustomIcon
                                name="mode_edit_24px"
                                size={24}
                                color={palette.M_3_SYS_ON_PRIMARY_CONTAINER}
                            />
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}
const data = [
    {
        text: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
        type: 'فروش',
        lessonImage: null,
        price: '400هزارتومن',
    },    {
        text: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
        type: 'فروش',
        lessonImage: null ,
        price: '400هزارتومن',
    },    {
        text: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
        type: 'فروش',
        lessonImage: null ,
        price: '400هزارتومن',
    },    {
        text: '5 کامپیوتر اصلی مهندسی کامپیوتر اینجاست',
        type: 'فروش',
        lessonImage: null,
        price: '400هزارتومن',
    },

]
