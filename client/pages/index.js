import classes from './index.module.css';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { useState } from 'react';


export default function Home() {

  const [registerForm, setRegisterForm] = useState(false);

  return (

    <div className={classes.container}>
      <div className={classes.sectionDivider}>
        <div className={classes.sloganSection}>
          <h1 className={classes.slogan}>get <span className={classes.gradient1}>anonymous</span> messages</h1>
          <h1 className={classes.slogan}>from <span className={classes.gradient2}>anyone</span> you know</h1>
        </div>
        <div className={classes.userSection}>
          {registerForm ? <RegisterForm setRegisterForm={setRegisterForm} /> : <LoginForm setRegisterForm={setRegisterForm} />}
        </div>
      </div>
      <div style={{ transform: 'translateY(-2rem)', zIndex: '2' }}>
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fjv8qxqn.json" background="transparent" speed="1" style={{ width: '20rem', height: '20rem' }} autoplay></lottie-player>
      </div>
    </div >
  )
}

