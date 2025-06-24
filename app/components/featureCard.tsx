import React from "react";
import AnimatedContent from "../animations/FadeUp";

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
    <div className="group relative mx-auto">
      <div className="absolute -top-12 -left-8 z-0">
        <span
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent select-none"
          style={{
            WebkitTextStroke: "1px #234E49",
            opacity: "0.4",
          }}
        >
          {num}
        </span>
      </div>

      <div className="relative z-10 bg-white border border-[#234E49]/10 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#234E49]/40 hover:-translate-y-1 min-h-[220px] sm:min-h-[250px] md:min-h-[280px]">
        <div className="mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#234E49]/10 rounded-xl flex items-center justify-center text-[#234E49] group-hover:bg-[#234E49] group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg md:text-xl font-bold font-sora text-[#234E49] leading-tight">
            {title}
          </h3>

          <p className="text-sm sm:text-base font-fredoka text-neutral-700 leading-relaxed line-clamp-4">
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
              {description}
            </AnimatedContent>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#234E49] to-[#234E49]/60 rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
