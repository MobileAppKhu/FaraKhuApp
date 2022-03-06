import React, {useRef, useState} from 'react'
import {View, ScrollView} from 'react-native'

import CustomButton from '../../../../../components/CustomButton'
import SimpleHeader from '../../../../../components/SimpleHeader'
import Favorites from './Favorites'
import HorizontalSeparator from '../../../../../components/HorizontalSeparator'
import CustomInput from '../../../../../components/CustomInput'
import {request} from '../../../../../helpers/request'
import SuccessModal from './SuccessModal'
import {useNavigation} from '@react-navigation/native'
import {useToast} from 'react-native-toast-notifications'
import {useSelector} from 'react-redux'
import makeStyles from '../../../../../helpers/makeStyles'

function EditProfile({route}) {
  const userData = route.params
  const navigation = useNavigation()
  const toast = useToast()

  const [linkedin, setLinkedin] = useState(userData.linkedIn)
  const [googleScholar, setGoogleScholar] = useState(userData.googleScholar)
  const [favoriteItems, setFavoriteItems] = useState(
    userData.favourites.map((f) => ({id: f.favouriteId, value: f.description}))
  )
  const [successModal, setSuccessModal] = useState(false)

  const container = useRef()

  const editProfileRequest = async () => {
    const favorites = favoriteItems
      .filter((f) => f.value !== '')
      .map((f) => f.value)

    const userDataFavorites = userData.favourites.map((f) => f.description)

    const addedFavorites = favorites.filter(
      (f) => !userDataFavorites.includes(f)
    )

    const deletedFavorites = userData.favourites
      .filter((f) => !favorites.includes(f.description))
      .map((f) => f.favouriteId)

    const {status} = await request('/Account/EditProfile', 'POST', {
      firstName: userData.firstName,
      lastName: userData.lastName,
      avatarId: userData.avatarId,
      deleteAvatar: false,
      linkedIn: userData.linkedIn,
      googleScholar: userData.googleScholar,
      addFavourites: addedFavorites,
      deleteFavourites: deletedFavorites
    })

    if (status === 200) {
      setSuccessModal(true)
    } else {
      toast.show('خطایی رخ داده!')
    }
  }
  const {theme: palette} = useSelector((state) => state.authReducer)
  const styles = useStyles()
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
          <CustomButton
            title="ثبت تغییرات"
            size="small"
            onPress={() => editProfileRequest()}
          />
        </View>
      </ScrollView>
      <SuccessModal
        isVisible={successModal}
        title="تغییرات با موفقیت ثبت شد."
        onPressBtn={() => {
          setSuccessModal(false)
          navigation.navigate('landing-page')
        }}
      />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
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
}))

export default EditProfile
