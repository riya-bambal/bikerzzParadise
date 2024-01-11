import dio from './image/dio.jpg'
import grazia from './image/grazia.jpg'
import activa from './image/activa.jpg'
import adv from './image/adv.jpg'
const hondas=[
    {
        id: 1,
        model: "Honda Dio",
        price: "78,000",
        specification: {
            engine: "125 cc",
            power: "7.76 PS @ 8000 rpm",
            torque: '9 Nm @ 4750 rpm',
            mileage: '60 Kmpl',
            kerbWeight: '122.00 Kg',
            fuel: '5.3 Ltr',


        },
        image: dio


    },


    {
        id: 2,
        model: "Honda Grazia ",
        price: "82,402",
        specification: {

            engine: "124.9 cc",
            power: "8.14 bhp",
            torque: '10.3 Nm @ 5000 rpm',
            mileage: '45.5 kmpl',
            kerbWeight: '142.00 Kg',
            fuel: '5.5Ltr',


        },
        image: grazia

        


    },


    {
        id: 3,
        model: "Honda Activa 6G",
        price: "60,950",
        specification: {

            engine: "110.4 cc",
            power: "11.8 PS",
            torque: '10.8 Nm',
            mileage: '51.46 kmpl',
            kerbWeight: '142 Kg',
            fuel: '5. Ltr',
        },
        image: activa
         


    },



    {
        id: 4,
        model: "Honda ADV160",
        price: "85,536",
        specification: {

            engine: "149cc",
            power: "14 BHP @ 8500 rpmS",
            torque: ' 9.4 lb-ft',
            mileage: '64.75 kmpl',
            kerbWeight: '139 Kg',
            fuel: '9 Ltr',
        },
        image: adv
        


    },


    
]
export default hondas