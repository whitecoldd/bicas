import React from 'react';
import "../../../../assets/css/topBannerOneSlide.css"

export default function TopBannerOneSlide({ slide }) {
    return (
        <div className="topBanner_oneSlide">
            <span className="bonus">{slide.greenText}</span>
            <h1>
                <p className="firstTitle">{slide.firstTitle}</p>
                {slide.SecondTitle}
            </h1>
            <button className="green_btn">{slide.btnText}</button>
        </div>
    )
}