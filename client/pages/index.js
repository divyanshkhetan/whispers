import classes from './index.module.css';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <>
      <div className={classes.sectionDivider}>
        <div className={classes.sloganSection}>
          <h1 className={classes.slogan}>get <span className={classes.gradient1}>anonymous</span> messages</h1>
          <h1 className={classes.slogan}>from <span className={classes.gradient2}>anyone</span> you know</h1>
        </div>
        <div className={classes.userSection}>
          <LoginForm />
          {/* SignUpForm */}
        </div>

      </div>
    </>
  )
}
