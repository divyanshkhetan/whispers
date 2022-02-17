import classes from './LoginForm.module.css';
import { useRef, useState } from 'react';


function LoginForm() {

    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [preLoader, setPreLoader] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function loginHandler(e) {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        setPreLoader(!preLoader);
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
                    <img src="" alt="" />
                    <i onClick={togglePassword} className="fa-solid fa-fingerprint"></i>
                </div>
                <button className={classes.loginButton} type="submit">
                    {preLoader ? <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wp1lvfp0.json" background="transparent" speed="1" style={{ width: '3rem', margin: 'auto' }} loop autoplay></lottie-player> : <span className={classes.loginText}>Login/Register</span>}
                </button>
                <div className={classes.registrationInfoDiv}>
                    <i className={classes.registrationInfo}>(Registers if the email has not been registered previously)</i>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;