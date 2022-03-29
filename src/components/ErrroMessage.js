import React from 'react'
import {useSelector} from 'react-redux'

import Typography from './Typography'

const ErrorMessage = ({error, visible}) => {
  const {theme: palette} = useSelector((state) => state.authReducer)

  if (!error || !visible) return null
  return (
    <Typography
      color={palette.M_3_SOURCE_ERROR}
      style={{fontSize: 14, marginTop: 10}}>
      {error}
    </Typography>
  )
}

export default ErrorMessage
