import React from 'react';
import s from './test.scss';
import ss from './test_mobile.scss';

function Footer(props){
    if(!props.isMobile)
    {
    return(
            <footer className={s.footersetting}>
                <div className={s.footer_outerdiv_setting}>
                    <div className={s.footer_outerdivofimagine_setting}>
                        <img className={s.footerimagesetting} src="/image/sunnyimage/footerimage.jpeg" style={{position:"absolute", left:"-4px", top:"-55px"}}></img>
                        <div>
                            <a>
                                <img>
                                </img>
                            </a>
                
                        </div>
                        <div></div>
                    </div>

                    <div className={s.footer_aboutus_customerservice}>
                        <div className={s.footer_aboutus}>
                            <div className={s.footer_title}>關於我們</div>

                            <div>
                                <ul>
                                    <li className={s.footer_content}>
                                        <a href="">品牌故事</a>
                                    </li>
                                    <li className={s.footer_content}>
                                        <a href="">商店簡介</a>
                                    </li>
                                    <li className={s.footer_content}>
                                        <a href="">門市資訊</a>
                                    </li>
                                    <li className={s.footer_content}>
                                        <a href="">私隱政策及網站使用條款</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className={s.footer_customerservice}>
                            <div className={s.footer_title}>客服資訊</div>

                                <div>
                                    <ul>
                                        <li className={s.footer_content}>
                                            <a href="">購物說明</a>
                                        </li >
                                        <li className={s.footer_content}>
                                            <a href="">條款及細則</a>
                                        </li>
                                        <li className={s.footer_content}>
                                            <a href="">聯絡我們</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>

                    <div className={s.footer_appdownload}>
                        <div className={s.footer_customerservice}>官方APP</div>
                        <section>
                            <input placeholder="請輸入手機號碼"></input>
                            <button>免費傳送載點至手機</button>
                        </section>
                        <div className={s.footer_appdownload_link_common}>
                            <a >
                                <div className={s.footer_appdownload_link1}></div>
                            </a>
                            <a>
                                <div className={s.footer_appdownload_link2}></div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        
        )
    }
    else
    {
        return(
                <footer className={ss.footersetting_mobile}>
                <ul className={ss.footer_ul_mobile}>
                    <li>
                        <a href="#">
                            品牌故事
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            購物說明
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            門市資訊
                        </a>
                    </li>
                </ul>
                <div className={ss.footer_copyright}>
                    <small>© 2023 by ShopAge</small>
                </div>
            </footer>
        )

    }
}

export default Footer;