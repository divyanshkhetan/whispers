import classes from './RegisterForm.module.css';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function RegisterForm({ setRegisterForm }) {

    const router = useRouter();
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function registerHandler(e) {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        setLoader(!loader);
        setErrorMessage('');


        const userData = {
            name: name.current.value,
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

        axios.post('http://localhost:5000/api/users', userData, config)
            .then(response => {
                setLoader(false);
                if (response.status === 201 && response.data.msg === 'success') {
                    router.push('/timeline');
                }

                setErrorMessage(response.data.msg);
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err);
            });
    }



    function loginHandler() {
        setRegisterForm(false);
    }

    return (

        <div>
            <form onSubmit={registerHandler}>
                <div>
                    <input className={classes.formField} type="text" name="name" id="name" ref={name} placeholder="Name" required />
                </div>
                <div>
                    <input className={classes.formField} type="email" name="email" id="email" ref={email} placeholder="Email Address" required />
                </div>
                <div>
                    <input className={classes.formField} type={showPassword ? "text" : "password"} name="password" id="password" ref={password} placeholder="Password" required />
                </div>
                <div className={classes.showPassword}>
                    <img src="" alt="" />
                    <i onClick={togglePassword} className="fa-solid fa-fingerprint"></i>
                </div>
                <button className={classes.registerButton} type="submit">
                    {loader ? <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wp1lvfp0.json" background="transparent" speed="1" style={{ width: '3rem', margin: 'auto' }} loop autoplay></lottie-player> : <span className={classes.loginText}>Register</span>}
                </button>
                <div onClick={loginHandler}>
                    <span>or&nbsp;</span>
                    <span className={classes.blue}>Login</span>
                </div>
                <div className={classes.errorMessage}>
                    {errorMessage}
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;