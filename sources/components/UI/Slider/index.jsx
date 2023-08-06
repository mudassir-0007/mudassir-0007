import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SliderItemSizing } from "./Responsive";

const Slider = (props) => {
  const {
    responsive,
    children,
    className,
    itemClassName,
    dotClassName,
    containerClassName,
    hide,
    autoPlay,
    autoPlaySpeed,
    infinite,
    variant,
  } = props;

  return (
    <>
      {!hide && (
        <Carousel
          swipeable={true}
          draggable={true}
          autoPlay={autoPlay || false}
          autoPlaySpeed={autoPlaySpeed || 5000}
          infinite={infinite || false}
          responsive={responsive ? responsive : SliderItemSizing}
          transitionDuration={500}
          containerClass={containerClassName}
          dotListClass={dotClassName}
          itemClass={`${itemClassName} ${
            variant === "full" ? "flex items-center h-full" : "mr-3"
          }`}
          className={`${className} ${variant === "full" ? "" : ""} z-30`}
          pauseOnHover
          sliderClass="h-[100%]"
        >
          {children}
        </Carousel>
      )}
    </>
  );
};

export default Slider;
