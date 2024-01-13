//dynamic js

import React,{useState, useRef, useEffect} from 'react';
import s from './test.scss';
import ss from './test_mobile.scss'
import {Icon} from 'antd';
import  Swiper from 'react-id-swiper';




function DiscountProductSlideList(props){
    // const [nonactiveButton, setNonactiveButton] = useState(0);
    // const [activeleftIndex, setActiveleftIndex] = useState(0);
    // const [translateX, setTranslateX] = useState(0);
    // const [transferRatio, setTransferRatio] = useState(-1);
    // const [lastChildIndex, setLastChildIndex] = useState(-1);
    // const [indexForDiscountProduct, setIndexForDiscountProduct] = useState(0);
    // let index = -1;

    const params = {
        // Define swiper parameters
       
        slidesPerView: 2,
        navigation: {
          prevEl: `.${s.discount_product_leftbutton}`,
          nextEl: `.${s.discount_product_rightbutton}`,
        },
      renderPrevButton: () => <a  className={s.discount_product_leftbutton} ><Icon  type="left" /></a> ,
      renderNextButton: () => <a  className={s.discount_product_rightbutton} ><Icon  type="right" /></a> ,

      };

    // const slideRef = useRef(null);
    // const focusRef = useRef([]);

    // function handleButtonClick(string){
        
    //     if(lastChildIndex == -1)
    //     {
    //         const parent = slideRef.current;
    //         const lastChild = parent.lastElementChild;
    //         setLastChildIndex(Array.prototype.indexOf.call(parent.children, lastChild));
    //         console.log(lastChildIndex);
    //     }
    //     if(transferRatio == -1)
    //     {
    //         const parent = slideRef.current;
    //         const numberOfChild = parent.children.length;
    //         setTransferRatio(100 / numberOfChild);
    //         console.log(transferRatio);

    //     }

    //     if(string == "left")
    //     {   
    //         //if(activeleftIndex == 1){ setNonactiveButton(0); return;}
    //         if(activeleftIndex == 0){return;}
    //         setActiveleftIndex(activeleftIndex - 1);
    //         //slideRef.current.style.transform = `translateX(-${activeleftIndex*transferRatio}%)`;
    //         //console.log(activeleftIndex);
    //     }
    //     else
    //     {   
    //         //if(activeleftIndex == 0){ setActiveleftIndex(activeleftIndex + 1);  return;}
    //         if(activeleftIndex == lastChildIndex-1){return;}
    //         setActiveleftIndex(activeleftIndex + 1);  
            
    //         //slideRef.current.style.transform = `translateX(-${activeleftIndex*transferRatio}%)`;
    //         //console.log(activeleftIndex);
    //     }

    // }

    // useEffect( () => {
    //     //slideRef.current.style.transform = `translateX(-${1*transferRatio}%)`;
    //     setTranslateX(-transferRatio*activeleftIndex);
    //     //slideRef.current.style.backgroundColor = "blue";
    //     console.log(slideRef.current);
    //     console.log(transferRatio);
    //     console.log(activeleftIndex);
    // }, [activeleftIndex]);

    // useEffect( () => {
    //     //console.log("second useEffect");
    //     //console.log(translateX);
    //     slideRef.current.style.transform = `translateX(${translateX}%)`;
    //     if(activeleftIndex == 0) setNonactiveButton(0);
    //     else if(activeleftIndex == lastChildIndex-1) setNonactiveButton(1); 
    //     else setNonactiveButton(-1);
    // }, [translateX])

    
    // useEffect(() => {
        
    //     const scrollingElement = slideRef.current;
    //     const focusableElements = focusRef.current;

    //     if(scrollingElement && focusableElements.length > 0)
    //     {
    //         const handleScroll = () => {
    //             console.log("hi");
    //             let closestElement = null;
    //             const scrollPosition = scrollingElement.getBoundingClientRect().left; //scrollLeft: represents the number of pixels the element's content is scrolled from its left edge.
    //             console.log(scrollingElement.getBoundingClientRect().left, "getBoundingClientRect().left");
    //             console.log(scrollingElement.scrollLeft, "scrollLeft")
    //             const distances = [];
    //             focusableElements.forEach((element) => {
    //                 const distance = Math.abs(element.current.offsetLeft - scrollPosition)
    //                 distances.push(distance);
    //             });
    //             const closestIndex = distances.indexOf(Math.min(...distances));
    //             closestElement = focusableElements[closestIndex].current;

    //             if(closestElement){
    //                 const windowWidth = window.innerWidth;
    //                 const elementWidth = closestElement.offsetWidth;
    //                 const elementLeft = closestElement.getBoundingClientRect().left;
    //                 const scrollAmount = elementLeft - (windowWidth / 2 - elementWidth / 2);
    //                 scrollingElement.scrollTo({
    //                     left: scrollAmount,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         };

    //         scrollingElement.addEventListener('scroll', handleScroll)

    //         return () => {
    //             scrollingElement.removeEventListener('scroll', handleScroll)
    //         };
    //     }
    // }
    // ,[slideRef, focusRef]);

    // useEffect(() => {

    // },[indexForDiscountProduct]);

    //console.log("hiiiiii");
    //console.log(props.discountProductInformation.length);

    // if(!props.isMobile)
    // {
    //     return(
    //         <div className={s.discount_product_slide_1 }>
    //             <div className={s.discount_product_slide_2 }>
    //             <a onClick={ () => handleButtonClick("left")} className={s.banner_2_leftbutton} style={{left: "0"}}>
    //                     <Icon style={{ opacity: nonactiveButton == 0 ? "0.3" : ""}} type="left" />
    //             </a>
    //                 <div ref={slideRef} id="container" className={s.discount_product_slide_container} style={{/*transform: "translateX()"*/}}>
    //                     {
    //                         props.discountProductInformation.map((product) => (
    //                             <Discount_product_slide name={product.name} date={product.date} image1={product.image1} image2={product.image2} isMobile={props.isMobile}/>
    //                         ))
                            
    //                     }
    //                 </div>
    //             <a onClick={ () => handleButtonClick("right")} className={s.banner_2_rightbutton} style={{right: "0"}}>
    //                         <Icon style={{ opacity: nonactiveButton == 1 ? "0.3" : ""}} type="right" />
    //             </a>
    //             </div>
    //         </div>
    //     )
    // }
    if(!props.isMobile)
    {
        return(
            <div className={s.discount_product_slide_1 }>
                <div className={s.discount_product_slide_2 }>
                {/* <a  className={`.${s.discount_product_leftbutton}`}>
                        <Icon  type="left" />
                </a> */}
                    <div id="container" className={s.discount_product_slide_container} style={{/*transform: "translateX()"*/}}>
                        <Swiper {...params}>
                        {
                            props.discountProductInformation.map((product) => (
                                <Discount_product_slide name={product.name} date={product.date} image1={product.image1} image2={product.image2} isMobile={props.isMobile}/>
                            ))
                            
                        }
                        </Swiper>
                    </div>
                {/* <a  className={`.${s.discount_product_rightbutton}`} >
                            <Icon type="right" />
                </a> */}
                </div>
            </div>
        )
    }
    else
    {
        return(
            <>
            
            <div className={ss.discount_product_slide_1_mobile}>
                <div className={ss.discount_product_slide_1_extended_mobile}>
                    <div className={ss.discount_product_slide_2_mobile}>
                        <div id="container" className={ss.discount_product_slide_container_mobile}>
                            <Swiper>
                            
                            {
                                
                                props.discountProductInformation.map((product) => {
                                    
                                    return (
                                    // <Discount_product_slide ref={(element) => {focusRef[index] = element; console.log("The new index is ",index); /*setIndexForDiscountProduct((index) => index + 1);*/ }} name={product.name} date={product.date} image1={product.image1} image2={product.image2} isMobile={props.isMobile}/>
                                    <Discount_product_slide name={product.name} date={product.date} image1={product.image1} image2={product.image2} isMobile={props.isMobile}/>
                                    )
                                })
                                
                            }
                            </Swiper>
                        </div>
                    </div>
                    <a className={ss.youtube_section_video_link}>
                        查看活動列表
                        <Icon className={ss.youtube_section_video_link_icon} type="right" />
                    </a>
                </div>
            </div>
            </>
        )
    }

}

