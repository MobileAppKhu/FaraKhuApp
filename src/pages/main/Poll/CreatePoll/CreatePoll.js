import React, {useRef, useState} from 'react'
import {View, ScrollView} from 'react-native'

import SimpleHeader from '../../../../components/SimpleHeader'
import CustomInput from '../../../../components/CustomInput'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import styles from './stylesheet'
import CustomButton from '../../../../components/CustomButton'
import PollOptionsSection from './PollOptionsSection'
import SuccessModal from './SuccessModal'

let id = 0

function CreatePoll() {
  const [pollTitle, setPollTitle] = useState('')
  const [pollOptions, setPollOptions] = useState([{id: id++, value: ''}])
  const [successModal, setSuccessModal] = useState(false)

  const container = useRef()

  return (
    <View style={styles.screen}>
      <SimpleHeader title="نظرسنجی جدید" />

      <ScrollView
        ref={container}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => container.current.scrollToEnd()}>
        <View style={styles.contentContainer}>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Typography
                variant="regular10"
                color={palette.M_3_SYS_BACKGROUND}>
                هوش مصنوعی و سیستم های خبره
              </Typography>
            </View>
          </View>

          <View style={styles.pollTitle}>
            <CustomInput
              label="پرسش نظرسنجی:"
              required
              placeholder="سوال"
              style={styles.input}
              labelColor={palette.M_3_SYS_PRIMARY}
              labelStyle={styles.inputLabel}
              multiline
              defaultValue={pollTitle}
              onChangeText={(title) => setPollTitle(title)}
            />
          </View>

          <PollOptionsSection
            pollOptions={pollOptions}
            setPollOptions={setPollOptions}
            currentPollOptionId={id}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="ایجاد نظرسنجی"
            size="small"
            startIcon="icons_poll"
            startIconColor={palette.M_3_READ_ONLY_WHITE}
            startIconSize={18}
          />
        </View>
        <SuccessModal
          isVisible={successModal}
          onPressBtn={() => setSuccessModal(false)}
        />
      </ScrollView>
    </View>
  )
}

export default CreatePoll
