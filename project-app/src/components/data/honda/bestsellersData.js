import classic from './image/classic350.jpg'
import hunter from './image/hunter.jpg'
import ns200 from './image/ns200.jpg'
import raider from './image/raider.jpg'
import glamour from './image/glamour.jpg'
import cb300f from './image/cb300f.jpg'
import mt15 from './image/mt15.jpg'
const bestsellers=[
    {
        id:1,
        brand:'Royal Enfield',
        model:'Classic 350 ',
        price:'1,93,080 lakh ',
        specification:{
            enginecc:'349.34 km/charge',
            mileage:'41.55 kmpl',
            power:'20.21 PS',
            kerbWeight:'195 kg'
        },
        imageUrl:classic
    },
    {
        id:2,
        brand:'Royal Enfield',
        model:'Hunter 350 ',
        price:'1.50-1.75 lakh ',
        specification:{
            enginecc:'349.34 km/charge',
            mileage:'36.2 kmpl',
            power:'20.4 PS',
            kerbWeight:'181 kg'
        },
        imageUrl:hunter
    },
    {
        id:3,
        brand:'Bajaj ',
        model:'Pulsar NS200 ',
        price:'1.49 lakh ',
        specification:{
            enginecc:'199 km/charge',
            mileage:'40.36 kmpl',
            power:'24.5 PS',
            kerbWeight:'158 kg'
        },
        imageUrl:ns200
    },
    {
        id:4,
        brand:'TVS ',
        model:'Raider ',
        price:'95,219-1.03 lakh ',
        specification:{
            enginecc:'124.8 km/charge',
            mileage:'67 kmpl',
            power:'11.38 PS',
            kerbWeight:'123 kg'
        },
        imageUrl:raider
    },
    {
        id:5,
        brand:'Hero ',
        model:'Glamour XTEC ',
        price:'87,748-92,348 lakh ',
        specification:{
            enginecc:'124.7 km/charge',
            mileage:'60 kmpl',
            power:'10.84 PS',
            kerbWeight:'123 kg'
        },
        imageUrl:glamour
    },
    {
        id:6,
        brand:'Honda ',
        model:'CB300F ',
        price:'1.70 lakh ',
        specification:{
            enginecc:'293.52 km/charge',
            mileage:'60 kmpl',
            power:'24.4 PS',
            kerbWeight:'153 kg'
        },
        imageUrl:cb300f
    },
    {
        id:7,
        brand:'Yamaha',
        model:'MT 15 ',
        price:'1.67-1.73 lakh ',
        specification:{
            enginecc:'155 km/charge',
            mileage:'60 kmpl',
            power:'18.4 PS',
            kerbWeight:'139 kg'
        },
        imageUrl: mt15
    },
]
export default bestsellers;