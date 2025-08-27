import Heading from "@/app/ui/heading";
//import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const teamDetails = [
  {
    image: "https://tapback.co/api/avatar/johndoe",
    title: "Omotolani Kehinde-Osems",
    role: "Co-Founder",
    linkedin: "http://linkedin.com/in/omotolani-kehinde-osems-98140818b",
    twitter: "https://x.com/itsomotolani",
    instagram:
      "https://www.instagram.com/lifeofomotola?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: "https://tapback.co/api/avatar/janedoe",
    title: "Onosetale Phyl-Arhedo",
    role: "Co-Founder",
    linkedin: "http://linkedin.com/in/onosetale-phyl-arhedo-5b40211b5",
    twitter: "https://x.com/onosetalee?s=21",
    instagram:
      "https://www.instagram.com/onosetale.evi?igsh=bTE0N3NkaWtiejg4&utm_source=qr",
  },
];

const Team = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-8 sm:py-10 md:py-25 lg:py-28 space-y-8 bg-[#EEF7F6]/50">
      <Heading
        title="The Team"
        paragraph="Driven by passion, powered by purpose - meet the engine that drives MyFitHub"
      />
      <div className="flex flex-col sm:flex-col md:flex-row mx-auto items-center gap-8 justify-center">
        {teamDetails.map((member, idx) => (
          <div className="" key={idx}>
            <div className="border-[#234E49]/20 rounded-2xl bg-white shadow border  p-5 w-82 text-center flex flex-col justify-center items-center space-y-3">
              <img
                src={member.image}
                alt={member.title}
                className="w-30 h-30 rounded-full"
              />
              <div>
                <h2 className="text-lg font-sora text-[#234E49] font-bold">
                  {member.title}
                </h2>
                <span className="text-base font-fredoka">{member.role}</span>
              </div>
              {/*
              <div className="flex flex-row gap-3 mx-auto">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={25} strokeWidth={1} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={25} strokeWidth={1} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={25} strokeWidth={1} />
                </a>
              </div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
