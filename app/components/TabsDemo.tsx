import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import myData from "../store";
import Card from "./shared/Card";

export function TabsDemo() {
  const { theme } = myData();
  return (
    <Tabs
      defaultValue="Monthly"
      className="w-full mx-auto flex justify-center "
    >
      <TabsList className="!w-fit !h-fit py-2 border border-[#a1a1a14f] bg-[#fff0] mx-auto !px-4 flex gap-2 ">
        <TabsTrigger
          value="Monthly"
          className={`w-fit h-fit px-4 py-2 data-[state=active]:bg-[#0055fe] data-[state=active]:!text-white  cursor-pointer ${theme ? " !text-black" : "!text-white"}`}
        >
          Monthly
        </TabsTrigger>

        <TabsTrigger
          value="Yearly"
          className={`w-fit h-fit px-4 py-2 data-[state=active]:bg-[#0055fe] data-[state=active]:!text-white  cursor-pointer ${theme ? " !text-black" : "!text-white"}`}
        >
          Professional
        </TabsTrigger>
      </TabsList>
      {/* Normal cards */}
      <TabsContent
        className="mt-20 w-fit mx-auto flex justify-center flex-wrap gap-5"
        value="Monthly"
      >
        <section className="p-5 w-full flex flex-col gap-10 lg:flex-row">
          <Card
            title="Essential"
            description="Simple, focused, effective."
            badgeText="best"
            price="950"
            priceDescription="Perfect for personal sites and small teams."
            buttonText="Start with Essential"
            items={[
              "Custom one-page website design",
              "Fully responsive layout",
              "Light animations & interactions",
              "Webflow CMS setup (optional)",
              "SEO-ready structure",
            ]}
          ></Card>
          <Card
            title="Elevate"
            description="For stories that deserve motion."
            price="1,950"
            priceDescription="Best for growing businesses and creative studios."
            buttonText="Start with Elevate"
            items={[
              "Multi-page website (up to 5 pages)",
              "Custom UI/UX design",
              "Advanced GSAP animations",
              "CMS & dynamic collections",
              "Launch support & training",
            ]}
          ></Card>
        </section>
      </TabsContent>
      {/* Professional card */}
      <TabsContent
        className="mt-20 w-fit mx-auto flex justify-center flex-wrap gap-10"
        value="Yearly"
      >
        <section className="p-5 w-full flex flex-col gap-10 lg:flex-row">
          <Card
            title="Essential"
            description="Simple, focused, effective."
            badgeText="best"
            price="750"
            priceDescription="Perfect for personal sites and small teams."
            buttonText="Start with Essential"
            items={[
              "Custom one-page website design",
              "Fully responsive layout",
              "Light animations & interactions",
              "Webflow CMS setup (optional)",
              "SEO-ready structure",
            ]}
          ></Card>
          <Card
            title="Elevate"
            description="For stories that deserve motion."
            price="1,750"
            priceDescription="Best for growing businesses and creative studios."
            buttonText="Start with Elevate"
            items={[
              "Multi-page website (up to 5 pages)",
              "Custom UI/UX design",
              "Advanced GSAP animations",
              "CMS & dynamic collections",
              "Launch support & training",
            ]}
          ></Card>
        </section>
      </TabsContent>
    </Tabs>
  );
}
