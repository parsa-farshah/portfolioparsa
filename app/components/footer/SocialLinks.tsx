"use client";
import React from "react";
import { Dribbble, Instagram, Linkedin } from "lucide-react";
import XIcon from "@mui/icons-material/X";
import myData from "@/app/store";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

// TODO: replace "#" with your real profile URLs
const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "#", icon: <Instagram size={20} /> },
  { name: "Dribbble", href: "#", icon: <Dribbble size={20} /> },
  { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
  { name: "X", href: "#", icon: <XIcon sx={{ width: 18, height: 18 }} /> },
];

function SocialLinks() {
  const { theme } = myData();
  return (
    <ul className="flex gap-3">
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.name}>
            <a
              href={socialLink.href}
              aria-label={socialLink.name}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full border flex justify-center items-center duration-300 hover:text-brand ${theme ? "border-icon-border-light text-body-light" : "border-icon-border-dark text-body-dark"}`}
            >
              {socialLink.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
