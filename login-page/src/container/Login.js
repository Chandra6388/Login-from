import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [notHaveAccount, setNotHaveAccount] = useState('');

    let navigate = useNavigate();

    const submitFun = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/user/login', {
            username: userName,
            password: password,
        })
            .then((result) => {
                localStorage.setItem('token',result.data.token);
                navigate('/dashbord');
            })
            .catch((error) => {
                // navigate('/signup')
                setNotHaveAccount(error.response.data.msg+'  if not have account pls signUp first') 
                setTimeout(()=>{
                    navigate('/signup')
                },1000)
            })
    }
    return (
        <>
        
            <div className='login-from'>
         
                <div className='login-child-box shadow'>
                    <div className='inside-of-child-box'>
                   
                        <div className='heading'>
                        <p style={{color:'red'}}>{notHaveAccount}</p>
                            <h1>Login</h1>
                        </div>
                        <form onSubmit={submitFun}>
                            <div className='login-input-box'>
                                <input type="text" placeholder='Enter username' onChange={(e) => { setUserName(e.target.value) }} />
                                <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className='forgot-password'>
                                <div className='remember-password'>
                                    <input type="checkbox" />
                                    <p>Remenber me</p>
                                </div>
                                <a href="/#">forgot password</a>
                            </div>
                            <div className='login-button'>
                                <button type='submit'>Login</button>
                            </div>

                            <div className='not-have-account'>
                                <p>Do't have account ?</p>
                                <Link to="/signup">SignUp</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;
