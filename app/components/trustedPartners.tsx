import React from "react";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  return (
    <div className="md:px-20 px-8 py-15 md:space-y-8 space-y-5 bg-white">
      <h2 className="md:text-4xl text-3xl font-bold  font-sora text-[#234E49] text-center">
        Studios that trust Us
      </h2>
      <p className="text-base text-center font-fredoka">...and so should you</p>
      <div>
        <Marquee pauseOnHover speed={40}>
          <div className="flex md:gap-36 gap-12 mt-10 items-center justify-between">
            <img src="./diesel.png" alt="Diesel" className="h-8 w-auto" />
            <img src="./diesel.png" alt="Diesel" className="h-8 w-auto" />
            <img src="./diesel.png" alt="Diesel" className="h-8 w-auto" />
            <img src="./diesel.png" alt="Diesel" className="h-8 w-auto" />
            <img src="./diesel.png" alt="Diesel" className="h-8 w-auto" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPartners;
