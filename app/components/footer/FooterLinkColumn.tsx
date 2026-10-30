"use client";
import React from "react";
import myData from "@/app/store";

export interface FooterLink {
  title: string;
  href: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  const { theme } = myData();
  return (
    <div className="flex flex-col gap-6">
      <span
        className={`uppercase text-sm font-semibold tracking-wider ${theme ? "text-heading-light" : "text-heading-dark"}`}
      >
        {title}
      </span>
      <ul className="flex flex-col gap-4">
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a
                href={link.href}
                className={`duration-300 hover:text-brand ${theme ? "text-body-light" : "text-body-dark"}`}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterLinkColumn;
