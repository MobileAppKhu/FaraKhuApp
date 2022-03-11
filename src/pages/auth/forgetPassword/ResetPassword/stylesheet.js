import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles(() => ({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100
  },
  labelContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline'
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14
  },
  requiredMark: {
    marginLeft: 5
  }
}))
export default useStyles
