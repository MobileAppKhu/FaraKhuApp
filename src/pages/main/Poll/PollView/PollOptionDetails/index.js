import React from 'react'
import {View, Pressable} from 'react-native'
import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'

import useStyles from './stylesheet'

function PollOptionDetails({
  title = '29 آذر 8 تا 9 صبح',
  vote = 0,
  percentage = 68,
  MostVote,
  checked = true,
  onPress
}) {
  const styles = useStyles()
  return (
    <View style={[styles.container, MostVote && styles.focusedContainer]}>
      <Pressable
        style={[styles.PollOption, MostVote && styles.focusedOption]}
        onPress={onPress}>
        <View style={styles.titleAndPercentage}>
          <View style={styles.percentage}>
            <Typography variant="h6">{percentage}%</Typography>
          </View>
          <View style={styles.title}>
            <Typography variant="h6">{title}</Typography>
          </View>
        </View>

        <View style={styles.percentageProgressBar}>
          <View
            style={[
              styles.percentageProgressValue,
              {width: `${percentage}%`}
            ]}></View>
        </View>

        <View style={styles.voteContainer}>
          <Typography variant="medium12">{vote} رأی</Typography>
          {checked && (
            <Typography color={palette.M_3_SYS_PRIMARY}>✓</Typography>
          )}
        </View>
      </Pressable>
    </View>
  )
}

export default PollOptionDetails
