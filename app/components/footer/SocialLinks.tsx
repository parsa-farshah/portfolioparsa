"use client";
import React from "react";
import { Codepen, Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import myData from "@/app/store";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  // email links open the mail app, so they should not open a new tab
  openInNewTab: boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/parsa-farshah",
    icon: <Github size={20} />,
    openInNewTab: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parsa-dehghan-pour-farashah-85ab04250",
    icon: <Linkedin size={20} />,
    openInNewTab: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/parsa_dehghanpour_dv",
    icon: <Instagram size={20} />,
    openInNewTab: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@frontendfresh",
    icon: <Youtube size={20} />,
    openInNewTab: true,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/parsa-dehghan",
    icon: <Codepen size={20} />,
    openInNewTab: true,
  },
  {
    name: "Email",
    href: "mailto:parsafarashah2002@gmail.com",
    icon: <Mail size={20} />,
    openInNewTab: false,
  },
];

function SocialLinks() {
  const { theme } = myData();
  return (
    <ul className="flex flex-wrap gap-3">
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.name}>
            <a
              href={socialLink.href}
              aria-label={socialLink.name}
              target={socialLink.openInNewTab ? "_blank" : undefined}
              rel={socialLink.openInNewTab ? "noopener noreferrer" : undefined}
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
