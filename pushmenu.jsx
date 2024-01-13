import React , {useState, useRef, useEffect} from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import cx from 'classnames';
import {Icon} from 'antd';


function PushMenuContent(props){



    useEffect(() => {
        //props.pushMenuInformation.map((content, index) => { original
        props.category.map((content, index) => {
            content.data.map((sub_content, sub_index) => {
                    if(sub_content.sub_category.length  != 0){
                        menuIndex.set(index.toString() + sub_index.toString(), 0);
                        //console.log(index, "pushindex");
                        //console.log(sub_index, "pushsubindex");
                        //console.log(menuIndex.get(index.toString() + sub_index.toString()), "skr");
                    }
                    else{
                        menuIndex.set(index.toString() + sub_index.toString(), -1);
                        //console.log(index, "pushindex");
                        //console.log(sub_index, "pushsubindex");
                        //console.log(menuIndex.get(index.toString() + sub_index.toString()), "skr2");
                    }
                    //console.log(menuIndex, "array");
            }
         ) })
    },[])

    const [menuIndex, setMenuIndex] = useState(new Map());

    function handleClickActiveSubMenu(index, subindex){

        let newMenuIndex = menuIndex;

        if(menuIndex.get(index.toString() + subindex.toString()) == -1 )
            return;
        if (menuIndex.get(index.toString() + subindex.toString()) == 1){     
            newMenuIndex.set(index.toString() + subindex.toString()), 0;}

        else{
            newMenuIndex.set(index.toString() + subindex.toString(), 1);
        }
        setMenuIndex(newMenuIndex);
        //console.log(menuIndex, "new_array");
    }

    return(

        (
            <>
            {/*{props.pushMenuInformation.map((content, index) => {    /original */}
            {props.category.map((content, index) => { 
                //console.log(menuIndex, "new_array!!!")
                return (
                    <section>

                    <div className={ss.push_menu_section_title_mobile} style={{padding: index == 2 ? "0 12px": ""}}>{content.title}</div>
                    <div className={ss.push_menu_section_content_mobile}>
                    <ul>
                {
                    content.data.map((sub_content,sub_index) => {
                    return(
                    <li>
                        <a href="#" onClick={ () => handleClickActiveSubMenu(index, sub_index)}  style={{backgroundColor: menuIndex.get(index.toString() + sub_index.toString()) == 1 ? "rgb(248, 248, 248)":""}} className={ss.push_menu_section_content_text_container_mobile}>
                            <div className={ss.push_menu_section_content_text_mobile}>
                                {sub_content.name}
                            </div>
                
                            {
                                sub_content.sub_category.length != 0 ? (
                                    <div className={ss.push_menu_section_content_submenu_button_container_mobile} >
                                        <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: menuIndex.get(index.toString() + sub_index.toString()) == 1 ? "180deg":"0deg"}} type="down" />
                                    </div> 
                                ) : <></>
                            }
                        </a>
                        {
                            sub_content.sub_category.length != 0 ? (
                                <ul className={ss.push_menu_submenu} style={{display: menuIndex.get(index.toString() + sub_index.toString()) == 1 ? "block" :""}}>
                                {   sub_content.sub_category.map((sub_content) => (
                                        <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>{sub_content.name}</div></a></li>
                                    ))
                                }    
                                </ul>
                            ) : <></>
                        }
                    </li>
                    
                    );})
                }
                    </ul>
                </div>
                </section>   
                )
                }

            )}
        
        </>
        )
    )
}


