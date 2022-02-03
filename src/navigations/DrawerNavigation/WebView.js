import React from 'react'
import {WebView} from 'react-native-webview'

export default function WebViewPage({route}) {
  const {uri} = route.params
  return <WebView source={{uri}} />
}
