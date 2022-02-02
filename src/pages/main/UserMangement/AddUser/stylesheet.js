import palette from "../../../../theme/palette";
import {StyleSheet} from 'react-native'
import theme from '../../../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.M_3_SYS_ON_PRIMARY,

    },
    pickerLabelStyle: {
        fontSize: 18,
        fontFamily: theme.ShabnamBold
    },
    labelStyle: {
        fontSize: 14,
    },
    helperText: {
        fontSize: 14,
        marginTop: 5
    },
    buttonContainer: {
        marginBottom: 16,
        borderRadius: 7
    },
})
export default styles