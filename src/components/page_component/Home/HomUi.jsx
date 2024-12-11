import React from "react";
import Hero from "../../../assets/hero.jpg";

function HomUi() {
  return (
    <div className="relative h-[50vh]  sm:h-[40vh] md:h-[50vh] lg:h-[50vh]">
      {/* Image container */}
      <img
        className="object-cover rounded-b-[50px] w-full h-full"
        src={Hero}
        alt="hero"
      />
    </div>
  );
}

export default HomUi;
