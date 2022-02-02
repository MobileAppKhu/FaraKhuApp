export function addCommaToPriceUnsigned(price) {
  if (price === 0) {
    return price
  }
  if (!price) {
    return ''
  }
  const splittedPrice = price.toString().split('.')
  if (splittedPrice[0].toString().length > 3) {
    const formattedPrice = splittedPrice[0]
      .toString()
      .split('')
      .reverse()
      .join('')
      .replace(/.{3}/g, '$&,')
      .split('')
      .reverse()
      .join('')
    if (formattedPrice.toString().charAt(0) === ',') {
      return `${formattedPrice.substr(1)}${
        splittedPrice[1] ? `.${splittedPrice[1]}` : ''
      }`
    }
    return `${formattedPrice}${splittedPrice[1] ? `.${splittedPrice[1]}` : ''}`
  }
  return price
}

export function addCommaToPrice(price) {
  if (price && price.toString().length > 0 && price.toString()[0] === '-') {
    return `${localStorage.lang === 'fa' ? '' : '-'}${addCommaToPriceUnsigned(
      price.toString().substr(1)
    )}${localStorage.lang === 'fa' ? '-' : ''}`
  }
  return addCommaToPriceUnsigned(price)
}

// this function gets an string as input and returns true if the string is a valid number
export function isValidNumber(numberStr) {
  return /^\d+$/.test(numberStr)
}

export function convertPersianNumbersToEnglishNumbers(num) {
  return num.replace(/[0-9]/g, (chr) => {
    const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return persian[parseInt(chr)]
  })
}
