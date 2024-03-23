import React from "react";
import "./slider.css";
import anh5 from "../../assets/images/anh5.png"
const Slider = () => {
    return (
        <div className="slider">
           <div className="slider-header">
            <h2>Testimonials</h2>
            </div>  
            <div className="slider-content">
                <div className="slider-content__narroLeft">&#11013;</div>
                <div className="slider-content__box">
                    <div><img src={anh5} alt="" /></div>
                    <div className="slider-content__box-content">
                        <h3>Jonh Fang</h3>
                        <p className="email">wordfaang.com</p>
                        <p className="slider-content__box-content__content">Suspendisse ultrices at diam lectus nullam. 
Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                    </div>
                </div>
                <div className="slider-content__narrowRight">	&#11157;</div>
            </div>
        </div>
    )
}
export default Slider;