import React from "react";

export default function RatingCard(props) {
  return (
    <div className="w-full text-center bg-[#F7F2F7] rounded-lg p-3 my-2 lg:w-3/4">
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="flex justify-center lg:justify-between lg:items-center">
          <img
            src="images/icon-star.svg"
            alt="icono estrella"
            className="px-1 lg:h-5"
          />
          <img
            src="images/icon-star.svg"
            alt="icono estrella"
            className="px-1 lg:h-5"
          />
          <img
            src="images/icon-star.svg"
            alt="icono estrella"
            className="px-1 lg:h-5"
          />
          <img
            src="images/icon-star.svg"
            alt="icono estrella"
            className="px-1 lg:h-5"
          />
          <img
            src="images/icon-star.svg"
            alt="icono estrella"
            className="px-1 lg:h-5"
          />
        </div>
        <h2 className="font-bold text-[#502050] mt-2 2xl:text-xl">
          Rated 5 Stars in {props.texto}
        </h2>
      </div>
    </div>
  );
}
