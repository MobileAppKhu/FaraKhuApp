import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  screen: {
    flex: 1
  },
  container: {
    flexGrow: 1
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 14,
    paddingHorizontal: 24,
    justifyContent: 'flex-end'
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40
  },
  pollTitle: {
    marginBottom: 16,
    paddingHorizontal: 24
  },
  multipleText: {
    paddingHorizontal: 24
  }
}))
export default useStyles
