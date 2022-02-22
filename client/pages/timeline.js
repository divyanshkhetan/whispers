import classes from './timeline.module.css';
import SharableLink from '../components/SharableLink';
import TreeSection from '../components/TreeSection';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Timeline() {

    const router = useRouter();
    const [user, setUser] = useState('');

    useEffect(async () => {
        const response = await axios.get('http://localhost:5000/api/auth');
        setUser(response.data.user);
        if (!(response.status === 201 && response.data.msg === 'authenticated')) {
            router.push('/');
        }
    }, []);

    function logoutHandler() {
        axios.get('http://localhost:5000/api/users/logout')
            .then(response => {
                if (response.status === 200 && response.data.msg === 'logged out') {
                    router.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
    }
    if (!user) {
        return (
            <></>
        )
    }
    return (
        <div className={classes.container}>
            <SharableLink pvtID={user._id} />
            <TreeSection userID={user._id} />
            <div className={classes.logoutButton} title="Logout" onClick={logoutHandler}>
                <i className="fa-solid fa-right-from-bracket" ></i>
            </div>
        </div>
    )
};