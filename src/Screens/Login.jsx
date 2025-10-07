import { useEffect, useState } from 'react'
import './CSS/Signup.css'
import { useNavigate } from 'react-router'
import { FiEye, FiEyeOff } from "react-icons/fi"

import logo from '../assets/images/rive logo 2.png'
import { signIn, auth } from '../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth'

function Login() {

    const navigate = useNavigate();

    /* Input data */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* Password triggers for DOM */
    const [seePassword, setSeePassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    // handle login submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg("");
        setLoading(true);

        try {
            await signIn(email, password).then((cred) => {
                if (cred) {
                    console.log('Signed in: ' + cred.user)
                    navigate('/console')
                }
            });
        } catch (err) {
            console.error(err.code, err.message);
            setErrMsg(
                err.code === "auth/invalid-credential"
                    ? "Invalid email or password."
                    : "Could not sign you in. Please try again."
            );
        } finally {
            setTimeout(() => {
                setLoading(false);
                setHasLoadedOnce(true);
            }, 1000);
        }
    };

    const invalidEmail =
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && email.length > 0;


    useEffect(() => {
        const off = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // optional: await user.getIdToken(); // if you need the token now
                navigate("/console"); // or wherever you want to send signed-in users
            }
        });
        return off; // cleanup the listener
    })

    return (
        <div className='Signup'>
            <div className='Signup-form-container'>
                <h1 className='Signup-rive'>rive.</h1>
                <div className='Signup-rive-underline' />
                <h2 className='Signup-form-title'>Login</h2>
                <p className='Signup-form-subtitle'></p>
                {loading ?
                    <Loader /> :
                    <form onSubmit={handleSubmit} noValidate>
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
                        {hasLoadedOnce && <span className='Signup-error-login'>{errMsg} </span>}
                        <button
                            type='submit'
                            disabled={loading || invalidEmail || !password}
                            className='Signup-form-submit'> {loading ? "Logging in…" : "Login"}</button>
                        <span className='Signup-form-signin'>Don't have an account? <a className='Signup-form-signin-highlighted' onClick={() => navigate('/signup')}>Create an account</a></span>
                    </form>
                }
            </div >
            <img src={logo} className='Signup-image' />

        </div >
    )
}

export function Loader() {
    return (
        <div className='loader-container'>
            <span class="loader"></span>
        </div>)
}

export default Login;
