import React from "react";

export default function CommentsCard(props) {
  return (
    <div className="w-full bg-[#502050] rounded-lg p-6 mt-6">
      <div className="flex pb-5">
        <img
          src={"images/image-" + props.img + ".jpg"}
          alt="imagen de la persona"
          className="rounded-full w-12"
        />
        <div className="pl-6">
          <h2 className="text-white font-medium">{props.nombre}</h2>
          <h3 className="text-[#EE68A4]">Verified Buyer</h3>
        </div>
      </div>
      <p className="text-white text-lg">"{props.comentario}"</p>
    </div>
  );
}
