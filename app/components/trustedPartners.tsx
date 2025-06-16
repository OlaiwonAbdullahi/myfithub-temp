import React from "react";
import Marquee from "react-fast-marquee";

const TrustedPartners = () => {
  return (
    <div className="px-20 py-15 space-y-8 bg-white">
      <h2 className="text-4xl font-bold  font-sora text-[#234E49] text-center">
        Studios that trust Us
      </h2>
      <p className="text-base text-center font-fredoka">...and so should you</p>
      <div>
        <Marquee pauseOnHover speed={40}>
          <div className="flex gap-36 mt-10 items-center justify-between">
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
