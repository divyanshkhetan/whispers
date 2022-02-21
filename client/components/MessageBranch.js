import classes from './MessageBranch.module.css';
import MessageBox from './MessageBox';

function MessageBranch({ message, direction }) {
    const temp = direction;
    return (
        <>
            {
                direction % 2 === 1
                    ?
                    <div className={classes.container}>
                        <MessageBox message={message} direction={temp} />
                        <div className={classes.horizontalLine} div />
                    </div>
                    :
                    <div className={classes.container + " " + classes.translateContainer}>
                        <div className={classes.horizontalLine} div />
                        <MessageBox message={message} direction={temp} />
                    </div>
            }
        </>
    )
};

export default MessageBranch;