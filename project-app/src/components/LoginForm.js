import { Link } from 'react-router-dom';
import './LoginForm.css'
import { useState } from "react";


function LoginForm() {
    const [form, setForm] = useState({
        name: '',
        emailId: '',
        contactNo: ''
    })

    const [submitted,setSubmitted]=useState(false)

    

    const handleNameChange = (e) => {
        setForm({ ...form, name: e.target.value })

    }
    const handleEmailIdChange = (e) => {
        setForm({ ...form, emailId: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('form submitted')
    }

    

    return (
        <>
           {!submitted && <div className="login_background d-flex align-items-center">
                <div className="container text-start  bg-transparent bg-gradient p-4 rounded " style={{backgroundColor:'GrayText',width:'50%'}}>
                    <h2 className=' text-start mb-5' style={{color:'#240a5e'}}>Login Form</h2>
                    <form action="#" onSubmit={handleSubmit} >
                        <div className="mb-3" >
                            <label className="form-label "style={{color:'#240a5e'}} >Name / User Id :</label>
                            <input className="form-control" value={form.name} onChange={handleNameChange} required />
                        </div>
                        <div className="mb-3" >
                            <label className="form-label  " style={{color:'#240a5e'}}>Password :</label>
                            <input className="form-control" type="password" value={form.emailId} onChange={handleEmailIdChange} required />
                        </div>
                        
                        <div>
                            <button className="btn mt-2 me-3" style={{backgroundColor:'#240a5e' , color:'white'}}   type="submit" >Login</button>
                            <button className='btn mt-2'style={{backgroundColor:'#240a5e' , color:'white'}} onClick={()=>setSubmitted(true)} >Next</button>
                        </div>
                    </form>
                </div>
            </div>}
            {submitted&& <div className='container  bg-gradient p-5 rounded-4 mt-5'style={{backgroundColor:'gainsboro'}}>
                        <h4 className='mb-3'>
                            Welcome back {form.name} ! Don't forget to check the newly launched bike
                        </h4>
                        <Link to='/' className='btn text-light p-2' style={{backgroundColor:'#240a5e'}} > Explore new bikes </Link>
                </div>}

            
        </>
    )
}
export default LoginForm;