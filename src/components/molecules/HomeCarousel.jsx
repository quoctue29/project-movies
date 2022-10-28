import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeCarousel = () => {
  return (
    <Carousel effect="fade" className="h-100">
      <div>
        <div style={contentStyle}>
          <img
            src="http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
