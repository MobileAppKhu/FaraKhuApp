import React from 'react'
import {Pressable, StyleSheet} from 'react-native'

import CustomIcon from '../../../../../../../components/CustomIcon'
import Typography from '../../../../../../../components/Typography'
import HorizontalSeparator from '../../../../../../../components/HorizontalSeparator'
import palette from '../../../../../../../theme/palette'

const MenuItem = ({title, color, icon, onPress, separator}) => (
  <>
    <Pressable
      onPress={onPress}
      android_ripple={{color: palette.M_3_REF_NEUTRAL_NEUTRAL_80}}
      style={styles.container}>
      <Typography variant="body2" color={color} style={styles.title}>
        {title}
      </Typography>
      <CustomIcon name={icon} size={24} color={color} />
    </Pressable>
    {separator && (
      <HorizontalSeparator
        width="85%"
        style={{alignSelf: 'center'}}
        color={palette.M_3_SYS_OUTLINE}
      />
    )}
  </>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 25
  },
  title: {
    marginRight: 12
  }
})

export default MenuItem
