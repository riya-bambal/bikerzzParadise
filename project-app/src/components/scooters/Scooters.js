import { Link, Outlet } from 'react-router-dom'
import './CardLogo.css'
import React from 'react'
import { OlaLogo } from './OlaLogo'
import { HondaLogo } from '../Bikes/HondaLogo'
import { HeroLogo } from './HeroLogo'
import YamahaLogo from './YamahaLogo'
import { TvsLogo } from './TvsLogo'
const Scooters=()=>{
    return(
        <>
            <div className='container' >
                <h2 style={{ marginLeft: 'px', marginTop: '20px',fontWeight:'bold',color:'#240a5e' }}>Find your favourite scooters by brand:</h2>
                <div style={{height:'80vh',width:'50%',marginLeft: '320px'}}>
                <div  className=' all-logo'>
                <Link to="yamahascooter"><YamahaLogo /></Link>
                <Link to="heroscooter" ><HeroLogo /></Link>
                <Link to="hondascooter"> <HondaLogo /></Link>
                <Link to="tvsscooter"> <TvsLogo/></Link>
                <Link to='olascooter'><OlaLogo /></Link>
                   
                   
                </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Scooters;