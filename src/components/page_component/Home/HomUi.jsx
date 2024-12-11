import React from "react";
import Hero from "../../../assets/hero.jpg";
import Navbar from "@/components/ui/Navbar";

function HomUi() {
  return (
    <div className="relative h-30vh]  sm:h-[40vh] md:h-[70vh] lg:h-[50vh]">
      {/* Image container */}
      <img
        className="object-cover rounded-b-[50px] w-full h-full"
        src={Hero}
        alt="hero"
      />
      <Navbar/>
    </div>
  );
}

export default HomUi;
