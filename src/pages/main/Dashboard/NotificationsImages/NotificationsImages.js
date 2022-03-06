import React from 'react'
import {View} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import useStyles from './stylesheet'
import {useSelector} from "react-redux";
export default function NotificationsImages() {
    // eslint-disable-next-line no-undef
    const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
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
