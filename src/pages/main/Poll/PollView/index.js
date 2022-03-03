import React, {useState} from 'react'
import {View, ScrollView} from 'react-native'

import SimpleHeader from '../../../../components/SimpleHeader'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import PollOptionDetails from './PollOptionDetails'
import useStyles from './stylesheet'
import TerminatePollModal from './TerminatePollModal'

const samplePollOptions = [
  {
    title: '29 آذر - 8 تا 10 صبح',
    vote: 20,
    percentage: 35,
    MostVote: false,
    checked: false
  },
  {
    title: '29 آذر - 7 تا 10 صبح',
    vote: 10,
    percentage: 24,
    MostVote: true,
    checked: false
  },
  {
    title: '29 آذر - 9 تا 10 صبح',
    vote: 35,
    percentage: 78,
    MostVote: false,
    checked: true
  }
]

function PollView({
  pollTitle = 'کدام تاریخ برای برگزاری کوییز سوم برای شما مناسب است؟',
  options = samplePollOptions,
  multiple = true
}) {
  const [pollOptions, setPollOptions] = useState(options)
  const [terminatePollModal, setTerminatePollModal] = useState(false)

  const optionOnPressHandler = (option) => {
    const selectedIndex = pollOptions.findIndex(
      (opt) => opt.title === option.title
    )

    const newOptions = [...pollOptions]
    newOptions[selectedIndex] = {
      ...newOptions[selectedIndex],
      checked: !newOptions[selectedIndex]['checked']
    }
    setPollOptions(newOptions)
  }
  const styles = useStyles()
  return (
    <View style={styles.screen}>
      <SimpleHeader
        title="نظرسنجی"
        headerRightText="اتمام/حذف"
        showHeaderRight={true}
        onHeaderRightClicked={() => setTerminatePollModal(true)}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Typography variant="regular10" color={palette.M_3_SYS_BACKGROUND}>
              هوش مصنوعی و سیستم های خبره
            </Typography>
          </View>
        </View>

        <View style={styles.pollTitle}>
          <Typography variant="h5">{pollTitle}</Typography>
        </View>

        {multiple && (
          <Typography variant="regular10" style={styles.multipleText}>
            * امکان انتخاب چندین گزینه وجود دارد.
          </Typography>
        )}

        {pollOptions.map((option, index) => (
          <PollOptionDetails
            key={index}
            checked={option.checked}
            {...option}
            onPress={() => optionOnPressHandler(option)}
          />
        ))}
      </ScrollView>
      <TerminatePollModal
        isVisible={terminatePollModal}
        onCancelBtnPress={() => setTerminatePollModal(false)}
      />
    </View>
  )
}

export default PollView
