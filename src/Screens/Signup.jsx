import { useEffect, useState } from 'react'
import './CSS/Signup.css'
import { useNavigate } from 'react-router'
import { FiEye, FiEyeOff } from "react-icons/fi"

import logo from '../assets/images/rive logo 2.png'

function Signup() {

    const navigate = useNavigate();

    /* Input data */
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    /* Password triggers for DOM */
    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);


    useEffect(() => {
    },)

    return (
        <div className='Signup'>
            <div className='Signup-form-container'>
                <h1 className='Signup-rive'>rive.</h1>
                <div className='Signup-rive-underline' />
                <h2 className='Signup-form-title'>Create an account</h2>
                <p className='Signup-form-subtitle'>The easiest way to get resources, completely free to use.</p>
                <form>
                    <div className='Signup-form-input-container'>
                        <label for='name' className='Signup-form-label'>Full Name</label>
                        <div className='Signup-form-inputfield-container'>
                            <input id='name' type='text' placeholder='John Doe' className='Signup-form-input' value={fullName} onChange={(e) => setFullName(e.currentTarget.value)} />
                        </div>
                    </div>
                    <div className='Signup-form-input-container'>
                        <label for='email' className='Signup-form-label'>Email</label>
                        <div className='Signup-form-inputfield-container'>
                            <input id='email' type='email' placeholder='johndoe@example.com' className='Signup-form-input' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                        </div>
                        {(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) && email.length > 0) && <span className='Signup-error-text'>Please enter a valid email.</span>}
                    </div>
                    <div className='Signup-form-input-container'>
                        <label for='password' className='Signup-form-label'>Password</label>
                        <div className='Signup-form-inputfield-container'>
                            <input id='password' type={seePassword ? 'text' : 'password'} placeholder='∙∙∙∙∙∙∙∙∙∙∙∙∙' className='Signup-form-input' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                            {seePassword ? <FiEye className='seePassword-icon' onClick={() => setSeePassword(!seePassword)} /> : <FiEyeOff className='seePassword-icon' onClick={() => setSeePassword(!seePassword)} />}
                        </div>
                    </div>
                    <div className='Signup-form-input-container'>
                        <label for='password' className='Signup-form-label'>Confirm Password</label>
                        <div className='Signup-form-inputfield-container'>
                            <input id='password' type={seeConfirmPassword ? 'text' : 'password'} placeholder='∙∙∙∙∙∙∙∙∙∙∙∙∙' className='Signup-form-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
                            {seeConfirmPassword ? <FiEye className='seePassword-icon' onClick={() => setSeeConfirmPassword(!seeConfirmPassword)} /> : <FiEyeOff className='seePassword-icon' onClick={() => setSeeConfirmPassword(!seeConfirmPassword)} />}
                        </div>
                        {(!(password == confirmPassword) && password.length > 0) && <span className='Signup-error-text'>Password doesn't match.</span>}
                    </div>

                    <button className='Signup-form-submit'>Sign up</button>
                    <span className='Signup-form-signin'>Have an account? <a className='Signup-form-signin-highlighted' onClick={() => navigate('/login')}>Sign in</a></span>
                </form>
            </div >
            <img src={logo} className='Signup-image' />

        </div >
    )
}

export default Signup;
