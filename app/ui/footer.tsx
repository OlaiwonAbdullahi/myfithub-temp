import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" font-fredoka p-7">
      <hr className=" border-t border-[#234E49]" />
      <div className=" flex items-center gap-2.5 text-center justify-center p-4 text-neutral-700">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-semibold">MyFitHub</div> <sup>Beta</sup>
        </Link>
        All right Reserved
      </div>
    </div>
  );
};

export default Footer;
