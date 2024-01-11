import { useState } from "react";
import bajaj from "../data/honda/bajajData";

const BajajBikeCard = () => {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)


    const handleNext = () => {
        if (index < bajaj.length - 1)
            setIndex(index + 1)
    }

    const handlePrevious = () => {
        if (index > 0)
            setIndex(index - 1)
    }

    let abc = bajaj[index]
    return (
        <>
            <div className="">
                {!showMore && <div> <div className=" d-flex justify-content-center ">
                    <div className="card h-80 w-25 mt-4" >
                        <img className="card-img-top  " src={abc.imageUrl} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{abc.brand} {abc.model}</h4>
                            <p className="card-text"> &#8377; {abc.price} </p>
                            <button className='btn text-light' style={{ backgroundColor: '#240a5e' }} onClick={() => setShowMore(true)}>See details</button>
                        </div>
                    </div>
                </div>
                    <button className='btn text-light me-3 mt-3' style={{ backgroundColor: '#240a5e' }} onClick={handlePrevious}>Previous bikes</button>
                    <button className='btn text-light  mt-3' style={{ backgroundColor: '#240a5e' }} onClick={handleNext}>Next bikes</button>
                </div>}

                {showMore &&
                    <div className='container  bg-gradient p-5 mt-5 rounded-3' style={{ backgroundColor: 'gainsboro' }}>
                        <h3 className='text-start'>Specification of {abc.brand} {abc.model} :</h3>
                        <table className=' table  text-start   mt-4  '  >
                            <tr className='table-row'>
                                <th>Top speed:</th>
                                <td>{abc.specification.topSpeed}</td>
                            </tr>
                            <tr>
                                <th>Range:</th>
                                <td>{abc.specification.range}</td>
                            </tr>
                            <tr>
                                <th>Charging Time:</th>
                                <td>{abc.specification.chargingTime}</td>
                            </tr>
                            <tr>
                                <th>Motor Power:</th>
                                <td>{abc.specification.motorPower}</td>
                            </tr>

                        </table>
                        <button onClick={() => setShowMore(false)} className='btn text-light mt-4 d-flex ' style={{ backgroundColor: '#240a5e' }}>Go Back</button>
                    </div>
                }
                <div>


                </div>


            </div>
        </>
    )


}
export default BajajBikeCard;