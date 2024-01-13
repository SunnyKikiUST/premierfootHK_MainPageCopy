import React from 'react';
import s from './test.scss'
import ss from './test_mobile.scss'

function VippromoANDwebsiteorderSectionList(props){
    return(
        <div>

            <div className={s.vip_column}>

            { props.vipPromotionInformation.map((Image) => (
                <VippromoANDwebsiteorderSection image={Image} isMobile={props.isMobile} />

            ))
         
            }
            </div>

            <div className={s.websiteorder}>
                <a>
                    <img className={s.websiteorder_image} src={props.websiteOrderInformation}></img>
                </a>
            </div>

        </div>
    )
}

function VippromoANDwebsiteorderSection(props){
    return(
                <div className={props.isMobile ? ss.vip_row_mobile : s.vip_row}>
                    <a>
                        <img src={props.image}></img>
                    </a>
                </div>


    )
}

export default VippromoANDwebsiteorderSectionList;