import React,{ useState }  from "react";
import { Link } from "react-router-dom";

import image1 from "../screen/asset/s005.jpg";
import image2 from "../screen/asset/s002.png";
import image3 from "../screen/asset/s003.png";
import image4 from "../screen/asset/s001.png";

function Slider() {
  const [selectImage, setSelectImage] = useState(1);
  const [allImage, setAllImage] = useState([image1, image2, image3, image4]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (selectImage < allImage.length - 1) {
        setSelectImage(selectImage + 1);
      }
      if (selectImage === allImage.length - 1) {
        setSelectImage(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [selectImage]);

  return (
    <div className="campagn">
      <div className="feature">
        <Link className="feature-list" to="/">
          Sell Your Products
        </Link>
        <Link className="feature-list" to="/Service">
          Service Provider
        </Link>
        <Link className="feature-list" to="/Shop">
          Nearby Enterprise
        </Link>
        <div className="location">
          <i className="bx bx-location-plus"></i>
          <i className="bx bx-chevron-up"></i>
          <p>Location</p>
          <p>សង្កាត់ទឹកថ្លា Sangkat Tuek Thla ភ្នំពេញ</p>
          <p>10km 30s</p>
          <i className="bx bx-chevron-down "></i>
        </div>
        <Link className="feature-list" to="/Contact">
          ALL PRODUCTS TYPE
        </Link>
      </div>
      <div className="banner">
        <img src={allImage[selectImage]} alt="all" />
      </div>
    </div>
  );
}

export default Slider;
