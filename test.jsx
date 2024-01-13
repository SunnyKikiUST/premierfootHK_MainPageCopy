import React , {useState, useTransition} from 'react';
import  DeliveryAndPayment  from './paymentmethod';
import Footer from './footer';
import ProductSelectionListWithBig from './product_selection_withbig';
import YouTubeVideoSection from './Youtube_Video';
//import Header from './header';
import Header from './header_dynamic'
import PushMenuSection from './pushmenu';
import Banner from './banner';
import Option_slide from './option_slide';
import DiscountProductSlideList from './discount_product_slide';
import ToolBoxSection from './tool_box'
import VippromoANDwebsiteorderSectionList from './vip_promotion_and_website_order'
import ProductSelectionList from './product_selection'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    category: state.categoryCache,
    
})

const menuInformation = [
    // for each element of menuInformation, the data part's maximum number of array member is 2. i.e [[],[]]
    // check code in header for details  
    { 
        "title":"商品分類" ,
        "data":[ 
            [
                {
                    "name":"全站商品",
                    "sub_category":[]
                },
                {
                    "name":"初夏Chill抵☀️",
                    "sub_category":[
                        {
                            "name": "此分類全部商品",
                            "sub_category":[]
                        },
                        {
                            "name": "初夏Chill抵☀️每週Chill抵價",
                            "sub_category":[]
                        },
                        {
                            "name": "初夏Chill抵☀️買1送1",
                            "sub_category":[]
                        }
                    ]
                },
                {
                    "name":"網店限定✨",
                    "sub_category":[]
                },
                {
                    "name":"皇牌花膠",
                    "sub_category":[]
                },
                {
                    "name":"冬蟲夏草",
                    "sub_category":[]
                },
                {
                    "name":"即飲燉湯",
                    "sub_category":[]
                },
                {
                    "name":"養生即食系列",
                    "sub_category":[]
                },
                {
                    "name":"罐頭鮑魚",
                    "sub_category":[]
                },
                {
                    "name":"送禮套裝🎁",
                    "sub_category":[]
                },
                {
                    "name":"原箱優惠📦",
                    "sub_category":[]
                },
                {
                    "name":"日本元貝",
                    "sub_category":[]
                },
                {
                    "name":"海參燕窩",
                    "sub_category":[]
                },
                {
                    "name":"日常湯料",
                    "sub_category":[]
                },
                {
                    "name":"零食花茶",
                    "sub_category":[]
                }
            ],
            [
                {
                    "name":"急凍食品❄️",
                    "sub_category":[]
                },
                {
                    "name":"海味過大禮🎁",
                    "sub_category":[]
                },
                {
                    "name":"海外送貨🌎美國、英國、澳洲、加拿大",
                    "sub_category":[]
                },
                {
                    "name":"抵買免運套裝🎊",
                    "sub_category":[]
                }
            ]
            
        ]
    },
    {
        "title":"New! 最新產品" ,
        "data":[]
    },
    {
        "title":"企業訂購🛍️" ,
        "data":[]
    },
    {
        "title":"53間分店地址" ,
        "data":[]
    },
    {
        "title":"尚品教室" ,
        "data":[
            [
            {
                "name": "海味新手專用👩‍🍳食譜、小知識▶️",
                "sub_category":[]
            },
            {
                "name":"【花膠食譜】2款簡易快速食譜👩‍🍳",
                "sub_category":[]
            },
            {
                "name":"【花膠小知識】🧐拆解點揀花膠大小",
                "sub_category":[]
            },
            {
                "name":"【花膠小知識】2招教你肉眼分辨花膠公乸🤩",
                "sub_category":[]
            },
            {
                "name":"【蟲草小知識】尚品野生蟲草5大特點👑",
                "sub_category":[]
            },
            {
                "name":"【蟲草小知識】食蟲草增強免疫力🛡️",
                "sub_category":[]
            },
            {
                "name":"【蟲草小知識】點保存蟲草最適合?",
                "sub_category":[]
            },
            {
                "name":"【遼參小知識】遼參有助改善虛弱體質🤩",
                "sub_category":[]
            },
            ]
        ]
    },
    {
        "title":"關於尚品" ,
        "data":[
            [
            {
                "name": "品牌故事",
                "sub_category":[]
            },
            {
                "name": "尚品會員計劃",
                "sub_category":[]
            },
            {
                "name": "網上付款及送貨方式",
                "sub_category":[]
            },
            {
                "name": "聯絡我們",
                "sub_category":[]
            },
            ]
        ]
    },
    {
        "title":"加入我們" ,
        "data":[]
    }
]

