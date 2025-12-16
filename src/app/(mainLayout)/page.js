
import Hero from "./HomeComponents/Hero";
import HomeAbout from "./HomeComponents/HomeAbout";
import OurTeam from "./HomeComponents/Team";
import FeaturerWebsite from "./HomeComponents/FeatureWebsite";
import HomeCategory from "./HomeComponents/HomeCategory";
import Test from "./HomeComponents/Test";
import Testimonial from "./HomeComponents/Testimonial";
import HomeLast from "./HomeComponents/HomeLast";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-36">
        <Hero></Hero>
        <HomeCategory></HomeCategory>
        <FeaturerWebsite></FeaturerWebsite>
        <HomeAbout></HomeAbout>

        <OurTeam></OurTeam>
        <Testimonial></Testimonial>
        <HomeLast></HomeLast>
     
      </div>

    </div>
  );
}
