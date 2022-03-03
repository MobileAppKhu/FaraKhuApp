import makeStyles from '../../../../../helpers/makeStyles'

export default makeStyles((palette) => ({
  root: {
    marginHorizontal: 8,
    marginBottom: 8,
    paddingVertical: 4,
    borderRadius: 12,
    paddingRight: 32,
    paddingLeft: 20,
    backgroundColor: palette.M_3_SYS_TERTIARY_CONTAINER,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  eventDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1.5
  },

  eventControler: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  }
}))
