import React, { useState } from 'react'
import honda from '../data/honda/hondaData';




function HeroBikeCard() {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)


    const handleNext = () => {
        if (index < honda.length - 1)
            setIndex(index + 1)
    }

    const handlePrevious = () => {
        if (index > 0)
            setIndex(index - 1)
    }

    let hero = honda[index]
    return (
        <>
            <div className="">
                {!showMore && <div> <div className=" d-flex justify-content-center ">
                    <div className="card h-80 w-25 mt-4" >
                        <img className="card-img-top  " src={hero.imageUrl} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{hero.brand}{hero.model}</h4>
                            <p className="card-text"> &#8377; {hero.price} </p>
                            <button className='btn text-light' style={{ backgroundColor: '#240a5e' }} onClick={() => setShowMore(true)}>See details</button>
                        </div>
                    </div>
                    </div>
                    <button className='btn text-light me-3 mt-3' style={{ backgroundColor: '#240a5e' }} onClick={handlePrevious}>Previous bikes</button>
                    <button className='btn text-light  mt-3' style={{ backgroundColor: '#240a5e' }} onClick={handleNext}>Next bikes</button>
                </div>}

                {showMore &&
                    <div className='container  bg-gradient p-5 mt-5 rounded-3' style={{backgroundColor:'gainsboro'}}>
                        <h3 className='text-start'>Specification of {hero.brand}{hero.model} :</h3>
                        <table className=' table  text-start   mt-4  '  >
                            <tr className='table-row'>
                                <th>Top speed:</th>
                                <td>{hero.specification.topSpeed}</td>
                            </tr>
                            <tr>
                                <th>Range:</th>
                                <td>{hero.specification.range}</td>
                            </tr>
                            <tr>
                                <th>Battery warranty:</th>
                                <td>{hero.specification.batteryWarranty}</td>
                            </tr>
                            <tr>
                                <th>Motor Power:</th>
                                <td>{hero.specification.motorPower}</td>
                            </tr>

                        </table>
                        <button onClick={() => setShowMore(false)} className='btn text-light mt-4 d-flex ' style={{ backgroundColor: '#240a5e' }}>Go Back</button>
                    </div>
                }
                


            </div>
        </>
    )
}
export default HeroBikeCard;