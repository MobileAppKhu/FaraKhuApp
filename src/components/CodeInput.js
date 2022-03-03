import React, {useRef} from 'react'
import {View, TextInput} from 'react-native'
import makeStyles from '../helpers/makeStyles'

import theme from '../theme'

function CodeInput({code, onChange}) {
  const inp1 = useRef()
  const inp2 = useRef()
  const inp3 = useRef()
  const inp4 = useRef()
  const styles = useStyles()
  return (
    <View style={styles.root}>
      <TextInput
        ref={inp4}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={[styles.input, code[3] ? styles.inputFill : {}]}
        onChangeText={(val) => {
          if (val.length === 0) {
            inp3.current.focus()
          }
          onChange([...code.slice(0, 3), val])
        }}
      />
      <TextInput
        ref={inp3}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={[styles.input, code[2] ? styles.inputFill : {}]}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp4.current.focus()
          } else {
            inp2.current.focus()
          }
          onChange([...code.slice(0, 2), val, code[3]])
        }}
      />
      <TextInput
        ref={inp2}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={[styles.input, code[1] ? styles.inputFill : {}]}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp3.current.focus()
          } else {
            inp1.current.focus()
          }
          onChange([code[0], val, ...code.slice(2, 4)])
        }}
      />
      <TextInput
        ref={inp1}
        maxLength={1}
        placeholder=""
        keyboardType="numeric"
        style={[styles.input, code[0] ? styles.inputFill : {}]}
        onChangeText={(val) => {
          if (val.length === 1) {
            inp2.current.focus()
          }
          onChange([val, ...code.slice(1, 4)])
        }}
        autoFocus={true}
      />
    </View>
  )
}

const useStyles = makeStyles((palette) => ({
  root: {
    width: '100%',
    padding: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  input: {
    fontFamily: theme.ShabnamBold,
    borderColor: palette.M_3_SYS_OUTLINE,
    color: palette.M_3_SYS_ON_SURFACE_VARIANT,
    backgroundColor: palette.M_3_SYS_SURFACE,
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: 20,
    textAlign: 'center',
    width: 47,
    height: 47,
    overflow: 'visible'
  },
  inputFill: {
    backgroundColor: palette.M_3_SYS_SECONDARY_CONTAINER,
    borderWidth: 0
  }
}))
export default React.memo(CodeInput)
