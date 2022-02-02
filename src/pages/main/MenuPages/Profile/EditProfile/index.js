import React, {useRef, useState} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'

import CustomButton from '../../../../../components/CustomButton'
import SimpleHeader from '../../../../../components/SimpleHeader'
import palette from '../../../../../theme/palette'
import Favorites from './Favorites'
import HorizontalSeparator from '../../../../../components/HorizontalSeparator'
import CustomInput from '../../../../../components/CustomInput'

let id = 0

function EditProfile({route}) {
  const userData = route.params
  console.log(userData)

  const [linkedin, setLinkedin] = useState(userData.linkedIn)
  const [googleScholar, setGoogleScholar] = useState(userData.googleScholar)
  const [favoriteItems, setFavoriteItems] = useState([{id: id++, value: ''}])

  const container = useRef()

  return (
    <View style={styles.screen}>
      <SimpleHeader
        backgroundColor={palette.M_3_SYS_BACKGROUND}
        title="ویرایش اطلاعات"
        titleColor={palette.M_3_SYS_ON_SURFACE}
        itemsColor={palette.M_3_SYS_ON_SURFACE}
        isCloseIcon
      />
      <ScrollView
        ref={container}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => container.current.scrollToEnd()}>
        <View style={styles.contentContainer}>
          <Favorites
            favoriteItems={favoriteItems}
            setFavoriteItems={setFavoriteItems}
            currentFavoriteItemId={id}
          />

          <HorizontalSeparator marginTop={15} />

          <CustomInput
            placeholder="ورودی"
            label=":Linkedin"
            labelColor={palette.M_3_SYS_PRIMARY}
            value={linkedin}
            onChangeText={(text) => setLinkedin(text)}
            style={styles.input}
          />

          <HorizontalSeparator marginTop={20} />

          <CustomInput
            placeholder="ورودی"
            label=":Google Scholar"
            labelColor={palette.M_3_SYS_PRIMARY}
            value={googleScholar}
            onChangeText={(text) => setGoogleScholar(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="ثبت تغییرات" size="small" />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {flex: 1, paddingHorizontal: 20},
  contentContainer: {flex: 1, justifyContent: 'flex-start'},
  input: {
    borderWidth: 1,
    borderColor: palette.M_3_SYS_OUTLINE
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15
  }
})

export default EditProfile
