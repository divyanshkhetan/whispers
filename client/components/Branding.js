import classes from './Branding.module.css';

function Branding() {
    return (
        <>
            <div className={classes.navbar}>
                <h1 className={classes.logo}>Whisper</h1>
            </div>
        </>
    );
}

export default Branding;