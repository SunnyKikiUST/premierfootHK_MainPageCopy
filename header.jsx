import React , {useState, useEffect, useRef} from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import cx from 'classnames';
import {Icon} from 'antd';
import PushMenuSection from './pushmenu';



//const Headerref = useRef(null);

function Menu(props){
    


    return(
        <nav style={{height:"50%"}}>
            <ul className={s.header_lower_right_mainul}>
                {
                    props.menuInformation.map((content, index) => {
                        console.log(props.isChangedIndex, "props.isChangedIndex")
                        return(
                            <>
                                <li className={s.header_lower_right_mainli} style={{position: content.data.length > 0 ? "relative" :""}}>
                                    <a>{content.title}</a>
                                    
                                {
                                    content.data.length > 0 && (
                                        <>
                                            <span>
                                                <i className={s.menu_icon_down}><Icon type="down" /></i>
                                            </span>

                            
                                            <>
                                                <div onMouseLeave={props.ChangeSubMenu_toOriginal} className={s.submenu_1} style={{backgroundColor: props.haveActiveSubMenu == true ? "rgb(240,240,240)" : "" , borderRight: props.haveActiveSubMenu == true ? "1px solid rgb(221,221,221)":""}}>
                                                    {
                                                        content.data.map((sub_content, sub_index) => {
                                                            console.log(sub_content, "sub_content")
                                                            return(
                                                                sub_index == 0 ?
                                                                <ul className={s.submenu_ul}>  
                                                                {   
                                                                    
                                                                    sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                        return(
                                                                            <>
                                                                            
                                                                            
                                                                                <li onClick={() => props.ChangeSubMenu_handleClick(index, sub_index, sub_sub_index)}>
                                                                                    <a>{sub_sub_content.name}
                                                                                    {
                                                                                        sub_sub_content.sub_category != 0 && (
                                                                                            <span className={s.submenu_icon_right}>
                                                                                                <div>
                                                                                                    <Icon type="right" />
                                                                                                </div>                                              
                                                                                            </span>
                                                                                        )
                                                                                    }
                                                                                    </a>
                                                                                </li>
                                                                            
                                                                            
                                                                            </>
                                                                        
                                                                        )
                                                                    })

                                                                }

                        
                                                                
                                                                </ul> :

                                                                <ul className={s.submenu_ul} style={{display: props.haveActiveSubMenu == true ? "none" :""}}>  
                                                                {   
                                                                    
                                                                    sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                        return(
                                                                            <>
                                                                        
                                
                                                                            
                                                                                <li onClick={() => props.ChangeSubMenu_handleClick(index, sub_index, sub_sub_index)}> 
                                                                                    <a>{sub_sub_content.name}
                                                                                    {
                                                                                        sub_sub_content.sub_category != 0 && (
                                                                                            <span className={s.submenu_icon_right}>
                                                                                                <div>
                                                                                                    <Icon type="right" />
                                                                                                </div>                                              
                                                                                            </span>
                                                                                        )
                                                                                    }
                                                                                    </a>
                                                                                </li>
                                                                            
                                                                        
                                                                            </>
                                                                        
                                                                        )
                                                                    })

                                                                }



                                                                </ul>
                                                            )

                                                        }
                                                            
                                                        )

                                                    }    

                                                    {
                                                        content.data.map((sub_content, sub_index) => {
                                                            //console.log(sub_content, "sub_content1") //sub_content correspond to elements of data , [[],[]]
                                                            
                                                            return(<>
                                                                    
                                                                {
                                                                    sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                        //console.log(sub_sub_content.sub_category, "sub_sub_content.sub_category")
                                                                        return(
                                                                            <>
                                                                            
                                                                            {
                                                                            sub_sub_content.sub_category.length != 0 && (  //sub_sub_content correspond to data-> one of two component for e.g data of 商品分類 -> element of that componenet/array member 
                                                                            
                                                                            <ul className={s.submenu_ul} style={{backgroundColor:"rgb(255,255,255)", display: props.isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == 0 ? "none" : ""}} >
                                                                                <li className={s.submenu_title_li}>
                                                                                    <b className={s.submenu_title}>{sub_sub_content.name}</b>
                                                                                    
                                                                                    <span className={s.submenu_icon_close} onClick={() => props.ChangeSubMenu_toOriginal}>
                                                                                        <div>
                                                                                            <Icon onClick={props.ChangeSubMenu_toOriginal} type="close"/>
                                                                                        </div>
                                                                                        
                                                                                    </span>
                                                                                </li>

                                                                                {sub_sub_content.sub_category.map((right_content, right_index) => {// right_content is the submenu of the element on the menu of the left part .
                                                                                    console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(),"toString");
                                                                                    console.log(props.isChangedIndex,"xxx");
                                                                                    const value = props.isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString());
                                                                                    console.log(value,"isChangedIndex");
                                                                                    console.log(right_content.name, "right_content.name");
                                                                                    console.log(right_index,"right_index");
                                                                                    return(
                                                                                        
                                                                                        <>
                                                                                    
                                                                                        
                                                                                        
                                                                                        
                                                                                            <li><a>{right_content.name}</a></li>
                                                                            
                                                                                        
                                                                                        
                                                                                        </>
                                                                                        );
                                                                                })
                                                                                }

                                                                            </ul>
                                                                        )
                                                                        }
                                                                        </>
                                                                        )
                    
                                                                    }
                                                                    )
                                                                }
                                                                </> )
                                                            
                                                        }
                                                            )
                                                        }            
                                                </div>
                                            </>
                                
                            
                                
                                        </>
                                    )
                                }
                                </li>
                            </>
                        )})
                }

                {/* <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                    <a>商品分類</a>
                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                    <div onMouseLeave={ChangeSubMenu_toOriginal} className={s.submenu_1} style={{backgroundColor: isChanged ? "rgb(240,240,240)" : "" ,borderRight: isChanged ? "1px solid rgb(221,221,221)":""}}>
                        
                            <ul className={s.submenu_ul}>
                                <li><a>全站商品</a></li>
                            
                                <li style={{backgroundColor: isChanged ?  "rgb(255,255,255)": ""}}>
                                    <a onClick={ChangeSubMenu_handleClick}> 初夏Chill抵☀️</a>
                                    <span className={s.submenu_icon_right}>
                                        <div>
                                            <Icon type="right" />
                                        </div>                                              
                                    </span>
                                    
                                </li>
                        
                                <li><a>網店限定✨</a></li>
                        
                                <li><a>皇牌花膠</a></li>
                        
                                <li><a>冬蟲夏草</a></li>
                        
                                <li><a>即飲燉湯</a></li>
                        
                                <li><a>養生即食系列</a></li>
                            
                                <li><a>罐頭鮑魚</a></li>
                        
                                <li><a>送禮套裝🎁</a></li>
                        
                                <li><a>原箱優惠📦</a></li>
                            
                                <li><a>日本元貝</a></li>
                        
                                <li><a>海參燕窩</a></li>
                        
                                <li><a>冬菇海味</a></li>
                        
                                <li><a>日常湯料</a></li>
                        
                                <li><a>零食花茶</a></li>
                            </ul>

                            <ChangeSubMenu/>
                                                                                                                                                                                                                                                                                                                                                                                                                    
                    </div> 
                    
                </li>
                <li className={s.header_lower_right_mainli}><a>New! 最新產品</a></li>
                <li className={s.header_lower_right_mainli}><a>企業訂購🛍️</a></li>
                <li className={s.header_lower_right_mainli}><a>53間分店地址</a></li>
                <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                    <a>尚品教室</a>
                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                    <div className={s.submenu_1}>
                        <ul className={s.submenu_ul}>
                            <li><a>海味新手專用👩‍🍳食譜、小知識▶️</a></li>
                        
                            <li><a>【花膠食譜】2款簡易快速食譜👩‍🍳</a></li>
                        
                            <li><a>【花膠小知識】🧐拆解點揀花膠大小</a></li>

                            <li><a>【花膠小知識】2招教你肉眼分辨花膠公乸🤩</a></li>
                        
                            <li><a>【蟲草小知識】尚品野生蟲草5大特點👑</a></li>

                            <li><a>【蟲草小知識】食蟲草增強免疫力🛡️</a></li>

                            <li><a>【蟲草小知識】點保存蟲草最適合?</a></li>

                            <li><a>【遼參小知識】遼參有助改善虛弱體質🤩</a></li>

                        </ul>
                    </div>


                </li>
                <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                    <a>關於尚品</a>
                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                    <div className={s.submenu_1}>
                        <ul className={s.submenu_ul}>
                            <li><a>品牌故事</a></li>
                        
                            <li><a>尚品會員計劃</a></li>
                        
                            <li><a>網上付款及送貨方式</a></li>
                        
                            <li><a>聯絡我們</a></li>
                        </ul>
                    </div>

                </li>
                <li className={s.header_lower_right_mainli}>
                    <a>加入我們</a>
                    
                </li> */}
            </ul>
            
            <span className={s.header_search}>
                <input type="search" placeholder="搜尋商品" autoComplete="off" style={{outline: "none",
borderStyle: "none"}}></input>
                <a>
                    <Icon className={s.menu_icon_search} type="search"></Icon>
                </a>
            </span>
        </nav>
        
    )
}


