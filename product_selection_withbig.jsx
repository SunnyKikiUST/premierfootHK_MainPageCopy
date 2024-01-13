import React from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import cx from 'classnames';
import {Icon } from 'antd';






function ProductSelectionListWithBig(props){
    return (
      <>
      <div className={s.production_selection_row}>
        {props.productInformationWithBig.map((product) => (
          <ProductSelectionWithBig
            name={product.name}
            price={product.price}
            discount_price={product.discount_price}
            image={product.image}
            image_profile={product.image_profile}
            isMobile={props.isMobile}
          />
        ))}
      </div>
      </>
    );
  }; 

function ProductSelectionWithBig(props){
    return(
            
        <>


                <a className={props.isMobile ? ss.production_selection_column_big_mobile :s.production_selection_column_big}>
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
                          <div className={s.product_originalprice}>{props.price}</div>
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
export default ProductSelectionListWithBig;