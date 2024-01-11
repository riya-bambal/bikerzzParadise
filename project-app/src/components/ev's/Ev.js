import './Ev.css'
import { Link, Outlet } from 'react-router-dom'
import OlaLogo from './OlaLogo';
import HondaLogo from './HondaLogo';
import AtherEnergyLogo from './AtherEnergyLogo';
import BajajLogo from './BajajLogo';
import TvsLogo from './TvsLogo';
import ElectricBikeLogo from './ElectricBikeLogo';




const Ev = () => {
    return (
        <>
            <div className='' >
                <div className='container' >
                <h2 style={{ marginLeft: '', marginTop: '20px',fontWeight:'bold',color:'#240a5e' }}>Find your favourite electrical vehicles here :</h2>
                <div className='' style={{height:'80vh',width:'50%',marginLeft: '310px'}}>
                <div  className=' all-logo'>
                    <Link to='honda'> <HondaLogo/> </Link>
                    <Link to="ola" > <OlaLogo/> </Link>
                    <Link to="atherenergy"> <AtherEnergyLogo/> </Link>
                    <Link to="bajaj"> <BajajLogo/> </Link>
                    <Link to="tvs"> <TvsLogo/> </Link>
                    <Link to="elecbike"> <ElectricBikeLogo/> </Link>
                    
                </div>
                </div>
            </div>
            <Outlet />

                
                
               




            </div>










        </>
    )
}
export default Ev;