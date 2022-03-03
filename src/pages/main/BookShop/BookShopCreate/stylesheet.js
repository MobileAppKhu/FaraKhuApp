import theme from '../../../../theme'
import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1,
    backgroundColor: palette.M_3_SYS_BACKGROUND
  },
  Guide: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16
  },
  pickerLabelStyle: {
    fontSize: 18,
    fontFamily: theme.ShabnamBold
  },
  imageInput: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  priceContainer: {
    marginHorizontal: 16,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  priceInput: {flex: 9},
  tomanContainer: {
    flex: 3,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: 16
  },
  descInputContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    flex: 1
  },
  descInput: {
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
  helperText: {
    fontSize: 14,
    marginTop: 5
  }
}))
export default useStyles
