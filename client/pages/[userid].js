import classes from './ReviewPage.module.css';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

function ReviewPage() {
    const router = useRouter();
    const { userid } = router.query;
    const message = useRef(null);

    const [submitted, setSubmitted] = useState(false);

    function registerHandler() {
        router.push('/');
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log(message.current.value);
        setSubmitted(true);
    }

    return (
        <>

            {submitted
                ?
                <div className="container">
                    <h1>We've sent your secret message!</h1>
                    <button className={classes.submitButton} onClick={registerHandler}>
                        Send one to your Friends!
                    </button>
                </div>
                :
                <form onSubmit={submitHandler}>
                    <div className={classes.outerContainer}>
                        <div className={classes.innerContainer}>
                            <textarea ref={message} className={classes.formControl} id="message" rows="5" placeholder='Write your secret message here'></textarea>
                        </div>
                    </div>
                    <button className={classes.submitButton} type="submit">Submit</button>
                </form>
            }
        </>
    )
}

export default ReviewPage;