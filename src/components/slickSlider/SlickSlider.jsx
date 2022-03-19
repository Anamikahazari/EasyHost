import React from 'react'
import Slider from "react-slick";
import './slickSlider.css';

export default function SlickSlider(props) {
    const settings = {
        // dots: true,
        arrows:true,
        // nextStep:true,
        // infinite: false,
        // centerMode:true,
        // position:2
     
        // autoplaySpeed:400
        // className: "center",
        infinite: true,
        slidesToShow: 3,
        // accessibility:   true,
        swipeToSlide: true,
        slidesToScroll:1,
     
      };
      console.log("inside",props.candidates);
      console.log("inside slick",props.randomList);
      
  return (
    <>
        <Slider {...settings} className="slickSlider mt-20">
            {props.randomList.map((item,index)=>{
                return <div className="text-center h-24 bg-black text-white" key={index}>
                            <h1 className='font-bals text-xl'>{props.candidates[item]}</h1></div>
            })}
       </Slider>
    </>
  )
}
