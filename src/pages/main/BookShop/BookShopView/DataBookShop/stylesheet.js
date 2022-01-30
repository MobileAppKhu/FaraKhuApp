import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 24,
        paddingRight:16,
        paddingLeft:8,
        paddingTop:8,
        paddingBottom:8,
        marginTop: 8,
        backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
        borderRadius: 12,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardStyle: {
        justifyContent: 'space-between',
        width:'100%',
        // alignItems: 'flex-end',
        flexDirection: 'row-reverse',

    },
    desCard:{
        alignItems: 'flex-end',
        justifyContent:'space-between',
    },
    imgLessonStyle:{
        alignItems: 'center',

    },
    imgLesson: {
        width: 118,
        height: 118,
        borderRadius: 12,
    },
    textRoot:{
        marginTop:8,

    },
    textBook:{
        maxWidth: 150,
    },
    typeBook:{
        width: 50,
        height: 21,
        borderRadius: 6,
        alignItems:'center',
        backgroundColor: palette.M_3_SYS_SECONDARY
    },
    priceBook:{
        maxWidth:100,

    },
})
export default styles