const pushMenuInformation = [
        { "title":"",
        "data":[
            {
                "name":"限時折扣",
                "sub_category":[]
            },
            {
                "name":"優惠券",
                "sub_category":[]
            },
            {
                "name":"瀏覽紀錄",
                "sub_category":[]               
            }
        ]},

        { "title":"分類",
        "data":[
            {
                "name":"全站商品",
                "sub_category":[]
            },
            {
                "name":"初夏Chill抵☀️",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }
                ]
            },
            {
                "name":"激平五六日📣",
                "sub_category":[]
            },
            {
                "name":"網店限定✨",
                "sub_category":[]
            },
            {
                "name":"皇牌花膠",
                "sub_category":[]
            },
            {
                "name":"冬蟲夏草",
                "sub_category":[]
            },
            {
                "name":"即飲燉湯",
                "sub_category":[]
            },
            {
                "name":"養生即食系列",
                "sub_category":[]
            },
            {
                "name":"罐頭鮑魚",
                "sub_category":[]
            },
            {
                "name":"送禮套裝🎁",
                "sub_category":[]
            },
            {
                "name":"原箱優惠📦",
                "sub_category":[]
            },
            {
                "name":"日本元貝",
                "sub_category":[]
            },
            {
                "name":"海參燕窩",
                "sub_category":[]
            },
            {
                "name":"冬菇海味",
                "sub_category":[]
            },
            {
                "name":"日常湯料",
                "sub_category":[]
            },
            {
                "name":"零食花茶",
                "sub_category":[]
            },
            {
                "name":"急凍食品❄️",
                "sub_category":[]
            },
            {
                "name":"海味過大禮🎁",
                "sub_category":[]
            },
            {
                "name":"海外送貨🌎美國、英國、澳洲、加拿大",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }

                ]
            },
            {
                "name":"抵買免運套裝🎊",
                "sub_category":[]
            },
        ]} ,

        { "title":"",
        "data":[
            {
                "name":"New! 最新產品",
                "sub_category":[]
            },
            {
                "name":"企業訂購🛍️",
                "sub_category":[]
            },
            {
                "name":"54間分店地址",
                "sub_category":[]               
            },
            {
                "name":"尚品教室",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }
                ]               
            },
            {
                "name":"54間分店地址",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }
                ]               
            },
            {
                "name":"加入我們",
                "sub_category":[]
            }
        ]},
        { "title":"門市",
        "data":[
            {
                "name":"門市資訊",
                "sub_category":[]
            }
        ]},
        { "title":"邀請活動",
        "data":[
            {
                "name":"邀請好友",
                "sub_category":[]
            }
        ]},
        { "title":"商店資訊",
        "data":[
            {
                "name":"關於我們",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }
                ]
            },
            {
                "name":"客服資訊",
                "sub_category":[
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    },
                    {
                        "name":"Shopage",
                        "sub_category":[]
                    }
                ]
            }
        ]}
]

    
// const pushMenuInformation_section2 = [
//     //{title: "分類"},
//     {name: "初夏Chill抵☀️", submenu:["Shopage", "Shopage", "Shopage"]},
//     {name: "激平五六日📣"},
//     {name: "網店限定✨"},
//     {name: "皇牌花膠"},
//     {name: "冬蟲夏草"},
//     {name: "即飲燉湯"},
//     {name: "養生即食系列"},
//     {name: "罐頭鮑魚"},
//     {name: "送禮套裝🎁"},
//     {name: "原箱優惠📦"},
//     {name: "日本元貝"},
//     {name: "海參燕窩"},
//     {name: "冬菇海味"},
//     {name: "日常湯料"},
//     {name: "零食花茶"},
//     {name: "急凍食品❄️"},
//     {name: "海味過大禮🎁"},
//     {name: "海外送貨🌎美國、英國、澳洲、加拿大", submenu:["Shopage","Shopage","Shopage","Shopage","Shopage","Shopage"]},
//     {name: "抵買免運套裝🎊"}
// ]
// const pushMenuInformation_section3 = [
//     {name: "New! 最新產品"},
//     {name: "企業訂購🛍️"},
//     {name: "54間分店地址"},
//     {name: "尚品教室", submenu:["Shopage", "Shopage", "Shopage", "Shopage", "Shopage", "Shopage", "Shopage", "Shopage"]},
//     {name: "關於尚品", submenu:["Shopage", "Shopage", "Shopage", "Shopage"]},
//     {name: "加入我們"}
// ]
// const pushMenuInformation_section4 = [
//     {name: "門市資訊"}
// ]
// const pushMenuInformation_section5 = [

