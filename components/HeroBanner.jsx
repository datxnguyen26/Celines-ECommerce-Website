import React from 'react'
import Link from 'next/link'
import { urlFor } from '../client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container" style={{backgroundImage: `url("/background.png")`}}>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
        <div>
          <Link href={`/product/${heroBanner.product}`} >
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          
        </div>


    </div>
  )
}

export default HeroBanner