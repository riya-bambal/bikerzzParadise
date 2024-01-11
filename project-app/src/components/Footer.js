import React from 'react'
import phone from './images/phone.jpg'
import mail from './images/mail.jpg'
import insta from './images/insta.jpg'
import fb from './images/facebook.jpg'
import linkedin from './images/linkedin.jpg'
import location from './images/location.jpg'


const Footer = () => {
    return (
        <div>
            <div className='container d-flex w-50 '  style={{width: '50%',marginTop:'118px',marginLeft:'100px' }} >
                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={phone} alt="" />
                    <p className='mt-3  '>+919999999999</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={mail} alt="" />
                    <p className='mt-3'>abcd@gmail.com</p>
                </div>

                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={insta} alt="" />
                    <p className='mt-3'>abc_insta</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={fb} alt="" />
                    <p className='mt-3'>abc_fb</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={linkedin} alt="" />
                    <p className='mt-3'>LinkedIn</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <img className='m-3 rounded-3' style={{ height: '30px', width: '30px' }} src={location}alt="" />
                    <p className='mt-3'>Pune,Maharashtra.</p>
                </div>



            </div>
        </div>
    )
}

export default Footer;