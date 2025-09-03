import React from "react";
//import ScrollVelocity from "../animations/ScrollVelocity";

const TrustedPartners: React.FC = () => {
  const partnerLogos = [
    { src: "./diesel.png", alt: "Diesel", id: "diesel-1" },
    { src: "./diesel.png", alt: "Diesel", id: "diesel-2" },
    { src: "./diesel.png", alt: "Diesel", id: "diesel-3" },
    { src: "./diesel.png", alt: "Diesel", id: "diesel-4" },
    { src: "./diesel.png", alt: "Diesel", id: "diesel-5" },
  ];

  return (
    <div className="md:px-20 px-8 py-15 md:space-y-8 space-y-5 bg-white">
      <h2 className="md:text-4xl text-3xl font-bold font-sora text-[#234E49] text-center">
        Studios that trust Us
      </h2>
      <p className="text-base text-center font-fredoka">...and so should you</p>
      <div>
       
            <div
              key="partners-row"
              className="flex md:gap-36 gap-12 mt-10 items-center justify-between"
            >
              {partnerLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto"
                />
              ))}
            </div>,
        
        
      </div>
    </div>
  );
};

export default TrustedPartners;
