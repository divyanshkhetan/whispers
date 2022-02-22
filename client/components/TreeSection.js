import classes from './TreeSection.module.css';
import MessageBranch from './MessageBranch';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TreeSection({ userID }) {
    const [messages, setMessages] = useState([]);
    // var messages;

    const getData = () => {
        axios.get(`/api/messages/${userID}`)
            .then(data => setMessages(data.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getData();
    }, []);

    setInterval(getData(), 60 * 1000);

    return (
        <>
            <div className={classes.midVerticalLine} ></div>
            <div className={classes.container}>
                {
                    messages.map(({ _id, message }, index) => {
                        return <MessageBranch key={_id} message={message} direction={index} />
                    })
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {

    const response = await axios.get('/api/messages');
    console.log(response);

    return {
        props: {
            messages: response.data
        }, // will be passed to the page component as props
    }
}
