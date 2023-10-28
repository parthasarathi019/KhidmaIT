import SectionTitle from "../shared/SectionTitle";

import aboutImg from "../../assets/about.png";
import ProjectInfo from "./ProjectInfo";

const AboutUs = () => {
  return (
    <div className="bg-white py-14 px-2">
      <div className="my-container">
        <div className="mx-auto w-full">
          <SectionTitle text={"about us"} number={"01"} />
        </div>

        <div className="mb-6">
          <p className="text-[36px] sm:text-[45px] md:text-[50px] text-center font-semibold leading-tight">
            The company leads entire webdesign process from concept to delivery.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-full ">
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="w-full rounded-md"
          />
        </div>

        {/* project info  */}
        <ProjectInfo />
      </div>
    </div>
  );
};

export default AboutUs;