function Discount_product_slide(props){

    // if(!props.isMobile)
    // {
    //     return(
            
    

    //                     <div className={s.discount_product_slide_eachcontainer_setwidth}>   
    //                         <a href="#">
    //                             <div className={s.discount_product_slide_eachsinglecontainer}>
    //                                 <div className={s.discount_product_slide_eachsinglecontainer_text}>
    //                                     <div className={s.discount_product_slide_eachsinglecontainer_description}>{props.name}</div>
    //                                     <div className={s.discount_product_slide_eachsinglecontainer_date}>{props.date}</div>
    //                                 </div>
    //                                 <div className={s.discount_product_slide_eachsinglecontainer_imagecontainer}>
    //                                     <img src={props.image1}></img>
    //                                     <img src={props.image2}></img>
    //                                 </div>
    //                             </div>
    //                         </a>
    //                     </div>


    //     )
    // }

    if(!props.isMobile)
    {
        return(
            
    

                        <div className="swiper-slide">   
                            <a href="#">
                                <div className={s.discount_product_slide_eachsinglecontainer}>
                                    <div className={s.discount_product_slide_eachsinglecontainer_text}>
                                        <div className={s.discount_product_slide_eachsinglecontainer_description}>{props.name}</div>
                                        <div className={s.discount_product_slide_eachsinglecontainer_date}>{props.date}</div>
                                    </div>
                                    <div className={s.discount_product_slide_eachsinglecontainer_imagecontainer}>
                                        <img src={props.image1}></img>
                                        <img src={props.image2}></img>
                                    </div>
                                </div>
                            </a>
                        </div>


        )
    }
    else
    {
        return(
            
    

            <div className="swiper-slide" >   
                <a href="#">
                    <div className={ss.discount_product_slide_eachsinglecontainer} style={{border: "none", margin: 0, padding: 0}}>
                        <div className={ss.discount_product_slide_eachsinglecontainer_imagecontainer_mobile}>
                            <img src={props.image1}></img>
                        </div>
                        <div className={ss.discount_product_slide_eachsinglecontainer_text_mobile}>
                            <div className={ss.discount_product_slide_eachsinglecontainer_description_mobile}>{props.name}</div>
                            <div className={ss.discount_product_slide_eachsinglecontainer_date_mobile}>{props.date}</div>
                        </div>
                    </div>
                </a>
            </div>


)  
    }
}

export default DiscountProductSlideList;