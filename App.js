import React from 'react'
import {Provider} from 'react-redux'
import Main from './src'
import store from './src/redux/store'
import {ToastProvider} from 'react-native-toast-notifications'
import {SafeAreaProvider} from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <ToastProvider animationType="zoom-in" placement="bottom" duration={3000}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ToastProvider>
    </SafeAreaProvider>
  )
}

export default App
