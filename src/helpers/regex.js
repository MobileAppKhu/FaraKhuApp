export const isEmailValid = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,30}$/i.test(email)
}

export const isPhoneNumberValid = (phoneNumber) => {
  return /^[0-9]{8,12}/.test(phoneNumber)
}

export const sanitizePhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/^0+/, '')
}
