import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { RingCards } from "../../../Data/RingCards";
import MenSection from "../../components/HomeCategory/MenSection";
import WomenSection from "../../components/HomeCategory/WomenSection";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={RingCards}
          SectionName={"MoonMade Collection"}
        />
      </div>
      <div>
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-25 dark:text-opacity-100" />{" "}
        <WomenSection />
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#4f332c] to-transparent opacity-25 dark:text-opacity-100" />
        <MenSection />
      </div>
    </div>
  );
};

export default HomePage;
