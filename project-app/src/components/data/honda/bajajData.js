import chetak from './image/chetak.jpg'
import chetakPremium from './image/bcp.jpg'
import chetakUrbane from './image/bcu.jpg'

const bajaj=[
    {
        id:1,
        brand:'Bajaj',
        model:'Chetak ',
        price:'1.15-1.44 lakh ',
        specification:{
            range:'127 km/charge',
            topSpeed:'73 km/hr',
            chargingTime:'3.15 Hours',
            motorPower:'4200 W'
        },
        imageUrl:chetak
    },
    {
        id:2,
        brand:'Bajaj',
        model:'Chetak Premium',
        price:'1.35-1.40 lakh ',
        specification:{
            range:'127 km/charge',
            topSpeed:'73 km/hr',
            chargingTime:'4.30 Hours',
            motorPower:'3200 W'
        },
        imageUrl:chetakPremium
    },
    {
        id:3,
        brand:'Bajaj',
        model:'Chetak Urbane ',
        price:'1.15-1.44 lakh ',
        specification:{
            range:'113 km/charge',
            topSpeed:'73 km/hr',
            chargingTime:'4.5 Hours',
            motorPower:'2900 W'
        },
        imageUrl:chetakUrbane
    },
]
export default bajaj;