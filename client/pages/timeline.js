import classes from './timeline.module.css';
import SharableLink from '../components/SharableLink';
import TreeSection from '../components/TreeSection';

export default function Timeline() {
    return (
        <div className={classes.container}>
            <SharableLink />
            <TreeSection />
            <div className={classes.logoutButton} title="Logout">
                <i className="fa-solid fa-right-from-bracket" ></i>
            </div>
        </div>
    )
};