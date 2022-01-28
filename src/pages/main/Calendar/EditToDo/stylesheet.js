import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.M_3_SYS_ON_PRIMARY
    },
    textInputContainer: {
        marginHorizontal: 16
    },
    textInput: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: palette.M_3_SYS_OUTLINE
    },
    dateContainer: {
        flexDirection: 'row-reverse',
        marginHorizontal: 16,
        marginTop: 32,
        paddingRight: 12
    },
    dateInput: {
        width: 147,
        height: 32,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
        borderRadius: 7,
        marginLeft: 8
    },
    dateTextInput: {
        padding: 0,
        paddingHorizontal: 5
    },
    hourInput: {
        width: 59,
        height: 29,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
        borderRadius: 7,
        marginLeft: 8
    },
    containerpicker: {
        flexDirection: 'row',
        marginHorizontal: 16
    },
    desInput: {
        height: 223,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: palette.M_3_SYS_OUTLINE
    },
    desinputContainer: {
        marginHorizontal: 16,
        flex: 1
    },
    buttonContainer: {
        marginHorizontal: 16,
        marginBottom: 16
    },
    button: {
        marginBottom: 16
    },
    labelStyle: {
        fontSize: 14,
        fontFamily: 'Shabnam'
    },
    hourContainer: {
        marginRight: 32
    }
})
export default styles
