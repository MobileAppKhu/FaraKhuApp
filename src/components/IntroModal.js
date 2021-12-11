import React, {useState, useEffect} from 'react'
import {View, Pressable, StyleSheet, Image} from 'react-native'
import Modal from 'react-native-modal'

import introImage1 from '../assets/images/intro1.png'
import introImage2 from '../assets/images/intro2.png'
import introImage3 from '../assets/images/intro3.png'
import palette from '../theme/palette'
import CustomIcon from './CustomIcon'
import IntroButton from './IntroButton'
import Typography from './Typography'

function Intro1({setIntroActive}) {
  return (
    <View style={styles.root}>
      <View style={styles.contentView}>
        <Typography variant="h2" style={styles.mainTitle}>
          به گندم خوش آمدید
        </Typography>
        <Typography variant="body1" style={styles.description}>
          در گندم بیشتر از آنچه که از یک شبکه اجتماعی می خواهید، در انتظار
          شماست! با عضویت و ایجاد حساب کاربری می توانید از خدمات بیشتری بهره مند
          شوید.
        </Typography>
        <IntroButton onPress={() => setIntroActive(1)} title="متوجه شدم" />
        <Image source={introImage1} style={styles.introImage1} />
      </View>
      <View style={styles.iconView}>
        <Pressable style={styles.CenterIconView}>
          <CustomIcon style={styles.centerIcon} name="Profile" size={36} />
        </Pressable>
      </View>
    </View>
  )
}
function Intro2({setIntroActive}) {
  return (
    <View style={styles.root}>
      <View style={styles.contentView2}>
        <Typography variant="body1" style={styles.description}>
          اینجا صفحه کاوشگر گندم هست که به کمک این صفحه می تونید ترند ها و پست
          های پربازدید اپلیکیشن رو ببینید، برای دسترسی به امکانات هر پست و صفحات
          باید ابتدا عضو شوید.
        </Typography>
        <IntroButton onPress={() => setIntroActive(2)} title="متوجه شدم" />
        <Image source={introImage2} style={styles.introImage2} />
      </View>
      <View style={styles.rootBottomTab}>
        <View style={styles.iconViewIntro2}>
          <Pressable style={styles.activeIcon}>
            <CustomIcon name="Discovery" size={32} />
          </Pressable>
        </View>
        <View style={styles.iconViewIntro2} />
        <View style={styles.iconViewIntro2} />
      </View>
    </View>
  )
}
function Intro3({setIntroActive}) {
  return (
    <View style={styles.root}>
      <View style={styles.contentView3}>
        <Typography variant="body1" style={styles.description}>
          به کمک بخش راهنما می توانید بیشتر با گندم آشنا شوید
        </Typography>
        <IntroButton onPress={() => setIntroActive(-1)} title="متوجه شدم" />
        <Image source={introImage3} style={styles.introImage3} />
      </View>
      <View style={styles.rootBottomTab}>
        <View style={styles.iconViewIntro2} />
        <View style={styles.iconViewIntro2} />
        <View style={styles.iconViewIntro2}>
          <Pressable style={styles.activeIcon}>
            <CustomIcon name="Info-Circle" size={32} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default function IntroModal() {
  const [introActive, setIntroActive] = useState(-1)
  useEffect(() => {
    var timeout = setTimeout(() => {
      setIntroActive(0)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={0}
      animationOutTiming={0}
      isVisible={introActive !== -1}>
      {introActive === 0 ? (
        <Intro1 setIntroActive={setIntroActive} />
      ) : introActive === 1 ? (
        <Intro2 setIntroActive={setIntroActive} />
      ) : (
        <Intro3 setIntroActive={setIntroActive} />
      )}
    </Modal>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center'
  },
  rootBottomTab: {
    height: 60,
    position: 'absolute',
    bottom: 27,
    width: '90%',
    flexDirection: 'row'
  },
  activeIcon: {
    backgroundColor: palette.white,
    padding: 5,
    borderRadius: 100
  },
  iconViewIntro2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36
  },
  CenterIconView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: palette.geustTab.centerBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    shadowColor: '#4d7474',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.6,
    shadowRadius: 2.22,
    elevation: 1,
    flexDirection: 'row'
  },
  centerIcon: {
    color: palette.geustTab.centerIcon
  },
  mainTitle: {
    color: palette.primary.main
  },
  description: {
    color: palette.white,
    textAlign: 'center',
    marginTop: 15
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 170
  },
  contentView2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 130
  },
  contentView3: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 100
  },
  introImage1: {
    height: '70%',
    width: '80%',
    resizeMode: 'stretch'
  },
  introImage2: {
    height: '50%',
    width: '80%',
    resizeMode: 'stretch'
  },
  introImage3: {
    height: '50%',
    width: '100%',
    resizeMode: 'stretch'
  }
})
