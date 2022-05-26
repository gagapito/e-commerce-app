import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner: { largeText1, smallText, midText, product, buttonText, desc, image } }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='text-container'>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image)} alt='shoes' className='hero-banner-image' />
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner