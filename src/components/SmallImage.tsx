import Link from 'next/link'
import React from 'react'

export default function SmallImage(image) {
  const url = image.hdurl ? image.url : '/nasa-logo.svg'
  return (
    <li key={image.title}>
      <h1>{image.title}</h1>
      <Link href={`details/${image.date}`}>
        <a>
          <img src={url} alt="Imagem ilustrativa fornecida pela nasa" />
        </a>
      </Link>
    </li>
  )
}
