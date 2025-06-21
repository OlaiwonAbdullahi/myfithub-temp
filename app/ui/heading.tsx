import React from "react";

interface HeadingProps {
  title: string;
  paragraph: string;
}

const Heading: React.FC<HeadingProps> = ({ title, paragraph }) => {
  return (
    <div className="mb-8 space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-[#234E49] text-center">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-center font-fredoka px-4 text-gray-600 max-w-2xl mx-auto">
        {paragraph}
      </p>
    </div>
  );
};

export default Heading;
