import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import myData from "../store";

export function TabsDemo() {
  const { theme } = myData();
  return (
    <Tabs
      defaultValue="overview"
      className="w-full mx-auto flex justify-center "
    >
      <TabsList className="!w-fit !h-fit py-2 border border-[#a1a1a14f] bg-[#fff0] mx-auto !px-4 flex gap-2 ">
        <TabsTrigger
          value="overview"
          className={`w-fit h-fit px-4 py-2 data-[state=active]:bg-[#0055fe] data-[state=active]:!text-white  cursor-pointer ${theme ? " !text-black" : "!text-white"}`}
        >
          Normal
        </TabsTrigger>

        <TabsTrigger
          value="analytics"
          className={`w-fit h-fit px-4 py-2 data-[state=active]:bg-[#0055fe] data-[state=active]:!text-white  cursor-pointer ${theme ? " !text-black" : "!text-white"}`}
        >
          Professional
        </TabsTrigger>
      </TabsList>
      {/* Overview cards */}
      <TabsContent
        className="mt-20 w-fit mx-auto flex justify-center flex-wrap gap-10"
        value="overview"
      >
        {/* left side */}
        <Card
          className={`border border-[#a1a1a14f] bg-[#fff0]  w-[90%] md:w-[40%] backdrop-blur-lg ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
        >
          <CardHeader>
            <CardTitle>Freelane</CardTitle>
            <CardDescription className="ml-1">
              if you have a normal project
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm ml-1">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
        {/* right side */}
        <Card
          className={`border border-[#a1a1a14f] bg-[#fff0]  w-[90%] md:w-[40%] backdrop-blur-lg ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
        >
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      {/* analytics card */}
      <TabsContent
        className="mt-20 w-fit mx-auto flex justify-center flex-wrap gap-10"
        value="analytics"
      >
        <Card
          className={`border border-[#a1a1a14f] bg-[#fff0]  w-[90%] md:w-[40%] backdrop-blur-lg ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
        >
          <CardHeader>
            <CardTitle>analytics</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
        <Card
          className={`border border-[#a1a1a14f] bg-[#fff0]  w-[90%] md:w-[40%] backdrop-blur-lg ${theme ? "bg-[#d3d3d33a] text-black" : "bg-[#020202a8] text-white"}`}
        >
          <CardHeader>
            <CardTitle>analytics</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
