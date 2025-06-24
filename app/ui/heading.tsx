import React from "react";
import AnimatedContent from "../animations/FadeUp";
import BlurText from "../animations/BlurText";

interface HeadingProps {
  title: string;
  paragraph: string;
}

const Heading: React.FC<HeadingProps> = ({ title, paragraph }) => {
  return (
    <div className="mb-8 md:mb-15 space-y-6 flex flex-col justify-center">
      <BlurText
        text={title}
        delay={150}
        animateBy="words"
        direction="top"
        className=" whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-[#234E49] text-center flex mx-auto"
      />
      <p className="text-sm sm:text-base text-center font-fredoka px-4 text-gray-600 max-w-2xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          {paragraph}
        </AnimatedContent>
      </p>
    </div>
  );
};

export default Heading;
