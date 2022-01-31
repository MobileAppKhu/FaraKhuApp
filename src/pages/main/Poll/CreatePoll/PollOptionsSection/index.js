import React from 'react'
import {View, StyleSheet, Pressable} from 'react-native'

import Typography from '../../../../../components/Typography'
import palette from '../../../../../theme/palette'
import CustomIcon from '../../../../../components/CustomIcon'
import PollOption from '../PollOption'

function PollOptionsSection({
  pollOptions,
  setPollOptions,
  currentPollOptionId
}) {
  const pollOptionChangeHandler = (text, option) => {
    const selectedItem = pollOptions.findIndex((opt) => option.id === opt.id)
    const newOptions = pollOptions
    newOptions[selectedItem] = {
      ...newOptions[selectedItem],
      value: text
    }
    setPollOptions(newOptions)
  }

  const pollOptionRemoveHandler = (option) => {
    const newOptions = pollOptions.filter((opt) => option.id !== opt.id)
    setPollOptions(newOptions)
  }

  return (
    <View style={styles.pollOptions}>
      <View style={styles.pollOptionsTitle}>
        <Typography color={palette.M_3_SYS_ERROR} style={styles.requiredMark}>
          *
        </Typography>
        <Typography variant="h6" color={palette.M_3_SYS_PRIMARY}>
          گزینه‌ها:
        </Typography>
      </View>

      {pollOptions.map((option, index) => (
        <PollOption
          key={option.id}
          value={option.value}
          onChangeText={(text) => pollOptionChangeHandler(text, option)}
          removeHandler={() => pollOptionRemoveHandler(option)}
          placeholder={`گزینه${index + 1}`}
        />
      ))}

      <View style={styles.addOptionContainer}>
        <Pressable
          android_ripple={{color: palette.M_3_SYS_PRIMARY_CONTAINER}}
          style={styles.addOption}
          onPress={() => {
            setPollOptions([
              ...pollOptions,
              {id: currentPollOptionId++, value: ''}
            ])
          }}>
          <CustomIcon
            name="icon_add"
            size={22}
            color={palette.M_3_SYS_PRIMARY}
          />
          <Typography variant="h6" color={palette.M_3_SYS_PRIMARY}>
            افزودن گزینه
          </Typography>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pollOptionsTitle: {
    flexDirection: 'row-reverse',
    alignItems: 'baseline',
    marginBottom: 15
  },
  pollOptions: {
    marginTop: 20,
    marginBottom: 10
  },
  requiredMark: {
    marginLeft: 5
  },
  addOptionContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    width: '100%'
  },
  addOption: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '32%',
    paddingVertical: 10
  }
})

export default PollOptionsSection
