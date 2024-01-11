import athergen3 from './image/athergen3.jpg'
import ather450s from './image/450s.jpg'
import atherapex from './image/apex2.jpg'
const ather=[
    {
        id:1,
        brand:'Ather',
        model:'450X Gen 3 ',
        price:'1,37,510 ',
        specification:{
            range:'111 km/charge',
            topSpeed:'90 km/hr',
            chargingTime:'8.36 HRS',
            motorPower:'6400 W'
        },
        imageUrl:athergen3
    },
    {
        id:2,
        brand:'Ather',
        model:'450S ',
        price:'1,29.461 ',
        specification:{
            range:'115 km/charge',
            topSpeed:'90 km/hr',
            chargingTime:'8.3 HRS',
            motorPower:'5400 W'
        },
        imageUrl:ather450s
    },
    {
        id:3,
        brand:'Ather',
        model:'450 Apex ',
        price:'1,89,000 ',
        specification:{
            range:'75 km/charge',
            topSpeed:'100 km/hr',
            chargingTime:'5.45 HRS',
            motorPower:'7000 W'
        },
        imageUrl:atherapex
    },
]
export default ather;