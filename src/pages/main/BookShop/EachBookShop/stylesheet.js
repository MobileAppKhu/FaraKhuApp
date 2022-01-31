import palette from "../../../../theme/palette";
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:palette.M_3_SYS_BACKGROUND,

    },
    root2: {
        width: '100%',
        height: 250,
        justifyContent: 'space-between'
    },
    textType:{
        marginHorizontal:16,
        alignItems: 'flex-end',
        justifyContent:'space-between',
        marginTop: 16,
    },
    typeBook:{
        width: 50,
        height: 21,
        borderRadius: 6,
        alignItems:'center',
        backgroundColor: palette.M_3_SYS_SECONDARY,
        marginTop:8
    },
    price:{
        marginHorizontal:16,
        flexDirection:'row-reverse',
        justifyContent: 'space-between'
    },

    moreOption: {
        paddingHorizontal: 24,
        paddingTop: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'red',
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'space-between'
    },
    teacherImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 8
    }
})
export default styles