import React from 'react'

import BookShopCreate from '../BookShopCreate/BookShopCreate'

export default function BookShopEdit({
  image = null,
  title = '',
  type = '',
  price = '',
  desc = ''
}) {
  return (
    <BookShopCreate
      title={title}
      desc={desc}
      image={image}
      price={price}
      type={type}
      editScreen={true}
    />
  )
}
