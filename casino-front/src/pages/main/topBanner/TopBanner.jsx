import React, { useState } from 'react';
import "../../../assets/css/topBanner.css";
import MuiSimpleSlider from '../../../components/ui/Mui_simpleSlider/Mui_simpleSlider';


import tries from "../../../assets/img/tries.png"
import woman from "../../../assets/img/topBannerWoman.png"




export default function TopBanner() {

    let [slides] = useState([
        {
            id: 1,
            greenText: 'bonus',
            firstTitle: 'BICAS Welcome Pack',
            SecondTitle: <p className="lastTitle">Get <span>$2200</span> bonus now and 200 <span> FREE SPINS</span></p>,
            btnText: 'TAKE BONUS',
        },
        {
            id: 2,
            greenText: 'bonus',
            firstTitle: 'BICAS Welcome Pack',
            SecondTitle: <p className="lastTitle">Get <span>$2200</span> bonus now and 200 <span> FREE SPINS</span></p>,
            btnText: 'TAKE BONUS',
        },
    ])

    

    return (
        <section className="topBanner">
            <div className="topBanner_slider">

                <MuiSimpleSlider
                    slides={slides}
                    myclass={'mainTopBannerSlider'}
                />
            </div>
            <div className="topBanner_bigImg">
                <img className="tries" src={tries} alt=""/>
                <div className="woman_img">
                    <img className="woman" src={woman} alt=""/>
                </div>
                <div className="blurCircle"></div>
            </div>
        </section>
    )
}