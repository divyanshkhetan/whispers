import classes from './RegisterForm.module.css';
import { useRef, useState } from 'react';


function RegisterForm({ setRegisterForm }) {

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function registerHandler(e) {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        setLoader(!loader);
    }

    function loginHandler() {
        setRegisterForm(false);
    }

    return (

        <div>
            <form onSubmit={registerHandler}>
                <div>
                    <input className={classes.formField} type="text" name="name" id="name" ref={name} placeholder="Name" />
                </div>
                <div>
                    <input className={classes.formField} type="email" name="email" id="email" ref={email} placeholder="Email Address" />
                </div>
                <div>
                    <input className={classes.formField} type={showPassword ? "text" : "password"} name="password" id="password" ref={password} placeholder="Password" />
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
            </form>
        </div>
    );
}

export default RegisterForm;