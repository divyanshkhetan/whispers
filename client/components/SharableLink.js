import classes from './SharableLink.module.css';
import { useState } from 'react';

function SharableLink({ pvtID }) {

    const [copied, setCopied] = useState(false);

    var uniqueLink = 'window nahi mila bc';
    if (typeof window !== "undefined") {
        uniqueLink = `${window.location.origin}/${pvtID}`;
    }

    function copyHandler() {
        setCopied(true);

        navigator.clipboard.writeText(uniqueLink);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className={classes.containerOuter}>
            <div className={classes.containerInner}>
                <div className={classes.container}>
                    <input type="text" className={classes.linkSection} value={uniqueLink} id="myInput" readOnly />
                    <div className={copied ? classes.copyButton + " " + classes.green : classes.copyButton} onClick={copyHandler}>
                        {copied ?
                            <> <i className="fa-solid fa-check"></i>
                                <span> &nbsp;Copied</span>
                            </>
                            :
                            <> <i className="fa-regular fa-copy"></i>
                                <span> &nbsp;Copy</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharableLink;