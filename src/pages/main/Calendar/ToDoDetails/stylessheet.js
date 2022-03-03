import makeStyles from '../../../../helpers/makeStyles'

const useStyles = makeStyles((palette) => ({
  container: {
    flex: 1
  },
  date: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    flexDirection: 'row-reverse',
    padding: 20,
    alignItems: 'center',
    width: '100%'
  },
  error: {
    color: palette.M_3_SYS_ERROR
  },
  description: {
    padding: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  tagContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 50
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: palette.M_3_REF_SECONDARY_SECONDARY_40
  },
  separator: {
    backgroundColor: palette.M_3_READ_ONLY_OUTLINE_OPACITY_0_16,
    width: '95%',
    alignSelf: 'flex-end'
  }
}))
export default useStyles
