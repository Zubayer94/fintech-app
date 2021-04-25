import React from 'react'
import banner from '../../assets/img/banner.png'

export default function Banner() {
    return (
        <div className="banner-container">
            <img className="banner-img" src={banner} alt="banner image"/>
        </div>
    )
}
