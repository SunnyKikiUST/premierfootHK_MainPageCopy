import React , {useState} from 'react';
import btn from './btn.scss';
import cx from 'classnames';
import {Icon} from 'antd';

function NotificationPopUpElement(){

    const [activeWarning, setactiveWarning] = useState(false);

    function handleClickForActiveWarning(){
        setactiveWarning((prev => !prev));
    }

    return(
        <div className={btn.btn_body}>
            <button id="delete" onClick={handleClickForActiveWarning} className={btn.btn_primary}>
                <Icon className={btn.btn_primary_icon} type="delete" />
                Delete
            </button>

            <div id="notification" className={activeWarning == true ? cx(btn.notification, btn.notification_show): btn.notification}>
                <Icon className={btn.btn_secondary_icon_warning} type="exclamation-circle" />
                <p>Item has been deleted</p>
                <button className={btn.btn_secondary}>Undo</button>
                <div onClick={handleClickForActiveWarning} id="close" className={btn.notification_close}>
                    <Icon className={btn.btn_secondary_icon_close} type="close" />
                </div>
            </div>
        </div>
    )
}

export default NotificationPopUpElement;