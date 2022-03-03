import makeStyles from '../../../../../../helpers/makeStyles'
const useStyles = makeStyles(() => ({
  root: {
    paddingRight: 17,
    paddingLeft: 30,
    paddingVertical: 24
  },
  timeDetailsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%'
  },
  timeDetails: {
    marginRight: 11,
    flex: 2,
    flexDirection: 'column'
  },
  timeDetailsPart: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  examDateContainer: {
    marginTop: -8,
    flex: 3,
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  examDate: {
    marginBottom: 8
  },
  locationContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  locationIcon: {
    marginLeft: 12
  },
  locatioText: {
    marginLeft: 8
  }
}))
export default useStyles
