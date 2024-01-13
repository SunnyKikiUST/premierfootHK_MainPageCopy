import React , {useState, useRef, useEffect} from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import {Icon} from 'antd';
import  Swiper from 'react-id-swiper';
import cx from 'classnames';

function Option_slide(props){
    // const [nonactiveIndex, setNonactiveIndex] = useState(0);
    // const [activeIndex, setActiveIndex] = useState(0);

    // const firstslideRef = useRef(null);
    // const secondslideRef = useRef(null);

    const params_desktop = {
        // Define swiper parameters
        slidesPerView: 10,
        slidesPerGroup: 10,
        navigation: {
          prevEl: `.${s.banner_2_leftbutton}`,
          nextEl: `.${s.banner_2_rightbutton}`
        },
      renderPrevButton: () => <a  className={s.banner_2_leftbutton} ><Icon  type="left" /></a> ,
      renderNextButton: () => <a  className={s.banner_2_rightbutton} ><Icon  type="right" /></a>, 

      };

    const params_mobile = {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 6,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }



    // function handleButtonClick(string){
    //     if(string == "left")
    //     {
    //         setNonactiveIndex(0);
    //         firstslideRef.current.style.transform = "translateX(0)";
    //         secondslideRef.current.style.transform = "translateX(0)";
    //     }
    //     else
    //     {
    //         setNonactiveIndex(1);   
    //         firstslideRef.current.style.transform = "translateX(-50%)"; 
    //         secondslideRef.current.style.transform = "translateX(-50%)";
    //     }

    // }
if(!props.isMobile)
{
    return(
        <div className={s.banner_2_1}>
            <div className={s.banner_2_2}>
                <div>
                    {/* <a onClick={ () => handleButtonClick("left")} className={s.banner_2_leftbutton} >
                        <Icon style={{ opacity: nonactiveIndex == 0 ? "0.3" : ""}} type="left" />
                    </a> */}
                    <div style={{overflowX: "hidden"}}> 
                        <div className={s.banner_2_flex}>
                            <Swiper {...params_desktop}>
                                {
                                    props.optionSlideInformation.map((information) => ( 
                                        <ProductImage image={information.image} name={information.name}/>
                                    ))
                                }
                            </Swiper>
                        </div>
                        {/* <div ref={secondslideRef} className={s.banner_2_flex}>
                        {
                            props.optionSlideInformation.map((information) => (
                                <Name name={information.name}/>
                            ))
                        }

                        </div> */}
                    </div>
                    {/* <a onClick={ () => handleButtonClick("right")} className={s.banner_2_rightbutton}>
                        <Icon style={{ opacity: nonactiveIndex == 1 ? "0.3" : ""}} type="right" />
                    </a> */}

                </div>
            </div>
        </div>
    )
}

else
{
    return(
        <div className={ss.banner_2_1_mobile}>
            <div className={ss.banner_2_2_mobile}>
            
               
                        <div className={ss.banner_2_flex_mobile}>
                            
                            <div className={ss.banner_2_eachbigcontainer_mobile}>
                                <Swiper {...params_mobile}>
                                {
                                    props.optionSlideInformation.map((information) => (                                 
                                        <MobileNameAndProductImage image={information.image} name={information.name} />
                                    ))
                                }     
                                </Swiper>
                            </div>   
                            
                            {/* <div className={ss.banner_2_eachbigcontainer_mobile}>
                            {
                                props.optionSlideInformation.map((information, index) => {                               
                                    if(index >= 8 && index < 16)
                                    {
                                        
                                        return (<MobileNameAndProductImage image={information.image} name={information.name} />)
                                    }
                                    else
                                    {
                                        return (<></>);
                                    }
                                    
                                })
                            }     
                            </div>   

                            <div className={ss.banner_2_eachbigcontainer_mobile}>
                            {
                                props.optionSlideInformation.map((information, index) => {                               
                                    if(index >= 16 && index < 24)
                                    {
                                        
                                        return (<MobileNameAndProductImage image={information.image} name={information.name} />)
                                    }
                                    else
                                    {
                                        return (<></>);
                                    }
                                    
                                })
                            }     
                            </div>   */}
                            
                        </div>
                    
    
            
            </div>
        </div>
            )
}

}




function Name(props){
    return(
    <div className={s.banner_2_text}>{props.name}</div>
    )
    }

function ProductImage(props){
    return(
        <div className="swiper-slide">
            <div className={s.banner_2_imagebox}>
                <a className={s.banner_2_image_a} href="#">
                    <figure className={s.banner_2_figure}>
                        <img className={s.banner_2_image} src ={props.image}>
                        </img>
                    </figure>
                </a>
                <div className={s.banner_2_text}>{props.name}</div>
            </div>
        </div>
    )
}

function MobileNameAndProductImage(props){
    return(
        <div className="swiper-slide">
            <div className={ss.banner_2_imagebox_mobile}>
                <a className={s.banner_2_image_1} href="#">
                    <figure className={s.banner_2_figure}>
                        <img className={s.banner_2_image} src={props.image}>

                        </img>
                    </figure>
                    <div className={ss.banner_2_text_mobile}>{props.name}</div>
                </a>
            </div>
        </div>
    )
}


export default Option_slide;
