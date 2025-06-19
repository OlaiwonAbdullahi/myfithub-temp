import { Box } from "lucide-react";
import React from "react";

const HowItWork = () => {
  return (
    <div>
      <div className="px-4 sm:px-8  md:px-20 py-8 sm:py-10 md:py-12 lg:py-15 space-y-8 bg-white">
        <div className=" mb-20  space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-[#234E49] text-center">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-center font-fredoka px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            reiciendis.
          </p>
        </div>
        <div className=" grid grid-cols-2">
          <div className=" p-2 space-y-5 ">
            <Box />
            <h2 className=" text-3xl font-semibold text-[#234E49]">
              Lorem, ipsum.1
            </h2>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, inventore enim expedita quas quisquam explicabo
              voluptate praesentium fugiat, dolorum labore ratione incidunt
              sint, sit voluptatum perferendis ad aliquam provident earum!
            </p>
          </div>
          <div className=" ">
            <Box />
            <span>Lorem, ipsum.2</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, inventore enim expedita quas quisquam explicabo
              voluptate praesentium fugiat, dolorum labore ratione incidunt
              sint, sit voluptatum perferendis ad aliquam provident earum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
