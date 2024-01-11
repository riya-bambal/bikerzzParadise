import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BikeNavBar from './BikeNavBar';
import Home from '../components/Home';
import Scooters from '../components/scooters/Scooters';
import Ev from '../components/ev\'s/Ev';
import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';
import PageNotFound from '../components/PageNotFound';
import Bestsellers from '../components/bestsellers/Bestsellers';
import Bikes from '../components/Bikes/Bikes';
import HeroBikeCard from '../components/ev\'s/HeroBikeCard';
import BajajBikeCard from '../components/ev\'s/BajajBikeCard';
import OlaBikeCard from '../components/ev\'s/OlaBikeCard';
import AtherBikeCard from '../components/ev\'s/AtherBikeCard';
import ElectricBikeCard from '../components/ev\'s/ElectricBikeCard';
import TvsBikeCard from '../components/ev\'s/TvsBikeCard';
import BajajGallary from '../components/Bikes/BajajGallery';
import HeroGallery from '../components/Bikes/HeroGallery';
import BenelliGallary from '../components/Bikes/BenelliGallery';
import HondaGallery from '../components/Bikes/HondaGallery';
import IndianGallery from '../components/Bikes/IndianGallery';
import JawaGallery from '../components/Bikes/JawaGallery';
import KawasakiGallery from '../components/Bikes/KawasakiGallery';
import KtmGallery from '../components/Bikes/KtmGallery';
import RoyalEnfieldGallery from '../components/Bikes/RoyalEnfieldGallery';
import SuzukiGallery from '../components/Bikes/SuzukiGallery';
import TvsGallery from '../components/Bikes/TvsGallery';
import YamahaGallery from '../components/Bikes/YamahaGallery';
import YamahaGalleryScooter from '../components/scooters/YamahaGalleryScooter';
import HeroGalleryScooter from '../components/scooters/HeroGalleryScooter';
import HondaGalleryScooter from '../components/scooters/HondaGalleryScooter';
import TvsGalleryScooter from '../components/scooters/TvsGalleryScooter';
import OlaGalleryScooter from '../components/scooters/OlaGalleryScooter';


const BikeRouter=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<BikeNavBar/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/bikes' >
                            <Route path='' element={<Bikes/>} />
                            <Route path='bajajbike' element={<BajajGallary/>}/>
                            <Route path='herobike' element={<HeroGallery/>}/>
                            <Route path='benellibike' element={<BenelliGallary/>}/>
                            <Route path='hondabike' element={<HondaGallery/>}/>
                            <Route path='indianbike' element={<IndianGallery/>}/>
                            <Route path='jawabike' element={<JawaGallery/>}/>
                            <Route path='kawasakibike' element={<KawasakiGallery/>}/>
                            <Route path='ktmbike' element={<KtmGallery/>}/>
                            <Route path='royalbike' element={<RoyalEnfieldGallery/>}/>
                            <Route path='suzukibike' element={<SuzukiGallery/>}/>
                            <Route path='tvsbike' element={<TvsGallery/>}/>
                            <Route path='yamahabike' element={<YamahaGallery/>}/>
                        </Route>
                        <Route path='/scooters' >
                            <Route path='' element={<Scooters/>}/>
                            <Route path='yamahascooter' element={<YamahaGalleryScooter/>}/>
                            <Route path='heroscooter' element={<HeroGalleryScooter/>}/>
                            <Route path='hondascooter' element={<HondaGalleryScooter/>}/>
                            <Route path='tvsscooter' element={<TvsGalleryScooter/>}/>
                            <Route path='olascooter' element={<OlaGalleryScooter/>}/>
                        </Route>
                        <Route path='/evs' >
                            <Route path='' element={<Ev/>}/>
                            <Route path='honda' element={<HeroBikeCard/>}/>
                            <Route path='tvs' element={<TvsBikeCard/>}/>
                            <Route path='atherenergy' element={<AtherBikeCard/>}/>
                            <Route path='bajaj' element={<BajajBikeCard/> }/>
                            <Route path='elecbike' element={<ElectricBikeCard/>}/>
                            <Route path='ola' element={<OlaBikeCard/>}/>
                        </Route>
                        <Route path='/bestsellers' element={<Bestsellers/>}/>
                        <Route path='/loginform' element={<LoginForm/>} />
                        <Route path='/signup' element={<SignUp/>}/>
                        
                        <Route path='*' element={<PageNotFound/>} />

                    </Route>
                   
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default BikeRouter;