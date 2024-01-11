import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [form, setForm] = useState({
        name: '',
        emailId: '',
        contactNo: '',
        password: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleNameChange = (e) => {
        setForm({ ...form, name: e.target.value })
    }

    const handleEmailIdChange = (e) => {
        setForm({ ...form, emailId: e.target.value })
    }

    const handleContactNoChange = (e) => {
        setForm({ ...form, contactNo: e.target.value })
    }

    const handlePasswordChange = (e) => {
        setForm({ ...form, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form submitted successfully')
    }

    return (
        <>
            {!submitted && <div className='signup_background d-flex align-items-center' >
                <div className='container  bg-gradient p-4 rounded' style={{ backgroundColor: 'transparent',width:'50%' }} >
                    <form action='#' className='text-start' onSubmit={handleSubmit}>
                        <h3 className='text-start mb-5' style={{color:'#240a5e'}}>Sign-Up Form</h3>
                        <div>
                            <label className='form-label' style={{color:'#240a5e'}}>Name :</label>
                            <input className='form-control' value={form.name} onChange={handleNameChange} type='' required />
                        </div>
                        <div>
                            <label className='form-label ' style={{color:'#240a5e'}}>Email :</label>
                            <input className='form-control' value={form.emailId} onChange={handleEmailIdChange} type='email' required />
                        </div>
                        <div>
                            <label className='form-label ' style={{color:'#240a5e'}}>Contact No :</label>
                            <input className='form-control' value={form.contactNo} onChange={handleContactNoChange} type='tel' pattern='[0-9]{10}' required />
                        </div>
                        <div>
                            <label className='form-label ' style={{color:'#240a5e'}}>Set password :</label>
                            <input className='form-control' value={form.password} onChange={handlePasswordChange} type='password' required />
                        </div>
                        
                        <button className='btn text-light mt-3 me-3'style={{backgroundColor:'#240a5e'}} onSubmit={handleSubmit} required >Sign-In</button>
                        <button className="btn text-light mt-3 "style={{backgroundColor:'#240a5e'}}  onClick={() => setSubmitted(true)}>Next</button>

                    </form>
                </div>
            </div>}

            {submitted && <div className='mt-5'>
                <div className='container  bg-gradient p-5 rounded-4' style={{ backgroundColor: 'linen' }}>
                <h4 className='mb-3'>Welcome to bikerzzzParadise {form.name} ! Thank you for joining our community.</h4>
                <h5 className='mb-2'>We hope you can find your dream vehicle here !</h5>
                <Link to='/' > <button className='btn text-light p-2 mt-3 ' style={{ backgroundColor: '#240a5e' }}  >Go to Home-Page</button> </Link>
                    
                </div>
            </div>}
        </>
    )
}
export default SignUp;