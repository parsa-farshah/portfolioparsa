"use client";
import Badge from "./Badge";
import myData from "@/app/store";

interface CardProps {
  title: string;
  description: string;
  badgeText: string;
  price: string;
  priceDescription: string;
  buttonText: string;
  buttonAction?: () => void;
}

function Card({
  title = "Essential",
  description = "Simple, focused, effective.",
  badgeText = "best",
  price = "750",
  priceDescription = "Perfect for personal sites and small teams.",
  buttonText = "start with essential",
  buttonAction,
}: CardProps) {
  const { theme } = myData();

  return (
    <section
      className={`border relative border-gray-600/30 rounded-lg h-[100vh] w-[95%] ${theme ? "bg-[#F6F3F0] text-black" : "bg-[#0B0C0E] text-white"} `}
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
          <div>
            <Badge text={badgeText} />
          </div>
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
          className="w-full border-2 border-[#3578ff] bg-[#0055fe] rounded-md flex justify-center items-center overflow-hidden shadow-lg shadow-blue-500/30 cursor-pointer hover:scale-95 duration-300 py-2"
        >
          <span className="font-semibold">{buttonText}</span>
        </button>
      </div>
    </section>
  );
}

export default Card;
