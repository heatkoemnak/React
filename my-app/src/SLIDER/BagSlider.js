import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BAG from "../BagProduct";
import "../Pages/CSS/fashion.css";
function BagSlider() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="fashion-Product">
        <Slider {...settings}>
          {BAG.map((fashion) => {
            return (
              <div className="fashion">
                <div className="fashion-img">
                  <img src={fashion.image} alt={fashion.name} />
                </div>
                <div className="fashion-name">{fashion.name}</div>
                <div className="fashion-price">{fashion.price}</div>
                <div className="fashion-description">{fashion.description}</div>
                <button>Add to cart</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default BagSlider;
