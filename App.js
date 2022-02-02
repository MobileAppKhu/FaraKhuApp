import React from 'react'
import {Provider} from 'react-redux'
import Main from './src'
import store from './src/redux/store'
import {ToastProvider} from 'react-native-toast-notifications'

const App = () => {
  return (
    <ToastProvider animationType="zoom-in" placement="bottom" duration={3000}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ToastProvider>
  )
}

export default App