//     {name: "邀請好友"}
// ]
// const pushMenuInformation_section6 = [

//     {name: "關於我們", submenu:["Shopage","Shopage","Shopage"]},
//     {name: "客服資訊", submenu:["Shopage","Shopage","Shopage","Shopage"]}
// ]


const hotKeyWordsForSearch = [
    "花膠", "湯包", "花旗參", "即食", "鮑魚",
    "元貝", "螺片", "無花果", "海蜇", "蝦米",
    "燕窩", "海參"
]


const bannerImageDesktop = [
    "/image/sunnyimage/banner_image_1.jpeg", 
    "/image/sunnyimage/banner_image_2.jpeg",
    "/image/sunnyimage/banner_image_3.jpeg",
    "/image/sunnyimage/banner_image_4.jpeg"
]
const bannerImageMobile = [
    "/image/sunnyimage/banner_image_1_mobile.jpeg",
    "/image/sunnyimage/banner_image_2_mobile.jpeg",
    "/image/sunnyimage/banner_image_3_mobile.jpeg",
    "/image/sunnyimage/banner_image_4_mobile.jpeg"
]


const productInformationWithBig_Big = [
    {name: "[試食價]尚品即食海蜇絲(蒜香味)(150克x2包) - 1盒有2包｜濃郁惹味",price: "HK$59600000.00", discount_price: "HK$29800.00", image: "/image/sunnyimage/product_2.jpeg",image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[試食價]尚品即食海蜇絲(蒜香味)(150克x2包) - 1盒有2包｜濃郁惹味",price: "HK$59600000.00", discount_price: "HK$29800.00", image: "/image/sunnyimage/product_2.jpeg",image_profile: "/image/sunnyimage/productprofile.png"}
];
const productInformationWithBig_Small = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile_2.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile_2.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile_2.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile_2.png"}

]


const UpperAndLowerImageOfProductGrid_1 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture.jpeg",
    bottom_image: "/image/sunnyimage/product_selection_lowerpicture_2.jpeg"}
const productInformation_1 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const UpperAndLowerImageOfProductGrid_2 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture.jpeg",
    bottom_image: "/image/sunnyimage/product_selection_lowerpicture.webp"}
const productInformation_2 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const UpperAndLowerImageOfProductGrid_3 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture_3.png",
    bottom_image: "/image/sunnyimage/product_selection_lowerpicture_3.png"}
