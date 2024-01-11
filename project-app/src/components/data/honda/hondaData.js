import optima_cx from './image/optima_cx.jpg'
import hero_optima from './image/hero_optima.jpg'
import photon from './image/photon.jpg'
import atria from './image/atria1.jpg'
import flash from './image/flash.jpg'
const honda=[
    {
        id:1,
        brand:'Hero',
        model:'Electric Optima',
        price:'1.07-1.30 lakh',
        specification:{
            range:'135 km/charge',
            topSpeed:'55 km/hr',
            batteryWarranty:'4 years',
            motorPower:'1200 W'
        },
        imageUrl: hero_optima
    },
    {
        id:2,
        brand:'Hero',
        model:'Optima CX 5.0',
        price:'1.20-1.30 lakh',
        specification:{
            range:'135 km/charge',
            topSpeed:'55 km/hr',
            batteryWarranty:'4 years',
            motorPower:'3000 W'
        },
        imageUrl:optima_cx
    },
    {
        id:3,
        brand:'Hero',
        model:'Electric Photon LP',
        price:'1.10-1.15 lakh',
        specification:{
            range:'90 km/charge',
            topSpeed:'45 km/hr',
            batteryWarranty:'4 years',
            motorPower:'1800 W'
        },
        imageUrl:photon
    },
    {
        id:4,
        brand:'Hero',
        model:'Electric Atria LX',
        price:'77,690.00 ',
        specification:{
            range:'85 km/charge',
            topSpeed:'25 km/hr',
            batteryWarranty:'4 years',
            motorPower:'250 W'
        },
        imageUrl:atria
    },
    {
        id:5,
        brand:'Hero',
        model:'Electric Flash LX',
        price:'59,640.00 ',
        specification:{
            range:'85 km/charge',
            topSpeed:'25 km/hr',
            batteryWarranty:'4 years',
            motorPower:'250 W'
        },
        imageUrl:flash
    }
]
export default honda;

