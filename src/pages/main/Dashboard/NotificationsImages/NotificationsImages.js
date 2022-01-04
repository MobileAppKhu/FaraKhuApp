import React from 'react'
import {View} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'

export default function NotificationsImages() {
  return (
    <View>
      <SliderBox
        images={[
          require('../../../../assets/images/behnia1.jpg'),
          require('../../../../assets/images/behnia2.jpg'),
          require('../../../../assets/images/behnia3.jpg')
        ]}
      />
    </View>
  )
}
