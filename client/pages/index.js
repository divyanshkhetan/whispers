import classes from './index.module.css';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Home() {

  axios.defaults.withCredentials = true;
  const router = useRouter();
  useEffect(async () => {
    const response = await axios.get('/api/auth/');
    if (response.status === 201 && response.data.msg === 'authenticated') {
      router.push('/timeline');
    }
  }, []);


  const [registerForm, setRegisterForm] = useState(false);

  return (

    <div className={classes.container}>
      <div className={classes.sectionDivider}>
        <div className={classes.sloganSection}>
          <h1 className={classes.slogan}>get <span className={classes.gradient1}>anonymous</span> messages</h1>
          <h1 className={classes.slogan}>from <span className={classes.gradient2}>anyone</span> you know</h1>
          <div className={classes.illustration}>
            <img src="/indexPageIll.jpg" />
          </div>
        </div>
        <div className={classes.userSection}>
          {registerForm ? <RegisterForm setRegisterForm={setRegisterForm} /> : <LoginForm setRegisterForm={setRegisterForm} />}
        </div>
      </div>
    </div >
  )
}


