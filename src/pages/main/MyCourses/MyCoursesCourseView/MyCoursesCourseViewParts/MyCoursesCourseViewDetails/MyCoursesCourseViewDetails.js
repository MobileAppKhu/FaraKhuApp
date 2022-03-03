import React from 'react'
import {View} from 'react-native'
import CustomIcon from '../../../../../../components/CustomIcon'
import Typography from '../../../../../../components/Typography'
import palette from '../../../../../../theme/palette'
import useStyles from './stylesheet'
export default function MyCoursesCourseViewDetails({
  examDate,
  classTime,
  location
}) {
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <View style={styles.timeDetailsContainer}>
        <CustomIcon
          name="wall-clock"
          size={30}
          color={palette.M_3_SYS_PRIMARY}
        />
        <View style={styles.timeDetails}>
          {classTime.map(({day, hour}) => (
            <ClassTimeComponent day={day} hour={hour} key={day + hour} />
          ))}
        </View>
        <View style={styles.examDateContainer}>
          <Typography
            variant="body1"
            color={palette.M_3_SYS_ON_SURFACE}
            style={styles.examDate}>
            تاریخ امتحان:
          </Typography>
          <Typography variant="body1" color={palette.M_3_SYS_ON_SURFACE}>
            {examDate}
          </Typography>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <CustomIcon
          name="location"
          size={30}
          color={palette.M_3_SYS_PRIMARY}
          style={styles.locationIcon}
        />
        <Typography
          variant="body1"
          color={palette.M_3_SYS_ON_SURFACE}
          style={styles.locatioText}>
          مکان برگزاری:
        </Typography>
        <Typography variant="body2" color={palette.M_3_SYS_ON_SURFACE}>
          {location}
        </Typography>
      </View>
    </View>
  )
}
const ClassTimeComponent = ({day, hour}) => {
  const styles = useStyles()
  return (
    <View style={styles.timeDetailsPart}>
      <Typography variant="body1" color={palette.M_3_SYS_ON_SURFACE}>
        {hour}
      </Typography>
      <Typography variant="body1" color={palette.M_3_SYS_ON_SURFACE}>
        {day}
      </Typography>
    </View>
  )
}
