import React , {useState, useRef, useEffect} from 'react';
import s from './test.scss';
import {Icon} from 'antd';
import  Swiper from 'react-id-swiper';

function Banner(props){
    // const [activeIndex, setActiveIndex] = useState(0);
    // const [translateX, setTranslateX] = useState(0);
    // const [autoplayTimeout, setAutoplayTimeout] = useState(null);
    // const [totalLength, setTotalLength] = useState(-1);

    const params_desktop = {
        loop: true,
        rebuildOnUpdate: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: `.${s.banner_rightbutton}`,
            prevEl: `.${s.banner_leftbutton}`
          },
          renderPrevButton: () => <a  className={s.banner_leftbutton} ><Icon  type="left" /></a> ,
          renderNextButton: () => <a  className={s.banner_rightbutton} ><Icon  type="right" /></a> ,
    }
    const params_mobile = {
        loop: true,
        rebuildOnUpdate: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
    }
    // const slideRef = useRef(null);
    

    // useEffect( () => {
    //     setTranslateX(-activeIndex * 25);
    // }, [activeIndex]);

    // useEffect( () => {
    //     slideRef.current.style.transform = `translateX(${translateX}%)`;     
    // }, [translateX]);

    // function handleDotClick(index)
    // {
    //     setActiveIndex(index);
    //     stopAuto();
    // }

    // function handleButtonClick(string){
    //     if(totalLength == -1)
    //     {
    //         const ChildrenArray = React.Children.toArray(slideRef.current.children);
    //         setTotalLength(ChildrenArray.length);
    //     }

    //     if(string == "left")
    //     {
    //         setActiveIndex((activeIndex - 1 + 4) % 4);
    //         stopAuto();
    //     }
    //     else
    //     {
    //         setActiveIndex((activeIndex + 1) % 4);  
    //         stopAuto();        
    //     }

    // }

    // function autoSlide()
    // {
    //     setActiveIndex((activeIndex + 1) % 4);  
    // }

    // function startAuto()
    // {
    //     const TimeIdentifier = setTimeout(autoSlide, 3000);
    //     setAutoplayTimeout(TimeIdentifier);
    // }

    // function stopAuto()
    // {
    //     if(autoplayTimeout != null){ clearTimeout(autoplayTimeout);}
    //     setAutoplayTimeout(null);
    // }

    // //setTimeout(autoSlide, 3000)
    // useEffect(
    //     startAuto
    // ,[])

    // useEffect(
    //     startAuto
    // ,[activeIndex])

    return(
            
            // <div className={s.banner}>
            //     <a onClick={() => handleButtonClick("left")} className={s.banner_leftbutton} style={{display: props.isMobile ? "none" :""}}>
            //         <Icon type="arrow-left" />
            //     </a>
            //     <div className={s.banner_scroll_setting} style={{width: "100%" ,opacity: "1"}}>
            //         <div className={s.banner_container} ref={slideRef}>
                        
            //             {props.isMobile
            //                 ? props.bannerImageMobile.map((image) => <Image image={image} />)
            //                 : props.bannerImageDesktop.map((image) => <Image image={image} />)
            //             }
                    
            //         </div>
            //     </div>
            //     <a onClick={() => handleButtonClick("right")} className={s.banner_rightbutton} style={{display: props.isMobile ? "none" :""}}>
            //         <Icon type="arrow-right" />
            //     </a>
            //     <ul className={s.banner_dots_container}>
            //         <li onClick={ () => handleDotClick(0)}><button style={{backgroundColor: activeIndex == 0 ? "#4a4e5c":""}}></button></li>
            //         <li onClick={ () => handleDotClick(1)}><button style={{backgroundColor: activeIndex == 1 ? "#4a4e5c":""}}></button></li>
            //         <li onClick={ () => handleDotClick(2)}><button style={{backgroundColor: activeIndex == 2 ? "#4a4e5c":""}}></button></li>
            //         <li onClick={ () => handleDotClick(3)}><button style={{backgroundColor: activeIndex == 3 ? "#4a4e5c":""}}></button></li>
            //     </ul>
            // </div>
        <div className={s.banner}>
         
            <div className={s.banner_scroll_setting} style={{width: "100%" ,opacity: "1"}}>
                <div className={s.banner_container} >
                    {props.isMobile
                        ? 
                        (
                            <Swiper {...params_mobile}>
                                {
                                    props.bannerImageMobile.map((image) => <Image image={image} />)
                                }
                            </Swiper>
                        )
                        :
                        (
                            <Swiper {...params_desktop}>
                            {
                                props.bannerImageDesktop.map((image) => <Image image={image} />)
                            }
                            </Swiper>
                        )
                    }
                </div>
            </div>
          
        </div>
        
    )
}

function Image(props){
    return(
        <div className="swiper-slide">
            <a className={s.banner_link}>
                <figure className={s.banner_frame}>
                    <img className={s.banner_image} src={props.image}>

                    </img>
                </figure>
            </a>
        </div>
    )

}

export default Banner;