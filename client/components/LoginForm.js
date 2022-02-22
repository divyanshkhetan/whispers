import classes from './LoginForm.module.css';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


function LoginForm({ setRegisterForm }) {

    const router = useRouter();

    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function registerHandler() {
        setRegisterForm(true);
    }

    function loginHandler(e) {
        e.preventDefault();
        setLoader(!loader);
        setErrorMessage('');

        const userData = {
            email: email.current.value.toLowerCase(),
            password: password.current.value
        };

        if (password.current.value.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
            setLoader(false);
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post('http://localhost:5000/api/auth', userData, config)
            .then(response => {
                setLoader(false);
                if (response.data.msg === 'success') {
                    router.push('/timeline');
                }


                setErrorMessage(response.data.msg);
            })
            .catch(err => {
                setErrorMessage(err.message);
            });


    }

    return (

        <div>
            <form onSubmit={loginHandler}>
                <div>
                    <input className={classes.formField} type="email" name="email" id="email" ref={email} placeholder="Email Address" />
                </div>
                <div>
                    <input className={classes.formField} type={showPassword ? "text" : "password"} name="password" id="password" ref={password} placeholder="Password" />
                </div>
                <div className={classes.showPassword}>
                    <i onClick={togglePassword} className="fa-solid fa-fingerprint"></i>
                </div>
                <button className={classes.loginButton} type="submit">
                    {loader ? <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wp1lvfp0.json" background="transparent" speed="1" style={{ width: '3rem', margin: 'auto' }} loop autoplay></lottie-player> : <span className={classes.loginText}>Login</span>}
                </button>
                <div onClick={registerHandler}>
                    <span>or&nbsp;</span>
                    <span className={classes.blue}>Register</span>
                </div>
            </form>
            <div className={classes.errorMessage}>
                {errorMessage}
            </div>
        </div>
    );
}

export default LoginForm;