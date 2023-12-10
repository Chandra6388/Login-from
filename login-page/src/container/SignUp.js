import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [mobile, setMobile] = useState(0)

    let navigate = useNavigate();

    const submitFun=(e)=>{
        e.preventDefault();
      
        axios.post('http://localhost:8000/user/signup',{
            name:name,
            username:userName,
            password:password,
            dob:dob,
            mobile:mobile
        })
        .then((result)=>{
            console.log(result.data)
            navigate('/login')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <>
            <div className='login-from'>
                <div className='login-child-box shadow'>
                    <div className='inside-of-child-box'>
                        <div className='heading'>
                            <h1>SignUp</h1>
                        </div>
                        <form onSubmit={submitFun}>
                            <div className='login-input-box'>
                                <input type="text" placeholder='Enter your full name' onChange={(e) => { setName(e.target.value) }} />
                                <input type="text" placeholder='Enter username' onChange={(e) => { setUserName(e.target.value) }} />
                                <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                                <input type='text' placeholder='Enter dob' onChange={(e) => { setDob(e.target.value) }} />
                                <input type="number" placeholder='mobile no' onChange={(e) => { setMobile(e.target.value) }} />

                            </div>
                           
                            <div className='login-button'>
                                <button type='submit'>SignUp</button>
                            </div>

                            <div className='not-have-account'>
                                <p>Already have account ?</p>
                                <Link to="/login">Login</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </>
    );
}

export default SignUp;
