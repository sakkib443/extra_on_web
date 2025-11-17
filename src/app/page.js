import Image from "next/image";
import Hero from "./HomeComponents/Hero";
import HomeAbout from "./HomeComponents/HomeAbout";
import OurTeam from "./HomeComponents/Team";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HomeAbout></HomeAbout>
      <OurTeam></OurTeam>
    </div>
  );
}
