"use client";
import React from "react";
import Image from "next/image";
import myData from "@/app/store";
import FooterLinkColumn, { FooterLink } from "./FooterLinkColumn";
import SocialLinks from "./SocialLinks";

// TODO: replace "#" with section ids when the sections get an id
const sectionLinks: FooterLink[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Projects", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "FAQ", href: "#" },
];

const socialTextLinks: FooterLink[] = [
  { title: "GitHub", href: "https://github.com/parsa-farshah" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/parsa-dehghan-pour-farashah-85ab04250",
  },
  { title: "YouTube", href: "https://www.youtube.com/@frontendfresh" },
  { title: "CodePen", href: "https://codepen.io/parsa-dehghan" },
];

function Footer() {
  const { theme } = myData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit relative">
      {/* blue glow at the bottom */}
      <div
        className={`w-full h-[300px] absolute left-0 bottom-0 bg-radial-[at_50%_100%] to-70% ${theme ? "from-brand-glow-light to-page-light" : "from-brand-glow-dark to-page-dark"}`}
      ></div>

      <div className="w-[90%] md:w-[72%] mx-auto relative z-10 pt-10 pb-24">
        {/* top part */}
        <div className="flex flex-col md:flex-row md:justify-between gap-14">
          {/* about */}
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="relative w-[82px] h-[62px] rounded-xl overflow-hidden">
              <Image
                src="/images/parsa.png"
                alt="parsa dehghan"
                fill
                className="object-cover"
              />
            </div>
            <p className={theme ? "text-body-light" : "text-body-dark"}>
              Every project starts with a story. I turn those stories into
              digital experiences that feel effortless and expressive.
            </p>
            <SocialLinks />
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-10 md:gap-24">
            <FooterLinkColumn title="Sections" links={sectionLinks} />
            <FooterLinkColumn title="Social" links={socialTextLinks} />
          </div>
        </div>

        {/* bottom part */}
        <div
          className={`mt-20 pt-8 border-t flex flex-col md:flex-row md:justify-between gap-4 ${theme ? "border-line-light text-body-light" : "border-line-dark text-body-dark"}`}
        >
          <span>Parsa Dehghan. All rights reserved. © {currentYear}</span>
          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