const productInformation_3 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const UpperAndLowerImageOfProductGrid_4 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture_4.png",
}
const productInformation_4 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const UpperAndLowerImageOfProductGrid_5 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture_5.png",

}
const productInformation_5 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},

];

const productInformation_6 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];

const UpperAndLowerImageOfProductGrid_6 = {
    upper_image: "/image/sunnyimage/advertisement.jpeg"
}


const UpperAndLowerImageOfProductGrid_7 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture_6.png"

}
const productInformation_7 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const UpperAndLowerImageOfProductGrid_8 = {
    upper_image: "/image/sunnyimage/product_selection_upperpicture_7.png",

}
const productInformation_8 = [
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"},
    {name: "[✨買一送一][網店限定]尚品即燉燕窩(1片裝)(10克) - 即開即燉｜無需浸發｜滋潤養顏",price: "HK$298.00", discount_price: "HK$596.00", image: "/image/sunnyimage/product.jpeg", image_profile: "/image/sunnyimage/productprofile.png"}

];


const youtubeVideoSectionInformation_1 = {
    upper_image: "/image/sunnyimage/youtube_video_section_image_1.png",
    first_video_link: "https://www.youtube.com/embed/J9sMS2fJ8Do?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.premierfood.com.hk&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1",
    first_video_title: "升級版🆙即食冰糖花膠 #天然深海花膠😍",
    second_video_link: "https://www.youtube.com/embed/FeQIoWf4oj0?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.premierfood.com.hk&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3",
    second_video_title: "啖啖燕窩👍🏻 養生糖水🥰 #女士首選"
}


const youtubeVideoSectionInformation_2 = {
    first_video_link: "https://www.youtube.com/embed/gNr_KMbVKfI?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.premierfood.com.hk&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=5",
    first_video_title: "【尚品食譜🍲花膠元貝燒賣】零失敗手工燒賣🧡即睇簡易教學",
    second_video_link: "https://www.youtube.com/embed/tHdXS3SzY-I?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fwww.premierfood.com.hk&playsinline=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=7",
    second_video_title: "【尚品食譜😍花膠豆乳凍】懶人甜品😋簡單材料＆步驟❤️超足膠原蛋白‼️"
}


const vipPromotionInformation = [
    "/image/sunnyimage/vip_image_1.png", "/image/sunnyimage/vip_image_2.png",
    "/image/sunnyimage/vip_image_3.png", "/image/sunnyimage/vip_image_4.png"
]
const websiteOrderInformation = "/image/sunnyimage/websiteorder_image.png";


const discountProductInformation = [
    {name: "【初夏Chill抵】滿$600即送陳皮冰糖燉檸檬(330g)", date: "2023/05/29 ~ 2023/06/18", image1:"/image/sunnyimage/discount_product_slide_image1.jpeg", image2:"/image/sunnyimage/discount_product_slide_image2.jpeg"},
    {name: "【初夏Chill抵】滿$600即送陳皮冰糖燉檸檬(330g)", date: "2023/05/29 ~ 2023/06/18", image1:"/image/sunnyimage/discount_product_slide_image3.jpeg", image2:"/image/sunnyimage/discount_product_slide_image3.jpeg"},
    {name: "【初夏Chill抵】滿$600即送陳皮冰糖燉檸檬(330g)", date: "2023/05/29 ~ 2023/06/18", image1:"/image/sunnyimage/discount_product_slide_image1.jpeg", image2:"/image/sunnyimage/discount_product_slide_image2.jpeg"},
    {name: "【初夏Chill抵】滿$600即送陳皮冰糖燉檸檬(330g)", date: "2023/05/29 ~ 2023/06/18", image1:"/image/sunnyimage/discount_product_slide_image1.jpeg", image2:"/image/sunnyimage/discount_product_slide_image2.jpeg"}

]


