import React , {useState, useRef, useEffect} from 'react';
import s from './test.scss';
import {Icon} from "antd";

function ToolBoxSection(){
    console.log('Rendering ToolBoxSection component');
    function moveTophandler(){
        console.log('Clicked on tool box item');
        window.scrollTo({
            top: 0 ,
            behavior: "smooth"
        });
    }

    return(
        <div className={s.tool_box_container}>
            <div className={s.tool_box_item}>
                <a className={s.tool_box_a}>
                    <img className={s.tool_box_image} src='/image/sunnyimage/tool_box_image_1.png'></img>
                </a>
                <div className={s.tool_box_name}>
                    <span>團購查詢</span>
                </div>
                <Icon className={s.tool_box_name_caret} type="caret-right" />
            </div>
            <div className={s.tool_box_item}>
                <a className={s.tool_box_a}>
                    <Icon className={s.tool_box_icon} type="shop" />
                </a>
                <div className={s.tool_box_name}>
                    <span>門市資訊</span>
                </div>
                <Icon className={s.tool_box_name_caret} type="caret-right" />
            </div>
            <div className={s.tool_box_item}>
                <a className={s.tool_box_a}>
                    <img  className={s.tool_box_image} src='/image/sunnyimage/tool_box_image_3.png'>
                    </img>
                </a>
                <div className={s.tool_box_name}>
                    <span>門市資訊</span>
                </div>
                <Icon className={s.tool_box_name_caret} type="caret-right" />
            </div>
            <div className={s.tool_box_item}>
                <a onClick={moveTophandler} className={s.tool_box_a}>
                    <Icon className={s.tool_box_icon} type="caret-up" />
                </a>
                <div className={s.tool_box_name} style={{left:"-358%"}}>
                    <span>Facebook 粉絲團</span>
                </div>
                <Icon className={s.tool_box_name_caret} type="caret-right" />
            </div>
            <div className={s.tool_box_item}>
                <a className={s.tool_box_a}>
                    <img className={s.tool_box_image} src="/image/sunnyimage/tool_box_image_2.png">
                    </img>
                </a>
                <div className={s.tool_box_name} style={{left:"-294%"}}>
                    <span>最新折扣活動</span>
                </div>
                <Icon className={s.tool_box_name_caret} type="caret-right" />
            </div>
        </div>
    )
}

export default ToolBoxSection;