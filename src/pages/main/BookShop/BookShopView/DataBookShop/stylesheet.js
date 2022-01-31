import {StyleSheet} from 'react-native'
import palette from '../../../../../theme/palette'

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 24,
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 8,
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderRadius: 12,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardStyle: {
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row-reverse'
  },
  cardDesc: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  bookImageStyle: {
    alignItems: 'center',
    flex: 1
  },
  bookImage: {
    width: 118,
    height: 118,
    borderRadius: 12
  },
  textRoot: {
    marginTop: 8
  },
  bookTitle: {
    width: '100%'
  },
  AdType: {
    width: 50,
    height: 21,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: palette.M_3_SYS_SECONDARY
  },
  priceBook: {
    maxWidth: 100
  }
})
export default styles
