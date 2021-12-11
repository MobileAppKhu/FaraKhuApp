import React, {useRef} from 'react'
import {View, StyleSheet, TextInput, I18nManager} from 'react-native'

import theme from '../theme'
import palette from '../theme/palette'

function CodeInput({code, onChange}) {
  const inp1 = useRef()
  const inp2 = useRef()
  const inp3 = useRef()
  const inp4 = useRef()

  return (
    <View style={styles.root}>
      <TextInput
        ref={inp4}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(val) => {
          onChange([...code.slice(0, 3), val])
        }}
      />
      <TextInput
        ref={inp3}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp4.current.focus()
          }
          onChange([...code.slice(0, 2), val, code[3]])
        }}
      />
      <TextInput
        ref={inp2}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp3.current.focus()
          }
          onChange([code[0], val, ...code.slice(2, 4)])
        }}
      />
      <TextInput
        ref={inp1}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp2.current.focus()
          }
          onChange([val, ...code.slice(1, 4)])
        }}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontFamily: theme.VazirBold,
    borderColor: palette.authInput.border,
    color: palette.balticSea,
    backgroundColor: palette.authInput.background,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 40,
    textAlign: 'center',
    paddingRight: 12,
    paddingLeft: 12,
    marginRight: 10,
    marginLeft: 10,
    overflow: 'visible'
  }
})

export default React.memo(CodeInput)
