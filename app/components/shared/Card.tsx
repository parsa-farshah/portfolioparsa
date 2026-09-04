"use client";
import { Check } from "lucide-react";
import Badge from "./Badge";
import myData from "@/app/store";

interface CardProps {
  title?: string;
  description?: string;
  badgeText?: string;
  price?: string;
  priceDescription?: string;
  buttonText?: string;
  buttonAction?: () => void;
  items?: string[];
}

function Card({
  title = "Essential",
  description = "Simple, focused, effective.",
  badgeText,
  price = "750",
  priceDescription = "Perfect for personal sites and small teams.",
  buttonText = "start with essential",
  items = [
    "Custom one-page website design",
    "Fully responsive layout",
    "Light animations & interactions",
    "Webflow CMS setup (optional)",
    "SEO-ready structure",
  ],
  buttonAction,
}: CardProps) {
  const { theme } = myData();

  return (
    <section
      className={`border relative z-50 border-gray-600/30 rounded-lg w-fit h-fit overflow-hidden ${theme ? "bg-[#F6F3F0] text-black" : "bg-[#0B0C0E] text-white"} `}
    >
      {/* bg top right */}
      <div
        className={`w-[70%] h-[50%] absolute right-0 top-0 bg-radial-[at_120%_25%] to-65% ${theme ? "from-[#a7c1f4] to-[#f5f2f0]" : "from-[#07245e] to-[#0b0c0f]"}`}
      ></div>
      {/* bg bottom left */}
      <div
        className={`w-[70%] h-[50%] scale-[-1] absolute left-0 bottom-0 bg-radial-[at_100%_25%] to-75% ${theme ? "from-[#a7c1f4] to-[#f5f2f0]" : "from-[#07245e] to-[#0b0c0f]"}`}
      ></div>
      <div className="flex  flex-col gap-8 relative z-30 p-6">
        {/* title and badge */}
        <section className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">{title}</span>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          {badgeText && (
            <div>
              <Badge text={badgeText} />
            </div>
          )}
        </section>
        {/* price */}
        <section>
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">${price}</span>
            <p className="text-xs text-gray-400 font-medium">
              {priceDescription}
            </p>
          </div>
        </section>
        {/* start button */}
        <button
          onClick={buttonAction}
          className={`w-full border-2 border-[#3578ff] bg-[#0055fe] rounded-md flex justify-center items-center overflow-hidden shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-95 duration-300 py-2`}
        >
          <span className="font-semibold text-white">{buttonText}</span>
        </button>

        {/* items */}
        <span className="uppercase text-sm md:text-base text-gray-500 font-bold">
          you'll get
        </span>
        <ul className="flex flex-col gap-3">
          {items.map((item) => {
            return (
              <div className="flex gap-2">
                <div className="p-1 bg-linear-to-br from-blue-500 to-blue-900 rounded-lg border border-blue-400/50">
                  <Check size={20} className="text-white" />
                </div>
                <li className="text-sm sm:text-lg">{item}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Card;
