import React from "react";

const Demo = () => {
  return (
    <div className=" p-4 bg-white/40 backdrop-blur-2xl md:w-[85%] w-full  mx-auto rounded-3xl border border-white/70 shadow">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/ExyjEUxOZjY?si=zBov_460yuKDLWVk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className=" rounded-3xl mx-auto md:h-[400px] h-[200px]"
      ></iframe>
    </div>
  );
};

export default Demo;
