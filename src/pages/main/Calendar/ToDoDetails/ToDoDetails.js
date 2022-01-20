import React, {useState} from 'react'
import {View, ScrollView} from 'react-native'
import CheckBox from '@react-native-community/checkbox'

import HorizontalSeparator from '../../../../components/HorizontalSeparator'
import SimpleHeader from '../../../../components/SimpleHeader'
import Typography from '../../../../components/Typography'
import palette from '../../../../theme/palette'
import styles from './stylessheet'

function ToDoDetails({
  date = '2 بهمن - 08:00، 37 روز مانده',
  overdue,
  title = 'امتحان پایان ترم هوش مصنوعی(شفاهی)-4نمره',
  category = 'هوش مصنوعی و سیستم های خبره',
  description = 'پاسخ پروژه مربوط به حل تمرین DFS در گوگل درایو قرار داده شده. لینک گیت هاب و گوگل کولب هم اینجا هست.'
}) {
  const [done, setDone] = useState(false)

  return (
    <View style={styles.container}>
      <SimpleHeader title="تقویم شخصی" headerRightIcon="more_vert_24px" />

      <ScrollView style={styles.container}>
        <View style={styles.date}>
          <CheckBox
            value={done}
            onValueChange={(value) => setDone(value)}
            tintColors={{true: palette.M_3_SYS_PRIMARY}}
          />
          <Typography variant="medium12" style={overdue && styles.error}>
            {date}
          </Typography>
        </View>

        <HorizontalSeparator style={styles.separator} />

        <View style={styles.title}>
          <Typography variant="bold18">{title}</Typography>
        </View>

        <HorizontalSeparator style={styles.separator} />

        <View style={styles.description}>
          <Typography variant="body2">
            {description !== '' ? description : 'توضیحات'}
          </Typography>
        </View>

        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Typography variant="regular10" color={palette.M_3_SYS_BACKGROUND}>
              {category}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ToDoDetails
