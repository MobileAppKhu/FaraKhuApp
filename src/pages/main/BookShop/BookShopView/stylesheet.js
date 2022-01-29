import {StyleSheet} from 'react-native'
import palette from '../../../../theme/palette'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:palette.M_3_SYS_ON_PRIMARY
    },
    addiconStyle: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginRight: 12
    },
    iconStyle: {
        marginTop: 16,
        marginLeft: 12
    },
    textStyle: {
        marginTop: 16
    },
    buttonStyle: {
        position: 'absolute',
        bottom: 16,
        left: 24,
        height: 56,
        width: 129,
        backgroundColor: palette.M_3_SYS_PRIMARY_CONTAINER,
        borderRadius: 12,
        elevation: 10
    }
})
export default styles
