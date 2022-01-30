import {StyleSheet} from 'react-native'
import palette from "../../../../../theme/palette";

const styles = StyleSheet.create({
    root: {
        backgroundColor: palette.M_3_SYS_SURFACE,
        elevation:6,
        width:'100%',
        paddingTop:20,
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lefticon:{
        marginLeft:24,
    },
    righticon: {
        marginRight: 16,
        flexDirection: 'row',
    },
})
export default styles