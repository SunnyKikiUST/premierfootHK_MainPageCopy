import React, { useState, useEffect, useRef } from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import cx from 'classnames';
import { Icon } from 'antd';
import PushMenuSection from './pushmenu';
import { identity } from 'lodash';



//const Headerref = useRef(null);

function Menu(props) {
    const adjustmentRefs = useRef([]);

    useEffect(() => { //for adjusting the position of the submenus which are too close to the right edge of the webpage
        function adjustComponentPositions() {
            //console.log(adjustmentRefs, "xxxref")
            adjustmentRefs.current.forEach((ref) => {
                //console.log(ref, "xxxref.current")  
                if (!ref) {

                    return;
                }
                const componentRect = ref.getBoundingClientRect();
                //console.log(ref, "xxxeachcomponent")
                //console.log(window.innerWidth, "xxxinnerWidth");
                //console.log(componentRect.right, "xxxcomponentRect.right");
                if (componentRect.right > window.innerWidth) {
                    const newLeft = window.innerWidth - componentRect.right;
                    ref.style.left = `${newLeft}px`
                }
            });
        }
        adjustComponentPositions();
        window.removeEventListener('resize', adjustComponentPositions);
        window.addEventListener('resize', adjustComponentPositions);
    }, [adjustmentRefs]);




    return (
        <nav style={{ minHeight: "50%" }}>
            <ul className={s.header_lower_right_mainul}>
                {

                    props.category.map((content, index) => {
                        //const newRef = useRef(null);
                        //adjustmentRefs.current.push(newRef);
                        return (
                            <>
                                <li className={s.header_lower_right_mainli} style={{ position: content.data.length > 0 ? "relative" : "" }}>
                                    <a>{content.title}</a>

                                    {
                                        content.data.length > 0 && (
                                            <>
                                                <span>
                                                    <i className={s.menu_icon_down}><Icon type="down" /></i> {/*important*/}
                                                </span>


                                                <>
                                                    <div onMouseLeave={props.ChangeSubMenu_toOriginal} className={s.submenu_1} ref={element => adjustmentRefs.current.push(element)} style={{ backgroundColor: props.haveActiveSubMenu == true ? "rgb(240,240,240)" : "", borderRight: props.haveActiveSubMenu == true ? "1px solid rgb(221,221,221)" : "" }}>
                                                        {
                                                            content.data.map((sub_content, sub_index) => {
                                                                //console.log(sub_content, "sub_content")
                                                                return (
                                                                    sub_index == 0 ?
                                                                        <ul className={s.submenu_ul}>
                                                                            {

                                                                                sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                                    return (
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

                                                                        <ul className={s.submenu_ul} style={{ display: props.haveActiveSubMenu == true ? "none" : "" }}>
                                                                            {

                                                                                sub_content.map((sub_sub_content, sub_sub_index) => {

                                                                                    return (
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

                                                                return (<>

                                                                    {
                                                                        sub_content.map((sub_sub_content, sub_sub_index) => {
                                                                            //console.log(sub_sub_content.sub_category, "sub_sub_content.sub_category")
                                                                            return (
                                                                                <>

                                                                                    {
                                                                                        sub_sub_content.sub_category.length != 0 && (  //sub_sub_content correspond to data-> one of two component for e.g data of 商品分類 -> element of that componenet/array member 

                                                                                            <ul className={s.submenu_ul} style={{ backgroundColor: "rgb(255,255,255)", display: props.isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == 0 ? "none" : "" }} >
                                                                                                <li className={s.submenu_title_li}>
                                                                                                    <b className={s.submenu_title}>{sub_sub_content.name}</b>

                                                                                                    <span className={s.submenu_icon_close} onClick={() => props.ChangeSubMenu_toOriginal}>
                                                                                                        <div>
                                                                                                            <Icon onClick={props.ChangeSubMenu_toOriginal} type="close" />
                                                                                                        </div>

                                                                                                    </span>
                                                                                                </li>

                                                                                                {sub_sub_content.sub_category.map((right_content, right_index) => {// right_content is the submenu of the element on the menu of the left part .
                                                                                                    //console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(),"toString");
                                                                                                    //console.log(props.isChangedIndex,"xxx");
                                                                                                    const value = props.isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString());
                                                                                                    //console.log(value,"isChangedIndex");
                                                                                                    //console.log(right_content.name, "right_content.name");
                                                                                                    //console.log(right_index,"right_index");
                                                                                                    return (

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
                                                                </>)

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
                        )
                    })
                }

            </ul>

            <span className={s.header_search}>
                <input type="search" placeholder="搜尋商品" autoComplete="off" style={{
                    outline: "none",
                    borderStyle: "none"
                }}></input>
                <a>
                    <Icon className={s.menu_icon_search} type="search"></Icon>
                </a>
            </span>
        </nav>

    )
}


function Header(props) {
    function CategorySplitHandler(category) {  //this function is for converting category structure 
        // note that this function assume that the an element of category has at most 3 layers , say A >>> B >>> C
        // assuming that the category does not use the second ul element for each main title, we only conside first ul element
        //   **( suppose you can have two part of submenu once you click the specific main menu title
        //check the Menu return statment's code or the original website https://www.premierfood.com.hk/page/aimeechan-2023?lang=en-US
        //for details )

        let Position = 0;
        let FriendlyArrayStructure = [];

        while (Position < 3) {
            category.map((content, index) => {

                let ArrayForEachElement = content.name.split(">>>");
                if (Position == 0) {
                    let BreakConfirm = false;
                    for (const Friendlycontent of FriendlyArrayStructure) {
                        if (Friendlycontent.title == ArrayForEachElement[0]) {
                            BreakConfirm = true;
                            break;
                        }
                    }
                    if (!BreakConfirm) {
                        FriendlyArrayStructure.push({
                            "title": ArrayForEachElement[0],
                            "data": [] //only one ul element , there can be two, e.g [[],[]]
                        })
                    }
                    //console.log(FriendlyArrayStructure,"position: 0")
                }
                else {
                    let BreakConfirm = false;
                    for (let Friendlycontent of FriendlyArrayStructure) {
                        if (Friendlycontent.title == ArrayForEachElement[0]) {
                            if (Position == 1 && ArrayForEachElement.length > 1) {
                                if (Friendlycontent.data.length == 0) {
                                    Friendlycontent.data.push([]);
                                }
                                for (const Friendlydata of Friendlycontent.data[0]) {
                                    if (Friendlydata.name == ArrayForEachElement[1]) {
                                        BreakConfirm = true;
                                        break;
                                    }
                                }
                                if (!BreakConfirm) {
                                    Friendlycontent.data[0].push(
                                        {
                                            "name": ArrayForEachElement[1],
                                            "sub_category": []
                                        }
                                    )
                                }
                                //console.log(FriendlyArrayStructure,"position: 1")
                                break;
                            }
                            else if (Position == 2 && ArrayForEachElement.length > 2) {
                                for (let Friendlydata of Friendlycontent.data[0]) {
                                    if (Friendlydata.name == ArrayForEachElement[1]) {
                                        // if(Friendlydata.sub_category.length == 0){
                                        //     Friendlydata.sub_category.push(
                                        //         {
                                        //             "name": ArrayForEachElement[2],
                                        //             "sub_category":[]
                                        //         })
                                        //     break;
                                        // }
                                        for (let FriendlySubCategory of Friendlydata.sub_category) {
                                            if (FriendlySubCategory.name == ArrayForEachElement[2]) {
                                                BreakConfirm = true;
                                                break;
                                            }
                                        }
                                        if (!BreakConfirm) {
                                            Friendlydata.sub_category.push(
                                                {
                                                    "name": ArrayForEachElement[2],
                                                    "sub_category": []
                                                }
                                            )
                                        }
                                        //console.log(FriendlyArrayStructure,"position: 2")
                                        break;
                                    }
                                }
                            }
                        }
                    }

                }

            })
            ++Position;
        }

        return FriendlyArrayStructure;
    }
    const requiredCategory = CategorySplitHandler(props.category);

    function CategorySplitHandlerMobile(category) {
        //Mobile version of CategorySplitHeandler

        let Position = 0;
        let FriendlyArrayStructure = [];

        while (Position < 3) {
            category.map((content, index) => {

                let ArrayForEachElement = content.name.split(">>>");
                if (Position == 0) {
                    let isSpecialCase = false;
                    if (ArrayForEachElement.length == 1) {
                        //*special case
                        //because of the structure of pushmenu of the webpage, and if the element of category only has one layer, then we make the title = ""
                        // And make the original title to be the second layer
                        // Assuming that such element is unique in the category , saying that the original title will have same title with other elements
                        FriendlyArrayStructure.push({
                            "title": "",
                            "data": [
                                {
                                    "name": ArrayForEachElement[0],
                                    "sub_category": []
                                }
                            ]
                        })
                        isSpecialCase = true;
                    };
                    if (!isSpecialCase) {
                        let BreakConfirm = false;
                        for (const Friendlycontent of FriendlyArrayStructure) {
                            if (Friendlycontent.title == ArrayForEachElement[0]) {
                                BreakConfirm = true;
                                break;
                            }
                        }
                        if (!BreakConfirm) {
                            FriendlyArrayStructure.push({
                                "title": ArrayForEachElement[0],
                                "data": [] //for only one ul element , there can be two, e.g [[],[]]
                            })
                        }
                    }
                    //console.log(FriendlyArrayStructure,"position: 0")
                }
                else {
                    let BreakConfirm = false;
                    for (let Friendlycontent of FriendlyArrayStructure) {
                        if (Friendlycontent.title == ArrayForEachElement[0] && ArrayForEachElement[0] != "") { //ArrayForEachElement[0] != "" is for special case
                            if (Position == 1 && ArrayForEachElement.length > 1) {
                                for (const Friendlydata of Friendlycontent.data) {
                                    if (Friendlydata.name == ArrayForEachElement[1]) {
                                        BreakConfirm = true;
                                        break;
                                    }
                                }
                                if (!BreakConfirm) {
                                    Friendlycontent.data.push(
                                        {
                                            "name": ArrayForEachElement[1],
                                            "sub_category": []
                                        }
                                    )
                                }

                                break;
                            }
                            else if (Position == 2 && ArrayForEachElement.length > 2 && ArrayForEachElement[0] != "") { //ArrayForEachElement[0] != "" is for special case
                                for (let Friendlydata of Friendlycontent.data) {
                                    if (Friendlydata.name == ArrayForEachElement[1]) {
                                        // if(Friendlydata.sub_category.length == 0){
                                        //     Friendlydata.sub_category.push(
                                        //         {
                                        //             "name": ArrayForEachElement[2],
                                        //             "sub_category":[]
                                        //         })
                                        //     break;
                                        // }
                                        for (let FriendlySubCategory of Friendlydata.sub_category) {
                                            if (FriendlySubCategory.name == ArrayForEachElement[2]) {
                                                BreakConfirm = true;
                                                break;
                                            }
                                        }
                                        if (!BreakConfirm) {
                                            Friendlydata.sub_category.push(
                                                {
                                                    "name": ArrayForEachElement[2],
                                                    "sub_category": []
                                                }
                                            )
                                        }

                                        break;
                                    }
                                }
                            }
                        }
                    }

                }

            })
            ++Position;
        }

        return FriendlyArrayStructure;
    }
    const requiredCategoryMobile = CategorySplitHandlerMobile(props.category);



    //console.log("props.catheader", props.category)
    const [pushMenu, setPushMenu] = useState(false);
    const [haveActiveSubMenu, setHaveActiveSubMenu] = useState(false);



    function handleCloseButtonClickForPushMenu() {
        setPushMenu((prev) => !prev);
    }

    // const [isChanged, setIsChanged] = useState(false);

    const [isChangedIndex, setIsChangedIndex] = useState(new Map());

    const [isCurrency, setIsCurrency] = useState("HKD"); //not working 

    const [openSearchPage, setOpenSearchPage] = useState(false);

    function ChangeSubMenu_handleClick(index, sub_index, sub_sub_index) {
        // setIsChanged(!isChanged);

        let newIsChangedIndex = isChangedIndex;
        //let newIsChangedIndex = isChangedIndex;

        if (newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == -1)
            return;
        else if (newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()) == 1) {
            //console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(), "become 0");    
            newIsChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);
            //console.log(newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "become new value");
            setHaveActiveSubMenu(false);

        }

        else {
            //console.log(index.toString() + sub_index.toString() + sub_sub_index.toString(), "become 1");
            //console.log(newIsChangedIndex, "!!!become after newMenuIndex000")
            newIsChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 1);
            //console.log(newIsChangedIndex, "!!!become after newMenuIndex111")
            //console.log(newIsChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "become new value");
            setHaveActiveSubMenu(true);
        }

        //isChangedIndexRef.current = newIsChangedIndex;
        setIsChangedIndex(newIsChangedIndex);
        //console.log(newIsChangedIndex, "!!!become after newMenuIndex");
    }



    useEffect(() => {
        requiredCategory.map((content, index) => {
            if (content.data.length > 0) {
                content.data.map((sub_content, sub_index) => {
                    //console.log(sub_content, "sub_content");
                    sub_content.map((sub_sub_content, sub_sub_index) => {
                        //console.log(sub_sub_content, "sub_sub_contentofuseEffect");
                        if (sub_sub_content.sub_category.length == 0) isChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), -1);
                        else isChangedIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);

                        //console.log(isChangedIndex.get(index.toString() + sub_index.toString() + sub_sub_index.toString()), "eachindex");
                    })
                    //console.log(isChangedIndex, "array");
                })
            }

        }



        )
    }, [])


    function ChangeSubMenu_toOriginal() {
        // setIsChanged(false);
        setHaveActiveSubMenu(false);
        let newMenuIndex = isChangedIndex;

        requiredCategory.map((content, index) => {
            if (content.data.length > 0) {
                content.data.map((sub_content, sub_index) => {
                    sub_content.map((sub_sub_content, sub_sub_index) => {
                        if (sub_sub_content.sub_category.length > 0) newMenuIndex.set(index.toString() + sub_index.toString() + sub_sub_index.toString(), 0);
                    })

                })
            }

        }
        )

        setIsChangedIndex(newMenuIndex);
    }



    function getCurrency(props) {
        if (props.value == "HKD") {
            setIsCurrency("HKD");
        }
        if (props.value == "CNY") {
            setIsCurrency("CNY");
        }
        if (props.value == "AUD") {
            setIsCurrency("AUD");
        }
        if (props.value == "GBP") {
            setIsCurrency("GBP");
        }
        else {
            setIsCurrency("CAD");
        }
    }

    function handleCloseButtonClick() {
        setOpenSearchPage((prev) => !prev)
    }

    function getcurrencyClassName(props) {
        const childId = props.target.querySelector('s.header_lower_right_upper_changecurrency_list_option_input').getAttribute('id');
        if (childId == "currency-hkd") {
            setIsCurrency("HKD");
        }

        if (childId == "currency-cny") {
            setIsCurrency("CNY");
        }
        if (childId == "currency-aud") {
            setIsCurrency("AUD");
        }
        if (childId == "currency-gbp") {
            setIsCurrency("GBP");
        }
        else {
            setIsCurrency("CAD");
        }
    }



    if (!props.isMobile) {
        //console.log(isChangedIndex, "indexarray");
        return (
            <div className={s.header_setting}
            //ref={Headerref}
            >

                <div className={s.header_upper}>
                    <a className={s.header_upper_inner}>

                        <span>
                            【網店突擊💥】買任何產品領券即送北海道元貝😍
                        </span>
                        <span style={{ marginLeft: "8px" }}>
                            <Icon type="right" />
                        </span>
                    </a>
                </div>

                <div className={s.header_lower}>
                    <div className={s.header_lower_image} style={{ display: props.category.length > 7 ? "none" : "" }}>
                        <a style={{ height: "100%" }}>
                            <img src="/image/sunnyimage/logo.png">

                            </img>
                        </a>

                    </div>

                    <div className={s.header_lower_right}>
                        <div style={{ marginTop: 15 }}> {/* originally height: 50%*/}

                            <div className={s.header_lower_image_MoreThen7Menu} style={{ display: props.category.length > 7 ? "" : "none" }}>
                                <a style={{ height: "100%" }}>
                                    <img src="/image/sunnyimage/logo.png">

                                    </img>
                                </a>
                            </div>

                            <ul className={props.category.length > 7 ? s.header_lower_right_upper_MoreThen7Menu : s.header_lower_right_upper} >
                                <li className={s.header_lower_right_upper_icon_setting_li} style={{ display: "flex" }}>
                                    <a className={s.header_lower_right_upper_changecurrency_a} style={{ textDecoration: "none" }}>
                                        <Icon type="pay-circle" />
                                        <span style={{ lineHeight: "18px", fontSize: "12px", textDecoration: "none" }}>{isCurrency}</span>
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
                                                <label htmlFor="currency-gbp" className={s.header_lower_right_upper_changecurrency_list_option_button}></label>
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
                                    <a style={{ display: "flex", gap: "5px", position: "relative", textDecoration: "none" }}>
                                        <Icon type="global" />
                                        <span style={{ lineHeight: "18px", fontSize: "12px" }}>中文 (香港)</span>
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
                                <li className={s.header_lower_right_upper_icon_setting_li} style={{ display: "flex" }}>
                                    <a className={s.header_lower_right_upping_shoppingcart} style={{ display: "flex", textDecoration: "none" }} >
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
                                        <Icon type="user" />
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
                                        <Icon type="mobile" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Menu menuInformation={props.menuInformation} ChangeSubMenu_toOriginal={ChangeSubMenu_toOriginal} isChangedIndex={isChangedIndex} haveActiveSubMenu={haveActiveSubMenu}
                            ChangeSubMenu_handleClick={ChangeSubMenu_handleClick} category={requiredCategory} />


                        <div>

                        </div>
                    </div>
                </div>


            </div>
        )

    }
    else {
        return (
            <div>
                <div>
                    <PushMenuSection

                        handleCloseButtonClickForPushMenu={handleCloseButtonClickForPushMenu} pushMenu={pushMenu}
                        category={requiredCategoryMobile} />
                </div>
                <div className={s.header_setting}
                //ref={Headerref}
                >
                    <section style={{ display: openSearchPage == false ? "none" : "" }}>
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
                            <span style={{ marginLeft: "8px" }}>
                                <Icon type="right" />
                            </span>
                        </a>
                    </div>

                    <div className={ss.test_header_lower_mobile}>
                        <a className={ss.header_lower_menu_icon_mobile}>
                            <Icon onClick={handleCloseButtonClickForPushMenu} type="bars" />
                        </a>

                        <div className={ss.header_lower_image_mobile}>
                            <a style={{ height: "100%" }}>
                                <img src="/image/sunnyimage/logo.png" />
                            </a>
                        </div>


                        <div className={ss.header_lower_right_submenu_mobile}>
                            <ul>
                                <li>
                                    <a>
                                        <Icon className={ss.header_lower_right_submenu_icon_mobile} type="user" />
                                    </a>
                                </li>



                                <li style={{ position: "relative" }}>
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