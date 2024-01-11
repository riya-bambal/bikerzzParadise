import React from 'react'
import hero from './image/hero.jpg'

export const HeroLogo = () => {
    return (
        <div>
            <div className="mb-3" >
                <div className="box">
                    <img className="img-logo" src={hero} alt="" />

                </div>



            </div>
        </div>
    )
}