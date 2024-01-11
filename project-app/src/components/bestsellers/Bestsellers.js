import { useState } from "react"
import bestsellers from "../data/honda/bestsellersData"
const Bestsellers=()=>{
    

        const [index, setIndex] = useState(0)
        const [showMore, setShowMore] = useState(false)
    
    
        const handleNext = () => {
            if (index < bestsellers.length - 1)
                setIndex(index + 1)
        }
    
        const handlePrevious = () => {
            if (index > 0)
                setIndex(index - 1)
        }
    
        let abc = bestsellers[index]
        return (
            <>
                <div className="">
                    
                    {!showMore && <div> 
                        <h3 className="mt-5" style={{color:'#240a5e'}}>Check Some Of The Bestsellers Here :</h3>
                        <div className=" d-flex justify-content-center ">
                    
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
                                    <th>Engine cc:</th>
                                    <td>{abc.specification.enginecc}</td>
                                </tr>
                                <tr>
                                    <th>Kerb Weight:</th>
                                    <td>{abc.specification.kerbWeight}</td>
                                </tr>
                                <tr>
                                    <th>Mileage:</th>
                                    <td>{abc.specification.mileage}</td>
                                </tr>
                                <tr>
                                    <th>Motor Power:</th>
                                    <td>{abc.specification.power}</td>
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

export default Bestsellers;