const optionSlideInformation = [
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"最新優惠"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"網店限定"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"門市限定"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"免運專區"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"尚品花膠"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"冬蟲夏草"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"即飲燉湯"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"即食系列"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"即食鮑魚"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"原箱優惠"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"送禮推薦"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"過大禮"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"北海道元貝"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"冬菇及海味"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"海參及燕窩"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"日常湯料"},
    {image:"/image/sunnyimage/banner_2_image_1.png", name:"零食及花茶"}
]


function responsiveMobileChecking(){
    if(window.innerWidth < 820)
        return 1;
    else
        return 0;
}

function HelloWorld(props){
    console.log(props,"props");
    //const useragent = navigator.userAgent;
    //console.log(Headerref.current.offsetHeight);
    //const [isMobile, setIsMobile] = useState(useragent.match("Android") || useragent.match("iPhone") || useragent.match("iPad")); //for useragent


    const [isMobile, setIsMobile] = useState(1); // there are some bugs such that the IsChangedIndex from header/dynamic_header file is not working originally, 
    //it only works when it switches to mobilr version first, so switch to mobile version at first for a litte time.
    
    setInterval( () => {
    const shouldBeMobile = responsiveMobileChecking();
    if(shouldBeMobile !== isMobile)
        setIsMobile(responsiveMobileChecking)
    },500);

        return(
    
            <div>
                {/* <div>
                    <PushMenuSection/> have put the component to the header component
                </div> */}
                <div //style={{marginTop: isMobile ? "90px" :"134px"}}
                >
                    <Header isMobile={isMobile} 
                    pushMenuInformation={pushMenuInformation} menuInformation={menuInformation}
                    hotKeyWordsForSearch={hotKeyWordsForSearch} category={props.category}/>
                </div>
                <div>
                    <ToolBoxSection/>
                </div>
                <div>
                    <Banner bannerImageDesktop={bannerImageDesktop} bannerImageMobile={bannerImageMobile} isMobile={isMobile}/>
                </div>
               
                <div>
                    <Option_slide optionSlideInformation={optionSlideInformation} isMobile={isMobile}/>
                </div>
                <div 
               // style={{marginTop:Headerref.current.offsetHeight}}
                >
                    <ProductSelectionListWithBig productInformationWithBig={productInformationWithBig_Big} />
                    <ProductSelectionList productInformation={productInformationWithBig_Small} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_1} image={UpperAndLowerImageOfProductGrid_1} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_2} image={UpperAndLowerImageOfProductGrid_2} isMobile={isMobile}/>
                </div>
                <div>
                    <VippromoANDwebsiteorderSectionList vipPromotionInformation={vipPromotionInformation} websiteOrderInformation={websiteOrderInformation} isMobile={isMobile}/>
                </div>
                <div>
                    <DiscountProductSlideList isMobile={isMobile} discountProductInformation={discountProductInformation}/>            
                </div>  
                <div>
                    <ProductSelectionList productInformation={productInformation_3} image={UpperAndLowerImageOfProductGrid_3} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_4} image={UpperAndLowerImageOfProductGrid_4} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_5} image={UpperAndLowerImageOfProductGrid_5} isMobile={isMobile}/>
                </div>
    
                <div>
                    <YouTubeVideoSection VideoInformation={youtubeVideoSectionInformation_1} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_6} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList image={UpperAndLowerImageOfProductGrid_6} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_7} image={UpperAndLowerImageOfProductGrid_7} isMobile={isMobile}/>
                </div>
                <div>
                    <ProductSelectionList productInformation={productInformation_8} image={UpperAndLowerImageOfProductGrid_8} isMobile={isMobile}/>
                </div>
                <div>
                    <YouTubeVideoSection VideoInformation={youtubeVideoSectionInformation_2} isMobile={isMobile}/>
                </div>
                <div>
                    <DeliveryAndPayment isMobile={isMobile}/>
                </div>
                <div>
                    <Footer isMobile={isMobile}/>
                </div>
            </div>
    
        )
    }


export default connect(mapStateToProps)(HelloWorld);