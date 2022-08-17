import React, { Component } from "react";
import Slider from "react-slick";
import TopBannerOneSlide from "../../../pages/main/topBanner/topBannerOneSlide/TopBannerOneSlide";

export default class MuiSimpleSlider extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} className={this.props.myclass}>
                {this.props.slides.map((slide) => {
                    return (
                        <TopBannerOneSlide key={slide.id} slide={slide} />
                    )
                })}
            </Slider>
        );
    }
}