function Header(props){
    const[pushMenu, setPushMenu] = useState(false);
    const[haveActiveSubMenu, setHaveActiveSubMenu] = useState(false);



    function handleCloseButtonClickForPushMenu(){
        setPushMenu((prev) => !prev);
    }

    // const [isChanged, setIsChanged] = useState(false);

    const [isChangedIndex, setIsChangedIndex] = useState(new Map());

    const[isCurrency, setIsCurrency] = useState("HKD"); //not working 

    const[openSearchPage, setOpenSearchPage] = useState(false);
    
    function ChangeSubMenu_handleClick(index, sub_index, sub_sub_index){
        // setIsChanged(!isChanged);
        
        let newIsChangedIndex = isChangedIndex;
        //let newIsChangedIndex = isChangedIndex;

        if(newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == -1 )
            return;
        else if (newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == 1){ 
            console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(), "become 0");    
            newIsChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);
            console.log(newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "become new value");
            setHaveActiveSubMenu(false);
            
        }

        else{
            console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(), "become 1");
            console.log(newIsChangedIndex, "!!!become after newMenuIndex000")
            newIsChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 1);
            console.log(newIsChangedIndex, "!!!become after newMenuIndex111")
            console.log(newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "become new value");
            setHaveActiveSubMenu(true);
        }

        //isChangedIndexRef.current = newIsChangedIndex;
        setIsChangedIndex(newIsChangedIndex);
        console.log(newIsChangedIndex, "!!!become after newMenuIndex")
    }



    useEffect(() => {
        props.menuInformation.map((content, index) => {
            if (content.data.length > 0)
            {
                content.data.map((sub_content, sub_index) => {
                    console.log(sub_content, "sub_content")
                    sub_content.map((sub_sub_content, sub_sub_index) => {
                        //console.log(sub_sub_content, "sub_sub_contentofuseEffect")
                        if(sub_sub_content.sub_category.length == 0) isChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), -1);
                        else isChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);

                        console.log(isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "eachindex");
                    }) 
                    console.log(isChangedIndex, "array");
            })
            }

        }

         
         
         )
    },[])


    function ChangeSubMenu_toOriginal(){
        // setIsChanged(false);
        setHaveActiveSubMenu(false);
        let newMenuIndex = isChangedIndex;

        props.menuInformation.map((content, index) => {
            if (content.data.length > 0)
            {
                content.data.map((sub_content, sub_index) => {
                    sub_content.map((sub_sub_content, sub_sub_index) => {
                        if(sub_sub_content.sub_category.length > 0) newMenuIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);
                    })
                    //console.log(menuIndex, "array");
            })
            }
            // else if(content.data.length === 1)
            // {
            //     content.data.map((sub_content, sub_index) => {
            //         if(sub_content.sub_category.length == 1){
            //             newMenuIndex.set(index.toString() + sub_index.toString(), 0);
            //         }
             
            // }) 
            // }
        
        }
        )

        setIsChangedIndex(newMenuIndex);
    }


    // function ChangeSubMenu(){
    //     if (!isChanged)
    //     {
    //         return(
    //             <ul className={s.submenu_ul}>
    //             <li><a>急凍食品❄️</a></li>
            
    //             <li><a>海味過大禮🎁</a></li>
    
    //             <li>
    //                 <a>海外送貨🌎美國、英國、澳洲、加拿大</a>
    //                 <span className={s.submenu_icon_right}>
    //                     <div >
    //                         <Icon type="right" />
    //                     </div>                                              
    //                 </span>
    //             </li>
    
    //             <li><a>抵買免運套裝🎊</a></li>
    
    //             </ul> 


    //         )
    //     }

    //     else {
    //         return(
                // <ul className={s.submenu_ul} style={{backgroundColor:"rgb(255,255,255)"}} >
                
                // <li className={s.submenu_title_li}>
                //     <b className={s.submenu_title}>初夏Chill抵☀️</b>
                    
                //     <span className={s.submenu_icon_close}>
                //         <div>
                //             <Icon onClick={ChangeSubMenu_toOriginal} type="close"/>
                //         </div>
                        
                //     </span>
                // </li>
                

    //             <li><a>此分類全部商品</a></li>
            
    //             <li><a>初夏Chill抵☀️每週Chill抵價</a></li>
    
    //             <li><a>初夏Chill抵☀️買1送1</a></li>
    
    //             </ul> 
    //         )
    //     }
    // }

    function getCurrency(props){
        if(props.value == "HKD"){
            setIsCurrency("HKD");
        }
        if(props.value == "CNY"){
            setIsCurrency("CNY");
        }
        if(props.value == "AUD"){
            setIsCurrency("AUD");
        }
        if(props.value == "GBP"){
            setIsCurrency("GBP");
        }
        else{
            setIsCurrency("CAD");
        }
    }

    function handleCloseButtonClick(){
        setOpenSearchPage((prev) => !prev)
    }

    function getcurrencyClassName(props){
        const childId = props.target.querySelector('s.header_lower_right_upper_changecurrency_list_option_input').getAttribute('id');
        if (childId == "currency-hkd"){
            setIsCurrency("HKD");
        }

        if(childId == "currency-cny"){
            setIsCurrency("CNY");
        }
        if(childId == "currency-aud"){
            setIsCurrency("AUD");
        }
        if(childId == "currency-gbp"){
            setIsCurrency("GBP");
        }
        else{
            setIsCurrency("CAD");
        }
    }

    // function Menu(props){
    //     return(
    //     <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
    //         <a>{props.title}</a>
    //         <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
    //         <div onMouseLeave={ChangeSubMenu_toOriginal} className={s.submenu_1} style={{backgroundColor: isChanged ? "rgb(240,240,240)" : "" ,borderRight: isChanged ? "1px solid rgb(221,221,221)":""}}>
            
    //             <ul className={s.submenu_ul}>
    //                 <li><a>全站商品</a></li>
                
    //                 <li style={{backgroundColor: isChanged ?  "rgb(255,255,255)": ""}}>
    //                     <a onClick={ChangeSubMenu_handleClick}> 初夏Chill抵☀️</a>
    //                     <span className={s.submenu_icon_right}>
    //                         <div>
    //                             <Icon type="right" />
    //                         </div>                                              
    //                     </span>
                        
    //                 </li>
            
    //                 <li><a>網店限定✨</a></li>
    //             </ul>
    
    //             <ChangeSubMenu/>
                                                                                                                                                                                                                                                                                                                                                                                                      
    //         </div> 
        
    //     </li>
    //     )
    // }
    
    if(!props.isMobile)
    {
        console.log(isChangedIndex, "indexarray");
        return(
            <div className={s.header_setting} 
            //ref={Headerref}
            >  
    
                <div className={s.header_upper}>
                    <a className={s.header_upper_inner}>
    
                        <span>
                            【網店突擊💥】買任何產品領券即送北海道元貝😍
                        </span>
                        <span style={{marginLeft:"8px"}}>
                            <Icon type="right" />
                        </span>
                    </a>
                </div>
    
                <div className={s.header_lower}>
                    <div className={s.header_lower_image}>
                        <a style={{height:"100%"}}>
                            <img src="/image/sunnyimage/logo.png">
    
                            </img>
                        </a>
    
                    </div>
    
                    <div className={s.header_lower_right}>
                        <div style={{height:"50%"}}>
                            <ul className={s.header_lower_right_upper}>
                                <li className={s.header_lower_right_upper_icon_setting_li} style={{display:"flex"}}>
                                    <a className={s.header_lower_right_upper_changecurrency_a} style={{textDecoration:"none"}}>
                                        <Icon type="pay-circle" />
                                        <span style={{    lineHeight: "18px" ,fontSize: "12px", textDecoration:"none"}}>{isCurrency}</span>
                                        <Icon type="down" />
                                        <div className={s.header_lower_right_upper_changecurrency}>
                                            <div className={s.header_lower_right_upper_changecurrency_list_title}>幣別</div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input id="currency-hkd" type="radio" value="HKD" className={s.header_lower_right_upper_changecurrency_list_option_input} name="currency"></input>
                                                <label htmlFor="currency-hkd" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>HKD 港幣</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input id="currency-cny" type="radio" value="CNY" className={s.header_lower_right_upper_changecurrency_list_option_input} name="currency"></input>
                                                <label htmlFor="currency-cny" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>CNY 人民币</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input id="currency-aud" type="radio" value="AUD" className={s.header_lower_right_upper_changecurrency_list_option_input} name="currency"></input>
                                                <label htmlFor="currency-aud" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>AUD Australian dollar</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input id="currency-gbp" type="radio" value="GBP" className={s.header_lower_right_upper_changecurrency_list_option_input} name="currency"></input>
                                                <label htmlFor ="currency-gbp" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>GBP Pound sterling</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input id="currency-cad" type="radio" value="CAD" className={s.header_lower_right_upper_changecurrency_list_option_input} name="currency"></input>
                                                <label htmlFor="currency-cad" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>CAD Canadian dollar</div>
                                            </div>
                                        </div>
                                    </a>
    
    
                                </li>
                                <li className={s.header_lower_right_upper_icon_setting_li} >
                                    <a style={{display:"flex", gap:"5px", position:"relative" ,textDecoration:"none"}}>
                                        <Icon type="global" />
                                        <span style={{    lineHeight: "18px" ,fontSize: "12px"}}>中文 (香港)</span>
                                        <Icon type="down" />
                                        <div className={s.header_lower_right_upper_changecurrency}> {/*this chnagecurrency classname also allow to use for the language switch part*/}
                                            <div className={s.header_lower_right_upper_changecurrency_list_title}>幣別</div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input name="radio-group" type="radio" id="en-US" className={s.header_lower_right_upper_changecurrency_list_option_input}></input>
                                                <label htmlFor="en-US " className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>English (US)</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input name="radio-group" type="radio" id="zh-HK" className={s.header_lower_right_upper_changecurrency_list_option_input}></input>
                                                <label htmlFor="zh-HK" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>中文 (香港)</div>
                                            </div>
                                            <div onClick={getcurrencyClassName} className={s.header_lower_right_upper_changecurrency_list_option}>
                                                <input name="radio-group" type="radio" id="zh-CN" className={s.header_lower_right_upper_changecurrency_list_option_input}></input>
                                                <label htmlFor="zh-CN" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
                                                <div className={s.option_name}>中文 (简体)</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={s.header_lower_right_upper_icon_setting_li} style={{display:"flex"}}>
                                    <a className={s.header_lower_right_upping_shoppingcart} style={{display:"flex", textDecoration:"none"}} >
                                    <Icon type="shopping-cart" />
                                    
                                    <span className={s.header_lower_right_upping_shoppingcart_number}>
                                        0
                                    </span>
                                    <div className={s.header_lower_right_upping_shoppingcart_content}>
                                        <div>
                                            <div className={s.header_lower_right_upping_shoppingcart_nocontent}>
                                                購物車內目前沒有商品
                                            </div>
                                        </div>
                                    </div>
                                    </a>

                                </li>
    
                                <li className={s.header_lower_right_upper_icon_setting_li}>
                                    <a className={s.header_lower_right_upping_myaccount}>
                                        <Icon type="user"/>
                                        <div className={s.header_lower_right_upping_myaccount_content}>
                                            <ul className={s.header_lower_right_upping_myaccount_content_ul}>
                                                <li className={s.header_lower_right_upping_myaccount_content_li}> 
                                                    <a className={s.header_lower_right_upping_myaccount_content_li_a} href="#">
                                                        訂單查詢
                                                    </a>
                                                </li>
                                                <li className={s.header_lower_right_upping_myaccount_content_li}> 
                                                    <a className={s.header_lower_right_upping_myaccount_content_li_a} href="#">
                                                        會員專區
                                                    </a>
                                                </li>
                                                <li className={s.header_lower_right_upping_myaccount_content_li}> 
                                                    <a className={s.header_lower_right_upping_myaccount_content_li_a} href="#">
                                                        我的收藏
                                                    </a>
                                                </li>
                                                <li className={s.header_lower_right_upping_myaccount_content_li}> 
                                                    <a className={s.header_lower_right_upping_myaccount_content_li_a} href="#">
                                                        我的優惠券
                                                    </a>
                                                </li>
                                                <li className={s.header_lower_right_upping_myaccount_content_li}> 
                                                    <a className={s.header_lower_right_upping_myaccount_content_li_a} href="#">
                                                        會員登入/註冊
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </a> 



                                </li>
    
                                <li className={s.header_lower_right_upper_icon_setting_li}>
                                    <a>
                                        <Icon type="mobile"/>
                                    </a>                               
                                </li>
                            </ul>
                        </div>
                        <Menu menuInformation={props.menuInformation} ChangeSubMenu_toOriginal={ChangeSubMenu_toOriginal} isChangedIndex={isChangedIndex} haveActiveSubMenu={haveActiveSubMenu} 
                        ChangeSubMenu_handleClick={ChangeSubMenu_handleClick}/>
                        {/* <nav style={{height:"50%"}}>
                            <ul className={s.header_lower_right_mainul}>
                                {
                                    props.menuInformation.map((content, index) => {
                                        return(
                                            <>
                                                <li className={s.header_lower_right_mainli} style={{position: content.data.length > 0 ? "relative" :""}}>
                                                    <a>{content.title}</a>
                                                    
                                                {
                                                    content.data.length > 0 && (
                                                        <>
                                                            <span>
                                                                <i className={s.menu_icon_down}><Icon type="down" /></i>
                                                            </span>

                                         
                                                            <>
                                                                <div onMouseLeave={ChangeSubMenu_toOriginal} className={s.submenu_1} style={{backgroundColor: isChangedIndex.get(index.toString()) == 1 ? "rgb(240,240,240)" : "" , borderRight: isChangedIndex.get(index.toString()) == 1 ? "1px solid rgb(221,221,221)":""}}>
                                                                    {
                                                                        content.data.map((sub_content, sub_index) => {
                                                                            console.log(sub_content, "sub_content")
                                                                            return(
                                                                                <ul className={s.submenu_ul}>  
                                                                                {   
                                                                                    
                                                                                    sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                                        return(
                                                                                            <>
                                                                                           {
                                                                                            sub_sub_index == 0 ? (
                                                                                                <li>
                                                                                                    <a>{sub_sub_content.name}
                                                                                                    {
                                                                                                        sub_sub_content.sub_category != 0 && (
                                                                                                            <span className={s.submenu_icon_right}>
                                                                                                                <div>
                                                                                                                    <Icon type="right" />
                                                                                                                </div>                                              
                                                                                                            </span>
                                                                                                        )
                                                                                                    }
                                                                                                    </a>
                                                                                                </li>
                                                                                            ) : 
                                                                                            (
                                                                                                <li style={{display: haveActiveSubMenu == true ? "none" :""}}> 
                                                                                                    <a>{sub_sub_content.name}
                                                                                                    {
                                                                                                        sub_sub_content.sub_category != 0 && (
                                                                                                            <span className={s.submenu_icon_right}>
                                                                                                                <div>
                                                                                                                    <Icon type="right" />
                                                                                                                </div>                                              
                                                                                                            </span>
                                                                                                        )
                                                                                                    }
                                                                                                    </a>
                                                                                                </li>
                                                                                            )
                                                                                           }
                                                                                            </>
                                                                                        
                                                                                        )
                                                                                    })

                                                                                }

                                        
                                                                                
                                                                                </ul>
                                                                            )

                                                                        }
                                                                            
                                                                        )

                                                                    }    

                                                                    {
                                                                        content.data.map((sub_content, sub_index) => {
                                                                            //console.log(sub_content, "sub_content1") //sub_content correspond to elements of data , [[],[]]
                                                                            
                                                                            return(<>
                                                                                 
                                                                                {
                                                                                    sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                                        //console.log(sub_sub_content.sub_category, "sub_sub_content.sub_category")
                                                                                        return(
                                                                                            <>
                                                                                           
                                                                                            {
                                                                                            sub_sub_content.sub_category.length != 0 && (  //sub_sub_content correspond to data-> one of two component for e.g data of 商品分類 -> element of that componenet/array member 
                                                                                            
                                                                                            <ul className={s.submenu_ul} style={{backgroundColor:"rgb(255,255,255)", display: isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == 0 ? "none" : ""}} >
                                                                                                <li className={s.submenu_title_li}>
                                                                                                    <b className={s.submenu_title}>{sub_sub_content.name}</b>
                                                                                                    
                                                                                                    <span className={s.submenu_icon_close}>
                                                                                                        <div>
                                                                                                            <Icon onClick={ChangeSubMenu_toOriginal} type="close"/>
                                                                                                        </div>
                                                                                                        
                                                                                                    </span>
                                                                                                </li>

                                                                                                {sub_sub_content.sub_category.map((right_content, right_index) => {// right_content is the submenu of the element on the menu of the left part .
                                                                                                    console.log(index,sub_index,sub_sub_index,"toString");
                                                                                                    console.log(isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()),"isChangedIndex")
                                                                                                    console.log(right_content.name, "right_content.name");
                                                                                                    console.log(right_index,"right_index")
                                                                                                    return(
                                                                                                        
                                                                                                        <>
                                                                                                    
                                                                                                     
                                                                                                        
                                                                                                        
                                                                                                            <li><a>{right_content.name}</a></li>
                                                                                            
                                                                                                        
                                                                                                        
                                                                                                        </>
                                                                                                        );
                                                                                                })
                                                                                                }

                                                                                            </ul>
                                                                                        )
                                                                                        }
                                                                                        </>
                                                                                        )
                                    
                                                                                    }
                                                                                    )
                                                                                }
                                                                                </> )
                                                                            
                                                                        }
                                                                            )
                                                                        }            
                                                                </div>
                                                            </>
                                                
                                            
                                                
                                                        </>
                                                    )
                                                }
                                                </li>
                                            </>
                                        )})
                                }

                                {/* <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                                    <a>商品分類</a>
                                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                                    <div onMouseLeave={ChangeSubMenu_toOriginal} className={s.submenu_1} style={{backgroundColor: isChanged ? "rgb(240,240,240)" : "" ,borderRight: isChanged ? "1px solid rgb(221,221,221)":""}}>
                                        
                                            <ul className={s.submenu_ul}>
                                                <li><a>全站商品</a></li>
                                            
                                                <li style={{backgroundColor: isChanged ?  "rgb(255,255,255)": ""}}>
                                                    <a onClick={ChangeSubMenu_handleClick}> 初夏Chill抵☀️</a>
                                                    <span className={s.submenu_icon_right}>
                                                        <div>
                                                            <Icon type="right" />
                                                        </div>                                              
                                                    </span>
                                                    
                                                </li>
                                        
                                                <li><a>網店限定✨</a></li>
                                        
                                                <li><a>皇牌花膠</a></li>
                                        
                                                <li><a>冬蟲夏草</a></li>
                                        
                                                <li><a>即飲燉湯</a></li>
                                        
                                                <li><a>養生即食系列</a></li>
                                            
                                                <li><a>罐頭鮑魚</a></li>
                                        
                                                <li><a>送禮套裝🎁</a></li>
                                        
                                                <li><a>原箱優惠📦</a></li>
                                            
                                                <li><a>日本元貝</a></li>
                                        
                                                <li><a>海參燕窩</a></li>
                                        
                                                <li><a>冬菇海味</a></li>
                                        
                                                <li><a>日常湯料</a></li>
                                        
                                                <li><a>零食花茶</a></li>
                                            </ul>
    
                                            <ChangeSubMenu/>
                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                    </div> 
                                    
                                </li>
                                <li className={s.header_lower_right_mainli}><a>New! 最新產品</a></li>
                                <li className={s.header_lower_right_mainli}><a>企業訂購🛍️</a></li>
                                <li className={s.header_lower_right_mainli}><a>53間分店地址</a></li>
                                <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                                    <a>尚品教室</a>
                                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                                    <div className={s.submenu_1}>
                                        <ul className={s.submenu_ul}>
                                            <li><a>海味新手專用👩‍🍳食譜、小知識▶️</a></li>
                                      
                                            <li><a>【花膠食譜】2款簡易快速食譜👩‍🍳</a></li>
                                       
                                            <li><a>【花膠小知識】🧐拆解點揀花膠大小</a></li>
    
                                            <li><a>【花膠小知識】2招教你肉眼分辨花膠公乸🤩</a></li>
                                      
                                            <li><a>【蟲草小知識】尚品野生蟲草5大特點👑</a></li>
    
                                            <li><a>【蟲草小知識】食蟲草增強免疫力🛡️</a></li>
    
                                            <li><a>【蟲草小知識】點保存蟲草最適合?</a></li>
    
                                            <li><a>【遼參小知識】遼參有助改善虛弱體質🤩</a></li>
    
                                        </ul>
                                    </div>
    
    
                                </li>
                                <li className={s.header_lower_right_mainli} style={{position:"relative"}}>
                                    <a>關於尚品</a>
                                    <span><i className={s.menu_icon_down}><Icon type="down" /></i></span>
                                    <div className={s.submenu_1}>
                                        <ul className={s.submenu_ul}>
                                            <li><a>品牌故事</a></li>
                                      
                                            <li><a>尚品會員計劃</a></li>
                                       
                                            <li><a>網上付款及送貨方式</a></li>
                                      
                                            <li><a>聯絡我們</a></li>
                                        </ul>
                                    </div>
    
                                </li>
                                <li className={s.header_lower_right_mainli}>
                                    <a>加入我們</a>
                                    
                                </li> 
                            </ul>
                            
                            <span className={s.header_search}>
                                <input type="search" placeholder="搜尋商品" autoComplete="off" style={{outline: "none",
        borderStyle: "none"}}></input>
                                <a>
                                    <Icon className={s.menu_icon_search} type="search"></Icon>
                                </a>
                            </span>
                        </nav> 
                        */}
                       
                        <div>
    
                        </div>
                    </div>
                </div>
    
                
            </div>
        )

    }
    else
    {
        return(
            <div>
                <div>
                    <PushMenuSection 
                    pushMenuInformation={props.pushMenuInformation}              
                    handleCloseButtonClickForPushMenu={handleCloseButtonClickForPushMenu} pushMenu={pushMenu}/>
                </div>
                <div className={s.header_setting} 
                //ref={Headerref}
                >  
                    <section style={{ display: openSearchPage == false ? "none": ""}}>
                        <form>
                            <div className={ss.header_search_container_mobile}>   
                                <a className={ss.header_search_container_return_button_mobile}>
                                    <Icon onClick={handleCloseButtonClick} type="close" />
                                </a>
                                <div className={ss.header_search_container_search_input_mobile}>
                                    <span><Icon type="search" /></span>
                                    <input placeholder="搜尋商品" autoComplete="off"></input>
                                </div>
                                <a>
                                    <span className={ss.header_search_button_mobile}>搜尋</span>
                                </a>
                                <div className={ss.header_search_hot_keyword_mobile}>
                                    <div className={ss.header_search_hot_keyword_container_mobile}>
                                        <label></label>
                                        <ul className={ss.header_search_hot_keyword_flex_mobile}>
                                        {
                                            props.hotKeyWordsForSearch.map((keyword) => (
                                                <li>
                                                    <a>{keyword}</a>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
        
                    <div className={s.header_upper}>
                        <a className={s.header_upper_inner}>
        
                            <span>
                                【網店突擊💥】買任何產品領券即送北海道元貝😍
                            </span>
                            <span style={{marginLeft:"8px"}}>
                                <Icon type="right" />
                            </span>
                        </a>
                    </div>
        
                    <div className={ss.test_header_lower_mobile}>
                        <a className={ss.header_lower_menu_icon_mobile}>
                            <Icon onClick={handleCloseButtonClickForPushMenu} type="bars" />
                        </a>
        
                        <div className={ss.header_lower_image_mobile}>
                            <a style={{height: "100%"}}>
                                <img src="/image/sunnyimage/logo.png"/>                           
                            </a>
                        </div>

                        
                        <div className={ss.header_lower_right_submenu_mobile}>
                            <ul>
                                <li>
                                    <a>
                                        <Icon className={ss.header_lower_right_submenu_icon_mobile} type="user"/>
                                    </a>
                                </li>
                            

                            
                                <li style={{position: "relative"}}>
                                    <a>
                                        <Icon className={ss.header_lower_right_submenu_icon_mobile} type="shopping-cart" />
                                    </a>
                                    <span className={ss.header_lower_right_submenu_shoppingcart_number_mobile}>0</span>
                                </li>
                            

                        
                                <li>
                                    <a onClick={handleCloseButtonClick}>
                                        <Icon className={ss.header_lower_right_submenu_icon_mobile} type="search" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Header /*Headerref*/;
