import classes from './LoginForm.module.css';
import { useRef, useState } from 'react';
import Head from 'next/head';

function LoginForm() {

    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);

    function togglePassword() {
        setShowPassword(!showPassword);
    }

    function loginHandler(e) {
        e.preventDefault();
        console.log(email.current.value, password.current.value);
    }

    return (
        <div>
            <Head>
                <script src="https://kit.fontawesome.com/ebdf1e96a8.js" crossorigin="anonymous"></script>
            </Head>
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
                <button className={classes.loginButton} type="submit">Login / Register</button>
                <div className={classes.registrationInfoDiv}>
                    <i className={classes.registrationInfo}>(Registers if the email has not been registered previously)</i>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;