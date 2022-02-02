import React from 'react'

import BookShopCreate from '../BookShopCreate/BookShopCreate'

export default function BookShopEdit({route}) {
  console.log(route.params)
  const {offerId, description, price, type, title} = route.params
  return (
    <BookShopCreate
      title={title}
      desc={description}
      image={null}
      offerId={offerId}
      price={price}
      type={type}
      editScreen={true}
    />
  )
}