function PushMenuSection(props){

    const componentRef = useRef(null);
   
    const handleTouchStart = (event) => {
        // Check if the touch event occurred outside the component
        if (componentRef.current && !componentRef.current.contains(event.target) && props.pushMenu == true) {
          props.handleCloseButtonClickForPushMenu();
          document.removeEventListener('touchstart', handleTouchStart);
        }
        if (props.pushMenu == false) {
            document.removeEventListener('touchstart', handleTouchStart);
          }
      };

    useEffect(() => {

        // Add event listeners to document object
        document.removeEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchstart', handleTouchStart);
       
    
    
    
      },[props.pushMenu]);

    const[activeSubmenu, setActiveSubmenu] = useState([]);
    const[activeLanguagebox, setActiveLanguagebox] = useState(false);
    const[activeCurrencybox, setActiveCurrencybox] = useState(false);
    

    // const[activeSubmenu_2, setActiveSubmenu_2] = useState(false);
    // const[activeSubmenu_3, setActiveSubmenu_3] = useState(false);
    // const[activeSubmenu_4, setActiveSubmenu_4] = useState(false);
    // const[activeSubmenu_5, setActiveSubmenu_5] = useState(false);
    // const[activeSubmenu_6, setActiveSubmenu_6] = useState(false);

    function handleClickActiveLanguageBox(){
        setActiveLanguagebox((prev) => !prev);
    }

    function handleClickActiveCurrencyBox(){
        setActiveCurrencybox((prev) => !prev);
    }

    function handleClickActiveSubMenu(setActiveSubmenu, index){

        setActiveSubmenu((prev) => {
            const newArray = [...prev];
            newArray[index] = !newArray[index];
            return newArray;
        });
    }
      
    return(
        
        <div ref={componentRef} className={ss.push_menu_container_mobile} style={{left: props.pushMenu == false ? "": "0", width: activeLanguagebox == true || activeCurrencybox == true ? "100%": "80%", overflowY: activeLanguagebox == true || activeCurrencybox == true ? "hidden" : ""}}>
            <a className={ss.push_menu_return_button_mobile}>
                <Icon onClick={() => {props.handleCloseButtonClickForPushMenu(); document.removeEventListener('touchstart', handleTouchStart);}} type="close" />
            </a>
            <div className={ss.push_menu_image_mobile}>
                <a href="#">
                    <img src="/image/sunnyimage/logo.png" ></img>
                </a>
            </div>
            <div>
                {/* <section>
                    <div className={ss.push_menu_section_title_mobile}></div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>

                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>限時折扣</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>優惠券</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>瀏覽紀錄</div></a></li>
                            
                        </ul>
                    </div>
                </section> */}
                <PushMenuContent pushMenuInformation={props.pushMenuInformation} activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu} 
                handleClickActiveSubMenu={handleClickActiveSubMenu} category={props.category}/> 
                {/* <section>
                    <div className={ss.push_menu_section_title_mobile}>分類</div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>全站商品</div></a></li>
                            <li><a href="#" onClick={ () => handleClickActiveSubMenu(activeSubmenu_1, setActiveSubmenu_1)} style={{backgroundColor: activeSubmenu_1 == true ? "rgb(248, 248, 248)":""}} className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>初夏Chill抵☀️</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile} >
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_1 == true ? "180deg":"0deg"}} type="down" />
                                </div>        
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_1 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>激平五六日📣</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>網店限定✨</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>皇牌花膠</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>冬蟲夏草</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>即飲燉湯</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>養生即食系列</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>罐頭鮑魚</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>送禮套裝🎁</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>原箱優惠📦</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>日本元貝</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>海參燕窩</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>冬菇海味</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>日常湯料</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>零食花茶</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>急凍食品❄️</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>海味過大禮🎁</div></a></li>
                            <li><a href="#" onClick={ () => handleClickActiveSubMenu(activeSubmenu_2, setActiveSubmenu_2)} style={{backgroundColor: activeSubmenu_2 == true ? "rgb(248, 248, 248)":""}} className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>海外送貨🌎美國、英國、澳洲、加拿大</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile}>
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_2 == true ? "180deg":"0deg"}} type="down" />
                                </div>                                   
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_2 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>抵買免運套裝🎊</div></a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className={ss.push_menu_section_title_mobile} style={{padding:"0 12px"}}></div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>New! 最新產品</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>企業訂購🛍️</div></a></li>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>54間分店地址</div></a></li>  
                            <li><a href="#" onClick={ () => handleClickActiveSubMenu(activeSubmenu_3, setActiveSubmenu_3)} style={{backgroundColor: activeSubmenu_3 == true ? "rgb(248, 248, 248)":""}} className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>尚品教室</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile}>
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_3 == true ? "180deg":"0deg"}}type="down" />
                                </div>                                   
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_3 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li>
                            <li><a onClick={ () => handleClickActiveSubMenu(activeSubmenu_4, setActiveSubmenu_4)} style={{backgroundColor: activeSubmenu_3 == true ? "rgb(248, 248, 248)":""}} href="#" className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>關於尚品</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile}>
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_4 == true ? "180deg":"0deg"}} type="down" />
                                </div>                                   
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_4 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li>    
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>加入我們</div></a></li>       
                        </ul>
                    </div>
                </section>
                <section></section>
                    <div className={ss.push_menu_section_title_mobile}>門市</div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>門市資訊</div></a></li>            
                        </ul>
                    </div>
                <section>
                    <div className={ss.push_menu_section_title_mobile}>邀請活動</div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>邀請好友</div></a></li>            
                        </ul>
                    </div>
                </section>
                <section>
                    <div className={ss.push_menu_section_title_mobile}>商店資訊</div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a onClick={ () => handleClickActiveSubMenu(activeSubmenu_5, setActiveSubmenu_5)} style={{backgroundColor: activeSubmenu_5 == true ? "rgb(248, 248, 248)":""}} href="#" className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>關於我們</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile}>
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_5 == true ? "180deg":"0deg"}} type="down" />
                                </div>                                   
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_5 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li> 
                            <li><a onClick={ () => handleClickActiveSubMenu(activeSubmenu_6, setActiveSubmenu_6)} style={{backgroundColor: activeSubmenu_6 == true ? "rgb(248, 248, 248)":""}} href="#" className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>客服資訊</div>
                                <div className={ss.push_menu_section_content_submenu_button_container_mobile}>
                                    <Icon className={ss.push_menu_section_content_submenu_button_container_transition_mobile} style={{rotate: activeSubmenu_6 == true ? "180deg":"0deg"}} type="down" />
                                </div>                                   
                                </a>
                                <ul className={ss.push_menu_submenu} style={{display: activeSubmenu_6 == true ? "block" :""}}>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                    <li><a href="#" className={ss.push_menu_section_content_text_container_mobile }><div className={ss.push_menu_section_content_text_mobile}>Shopage</div></a></li>
                                </ul>
                            </li>          
                        </ul>
                    </div>
                </section>
                <section>
                    <div className={ss.push_menu_section_title_mobile}>門市</div>
                    <div className={ss.push_menu_section_content_mobile}>
                        <ul>
                            <li><a href="#" className={ss.push_menu_section_content_text_container_mobile}><div className={ss.push_menu_section_content_text_mobile}>門市資訊</div></a></li>            
                        </ul>
                    </div>
                </section> */}
           
                <section>
                <div className={ss.push_menu_section_title_mobile}>設定</div>
                <div className={ss.push_menu_section_content_mobile}>
                    <ul>
                        <li>
                            <a href="#" onClick={handleClickActiveLanguageBox} className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>
                                    <span className={ss.push_menu_content_text_icon_span}>
                                    <Icon className={ss.push_menu_content_text_icon} type="global" />
                                    語系
                                    </span>
                                </div>
                                <span className={ss.push_menu_changecurrencyAndLanguage_chosenOPtion}>中文 (香港)</span>
                            </a>
                            <div  style={{visibility : activeLanguagebox == true ? "visible" : ""}} className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox}>
                                <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_title}>
                                    <a onClick={handleClickActiveLanguageBox}>
                                        <Icon className={ss.push_menu_push_menu_changecurrencyAndLanguage_closeButton} type="close" />
                                    </a>
                                    <h2>語系選擇</h2>
                                </div>
                                <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_container}>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group" type="radio" id="en-US"></input>
                                        <label htmlFor="en-US "></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>English (US)</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group" type="radio" id="zh-HK"></input>
                                        <label htmlFor="zh-HK"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>中文 (香港)</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group" type="radio" id="zh-CN"></input>
                                        <label htmlFor="zh-CN"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>中文 (简体)</div>
                                    </div>
                                </div>
                            </div>

                        </li>            
                        <li>
                            <a href="#" onClick={handleClickActiveCurrencyBox} className={ss.push_menu_section_content_text_container_mobile}>
                                <div className={ss.push_menu_section_content_text_mobile}>
                                    <span className={ss.push_menu_content_text_icon_span}>
                                        <Icon className={ss.push_menu_content_text_icon} type="pay-circle-o" />
                                        幣別
                                    </span>
                                </div>
                                <span className={ss.push_menu_changecurrencyAndLanguage_chosenOPtion}>HKD</span>
                            </a>

                            <div  style={{visibility : activeCurrencybox == true ? "visible" : ""}} className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox}>
                                <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_title}>
                                    <a onClick={handleClickActiveCurrencyBox}>
                                        <Icon className={ss.push_menu_push_menu_changecurrencyAndLanguage_closeButton} type="close" />
                                    </a>
                                    <h2>幣別選擇</h2>
                                </div>
                                <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_container}>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group-2" type="radio" id="HKD"></input>
                                        <label htmlFor="HKD "></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>HKD 港幣</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group-2" type="radio" id="CNY"></input>
                                        <label htmlFor="CNY"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>CNY 人民币</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group-2" type="radio" id="AUD"></input>
                                        <label htmlFor="AUD"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>AUD Australian dollar</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group-2" type="radio" id="GBP"></input>
                                        <label htmlFor="GBP"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>GBP Pound sterling</div>
                                    </div>
                                    <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body}>
                                        <input name="radio-group-2" type="radio" id="CAD"></input>
                                        <label htmlFor="CAD"></label>
                                        <div className={ss.push_menu_push_menu_changecurrencyAndLanguage_middlebox_body_text}>CAD Canadian dollar</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </section>

                <section>
                    <div className={ss.push_menu_section_title_mobile} style={{padding:"0 12px"}}></div>
                    <div className={ss.push_menu_bottom_section}>
                        <ul>
                            <li className={ss.push_menu_socialapp}>
                                <a href="#">
                                    <img src='/image/sunnyimage/tool_box_image_3.png'></img>
                                </a>
                            </li>
                            <li className={ss.push_menu_socialapp}>
                                <a href="#">
                                    <img src='/image/sunnyimage/push_menu_image_1_instagram.webp'></img>
                                </a>
                            </li>
                            <li className={cx(ss.push_menu_socialapp, ss.push_menu_offical_app)}>
                                <a className={ss.push_menu_offical_app} href="#">
                                    <Icon className={ss.push_menu_offical_app_phoneicon} type="mobile" />官方APP
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    )
}


export default PushMenuSection;