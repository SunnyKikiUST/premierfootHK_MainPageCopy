import React from 'react';
import s from './test.scss';

function DeliveryAndPayment(props){
    return(
        <div>
            <figure>
                <img className={s.PaymentMethodImage} src="/image/sunnyimage/Delivery_Payment_Method.jpeg"></img>
            </figure>          
        </div>

    )
}

export default DeliveryAndPayment;