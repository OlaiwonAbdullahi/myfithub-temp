import { MapPin } from "lucide-react";
import React from "react";

// Define the props interface
interface HeroProps {
  name: string;
  description: string;
  image: string;
  location: string;
  type: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  description,
  image,
  location,
  type,
}) => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60 backdrop-blur-xs" />

      <div className="relative z-10 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-sora leading-tight">
            {name}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-light font-fredoka max-w-2xl mx-auto mb-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm sm:text-base text-white font-fredoka mt-4">
            <div className="flex items-center gap-1">
              <MapPin size={18} /> <span>{location}</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
              {type}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
