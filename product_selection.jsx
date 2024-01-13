import React from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import cx from 'classnames';
import {Icon } from 'antd';



function ProductSelectionList(props){
    return (
      <div className="">
        <figure className={s.upperandlowerimage_setting} style={{height: _.get(props, 'image.upper_image', "") == "" ? "0" : "auto",
        padding: _.get(props, 'image.upper_image', "") == "" ? "0" : "" }}>
            {/* <img style={{width:"100%"}} src="/image/sunnyimage/product_selection_lowerpicture.jpeg"></img> */}
            <img style={{width:"100%"}} src={_.get(props, 'image.upper_image', "") /*props.image.upper_image != "" ? props.image.upper_image: ""*/}></img>

        </figure>
        
        <div className={s.production_selection_row} style={{padding: _.get(props, 'image.upper_image', "") == "" ? "" : ""}}>
        {_.get(props, 'productInformation', []).map((product) => (
          <ProductSelection
            name={product.name}
            price={product.price}
            discount_price={product.discount_price}
            image={product.image}
            image_profile={product.image_profile}
            isMobile={props.isMobile}
          />
        ))}
        </div>
            <figure className={s.upperandlowerimage_setting} style={{height: _.get(props, 'image.bottom_image', "") == "" ? "0" : "auto",
        padding: _.get(props, 'image.bottom_image', "") == "" ? "0" : "" }}>
                <img style={{width:"100%"}} src={_.get(props, 'image.bottom_image', "")}></img>
            </figure>
        </div>
    );
  }; 

function ProductSelection(props){
    return(
            
        <>
        
                <a className={props.isMobile ? ss.production_selection_column_mobile: s.production_selection_column}>
                    <figure>
                        <div>
                          <img style={{position:"absolute"}} src={props.image_profile}></img>
                        </div>
                        <img src={props.image}></img>
                    </figure>
                    <div className={s.product_description}>

                        <div className={s.product_title}>
                          {props.name}
                        </div>
                        <div>
                          <div className={s.product_originalprice}>{props.discount_price}</div>
                          <div>
                              <div className={s.product_discountprice}>{props.discount_price}</div>
                              <div className={s.icon_container}>
                                <span className={cx(s.icon )}><Icon type="heart" /></span>
                                <span className={cx(s.icon )}><Icon type="shopping-cart" /></span>
                              </div>
                              
                          </div>
                          
                        </div>
                    </div>
                </a>
               
        </>

    )
}

//export default ProductSelectionList;
export default ProductSelectionList;