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
    <div className="group relative w-full max-w-sm mx-auto">
      <div className="absolute -top-16 -left-10 z-0">
        <span
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent select-none"
          style={{
            WebkitTextStroke: "1px #234E49",
            opacity: "0.4",
          }}
        >
          {num}
        </span>
      </div>

      {/* Main card */}
      <div className="relative z-10 bg-white border border-[#234E49]/10 rounded-2xl p-4 md:p-6  shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#234E49]/40 hover:-translate-y-1 min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
        <div className="mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#234E49]/10 rounded-xl flex items-center justify-center text-[#234E49] group-hover:bg-[#234E49] group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-sora text-[#234E49] leading-tight">
            {title}
          </h3>

          <p className="text-sm sm:text-base font-fredoka text-neutral-700 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* Optional accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#234E49] to-[#234E49]/60 rounded-b-2xl group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
