import classes from './MessageBox.module.css';

function MessageBox({ message, direction }) {
    direction = direction % 3;
    return (
        <>
            <div className={direction === 0 ? classes.container + " " + classes.gradient1 : direction === 1 ? classes.container + " " + classes.gradient2 : classes.container + " " + classes.gradient3}>
                <span>{message}</span>
            </div>
        </>
    )
}

export default MessageBox;