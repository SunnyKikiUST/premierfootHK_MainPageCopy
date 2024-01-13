import React from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';
import {Icon} from 'antd';

function YoutubeVideoSection(props){

    if(!props.isMobile)
    {
        return(
            <div>
                <div className={s.youtube_section_image_setting} style={{height: _.get(props, 'VideoInformation.upper_image', "") == "" ? "0%" : "auto", padding: _.get(props, 'VideoInformation.upper_image', "") == "" ? "0" : ""}}>
                    <a href="#">
                        <img style={{height: "100%"}} src={_.get(props, 'VideoInformation.upper_image', "")} >
                        </img>
                    </a>
                </div>
                <div className={s.youtube_section_container}>
                    <div className={s.youtube_section_flex}>
                       
                        <iframe className={s.youtube_section_video1}
                            src={props.VideoInformation.first_video_link}>
                        </iframe>
           
    
                        <article className={s.youtube_section_video2_container}>
                            <iframe className={s.youtube_section_video2}
                                src={props.VideoInformation.second_video_link}>
    
                            </iframe>
                            <a className={s.youtube_section_video2_link}>
                                <div>{props.VideoInformation.second_video_title}</div>
                                <span>去看看</span>
                            </a>
                        </article>
                    </div>
    
                </div>
            </div>
        )
    }

    else
    {
        return(
            <div>
                <div className={ss.youtube_section_image_setting_mobile} style={{height: _.get(props, 'VideoInformation.upper_image', "") == "" ? "0%" : "auto", padding: _.get(props, 'VideoInformation.upper_image', "") == "" ? "0" : ""}}>
                    <a href="#">
                        <img style={{height: "100%"}} src={_.get(props, 'VideoInformation.upper_image', "")} >
                        </img>
                    </a>
                </div>
                <div className={ss.youtube_section_container_mobile}>
                    <div className={ss.youtube_section_innercontainer_mobile}>
                        <div>
                            <iframe className={ss.youtube_section_video_mobile}
                            src={props.VideoInformation.first_video_link} ></iframe>
                        </div>
                        <a className={ss.youtube_section_title_mobile}><h5>{props.VideoInformation.first_video_title}</h5></a>
                        <a className={ss.youtube_section_video_link}>
                            去看看
                            <Icon className={ss.youtube_section_video_link_icon} type="right" />
                        </a>
                    </div>
                    <div className={ss.youtube_section_innercontainer_mobile} style={{marginTop:  "12px"}}>
                        <div>
                            <iframe className={ss.youtube_section_video_mobile}
                            src={props.VideoInformation.second_video_link} ></iframe>
                        </div>
                        <a className={ss.youtube_section_title_mobile}><h5>{props.VideoInformation.second_video_title}</h5></a>
                        <a className={ss.youtube_section_video_link}>
                            去看看
                            <Icon className={ss.youtube_section_video_link_icon} type="right" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default YoutubeVideoSection;