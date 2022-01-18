import React from 'react'
import {View} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import palette from '../../../../theme/palette'
import styles from './stylesheet'
// import {Dimensions} from 'react-native'
export default function NotificationsImages() {
  return (
    <View style={styles.root}>
      <SliderBox
        // dotStyle={styles.root}
        images={[
          require('../../../../assets/images/behnia1.jpg'),
          require('../../../../assets/images/behnia2.jpg'),
          require('../../../../assets/images/behnia3.jpg')
        ]}
        sliderBoxHeight={204}
        ImageComponentStyle={styles.image}
        inactiveDotColor="#c4c4c4"
        dotColor={palette.M_3_SYS_TERTIARY}
      />
    </View>
  )
}
