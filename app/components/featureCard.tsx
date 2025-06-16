import React from "react";

type FeatureCardProps = {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  num,
  icon,
  title,
  description,
}) => {
  return (
    <div className=" -space-y-10 flex flex-col p-2 pb-6 mx-auto">
      <span
        className=" text-9xl font-bold text-transparent "
        style={{
          WebkitTextStroke: "1.5px #234E49",
        }}
      >
        {num}
      </span>
      <div className=" border border-[#234E49] rounded-2xl ml-18 bg-white p-4 w-68 h-65 space-y-3.5 flex flex-col items-start justify-center">
        <span>{icon}</span>
        <h2 className=" text-3xl text-[#234E49]  font-sora font-bold whitespace-nowrap">
          {title}
        </h2>
        <p className=" font-fredoka text-justify text-neutral-800">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
