import { Link, Outlet } from 'react-router-dom'
import './CardLogo.css'
import React from 'react'
import BajajLogo from './BajajLogo'
import { HeroLogo } from './HeroLogo'
import { HondaLogo } from './HondaLogo'
import { SuzukiLogo } from './SuzukiLogo'
import { TvsLogo } from './TvsLogo'
import { YamahaLogo } from './YamahaLogo'
import { RoyalEnfieldLogo } from './RoyalEnfieldLogo'
import { KtmLogo } from './KtmLogo'
import { JawaLogo } from './JawaLogo'
import { KawasakiLogo } from './KawasakiLogo'
import { BenelliLogo } from './BenelliLogo'
import { IndianMotorCycle } from './IndianMotorCycle'

const Bikes = () => {



    return (
        <div>


            <div className='container' >
                <h2 style={{ marginLeft: '90px', marginTop: '20px',fontWeight:'bold',color:'#240a5e' }}>Find your favourite bikes by brand:</h2>
                <div style={{height:'80vh'}}>
                <div  className=' all-logo'>
                    <Link to='bajajbike'><BajajLogo /></Link>
                    <Link to="herobike" ><HeroLogo /></Link>
                    <Link to="hondabike"> <HondaLogo /></Link>
                    <Link to="suzukibike"><SuzukiLogo /></Link>
                    <Link to="tvsbike"> <TvsLogo /></Link>
                    <Link to="yamahabike"><YamahaLogo /></Link>
                    <Link to="royalbike"><RoyalEnfieldLogo /></Link>
                    <Link to="ktmbike"><KtmLogo /></Link>
                    <Link to="indianbike"> <IndianMotorCycle /></Link>
                    <Link to="jawabike"><JawaLogo /></Link>
                    <Link to="kawasakibike"><KawasakiLogo /></Link>
                    <Link to="benellibike"><BenelliLogo /></Link>
                </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Bikes