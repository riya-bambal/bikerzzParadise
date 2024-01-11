import iqube from './image/iqube.jpg'
import std from './image/iqubestd.jpg'
import iqubes from './image/iqubes.jpg'
const tvs=[
    
    {
        id:1,
        brand:'TVS ',
        model:'iQube',
        price:'1.56-1.62 lakh',
        specification:{
            range:'145 km/charge',
            topSpeed:'82 km/hr',
            chargingTime:'4 hours 6 minute',
            motorPower:'4400 W'
        },
        imageUrl: iqube
    },
    {
        id:2,
        brand:'TVS ',
        model:'iQube Electric STD',
        price:'1.56 lakh',
        specification:{
            range:'145 km/charge',
            topSpeed:'82 km/hr',
            chargingTime:'4 hours 6 minute',
            motorPower:'4400 W'
        },
        imageUrl: std
    },
    {
        id:3,
        brand:'TVS ',
        model:'iQube Electric S',
        price:'1.62 lakh',
        specification:{
            range:'100 km/charge',
            topSpeed:'78 km/hr',
            chargingTime:'4 hours 30 minute',
            motorPower:'4400 W'
        },
        imageUrl: iqubes
    },
   
]
export default tvs;