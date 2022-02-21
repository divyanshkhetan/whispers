import classes from './TreeSection.module.css';
import MessageBranch from './MessageBranch';

export default function TreeSection() {

    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pellentesque sit amet porttitor eget dolor morbi non. Blandit libero volutpat sed cras ornare arcu dui vivamus. Nam libero justo laoreet sit. Quisque non tellus orci ac auctor augue. Id neque aliquam vestibulum morbi blandit. Leo a diam sollicitudin tempor. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Et pharetra pharetra massa massa ultricies mi. Et tortor consequat id porta nibh venenatis. Malesuada fames ac turpis egestas maecenas. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Eu consequat ac felis donec et odio. Urna duis convallis convallis tellus id interdum velit laoreet id. Facilisis volutpat est velit egestas dui id ornare arcu odio. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque egestas diam in arcu. Faucibus in ornare quam viverra.";

    const messages = [
        {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pellentesque sit amet porttitor eget dolor morbi non. Blandit libero volutpat sed cras ornare arcu dui vivamus. Nam libero justo laoreet sit. Quisque non tellus orci ac auctor augue. Id neque aliquam vestibulum morbi blandit. Leo a diam sollicitudin tempor. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Et pharetra pharetra massa massa ultricies mi. Et tortor consequat id porta nibh venenatis. Malesuada fames ac turpis egestas maecenas. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Eu consequat ac felis donec et odio. Urna duis convallis convallis tellus id interdum velit laoreet id. Facilisis volutpat est velit egestas dui id ornare arcu odio. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque egestas diam in arcu. Faucibus in ornare quam viverra."
        },
        {
            "message": "orta nibh venenatis. Malesuada fames ac turpis egestas maecenas. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Eu consequat ac felis donec et odio. Urna duis convallis convallis tellus id interdum velit laoreet id. Facilisis volutpat est velit egestas dui id ornare arcu odio. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque egestas diam in arcu. Faucibus in ornare quam viverra."
        }, {
            "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pellentesque sit amet porttitor eget dolor morbi non. Blandit libero volutpat sed craellus faucibus scelerisque eleifend donec. Eu consequat ac felis donec et odio. Urna duis convallis convallis tellus id interdum velit laoreet id. Facilisis volutpat est velit egestas dui id ornare arcu odio. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Mi bibendum neque egestas congue quisque egestas diam in arcu. Faucibus in ornare quam viverra."
        }
    ];

    return (
        <>
            <div className={classes.midVerticalLine} ></div>
            <div className={classes.container}>
                {messages.map((message, index) => {
                    console.log(index);
                    return <MessageBranch key={index} direction={index} message={message.message} />
                })}
            </div>
        </>
    )
}