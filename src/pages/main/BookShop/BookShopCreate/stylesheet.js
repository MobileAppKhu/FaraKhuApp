import palette from "../../../../theme/palette";
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
   root:{
       flex:1,
       backgroundColor:palette.M_3_SYS_BACKGROUND,

   },
    Guide:{
       flexDirection:'row-reverse',
        justifyContent:'space-between',
        marginHorizontal:16,
        marginTop:16,
    },
    imageInput: {
        marginTop:16,
        marginHorizontal:16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    desinputContainer: {
        marginHorizontal: 16,
        flex: 1
    },
    desInput: {
        height: 223,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: palette.M_3_SYS_OUTLINE
    },
    labelStyle: {
        fontSize: 14,
        fontFamily: 'Shabnam'
    },
})
export default styles