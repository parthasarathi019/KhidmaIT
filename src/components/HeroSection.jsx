import heroImg from "../assets/Image.png";
import Button from "../pages/shared/Button";
import { Fade } from "react-awesome-reveal";


const HeroSection = () => {
  return (
    <div className="bg-navBg text-white pb-4 md:pb-0 md:py-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-8 justify-between items-center my-container ">
        <div className="">
          {/* left side  */}
          
          <div className="space-y-5 md:max-w-[80%] w-full order-1">
          <Fade direction="up">
            <h1 className="text-[38px] sm:text-[45px] md:text-[50px] leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            </Fade>
           <Fade direction="up">
           <p className="text-zinc-200 font-normal sm:max-w-xs w-full">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
           </Fade>

            <Fade direction="up">
            <Button text="Request Quote" />
            </Fade>
          </div>
        
        </div>

        {/* right side */}

        <div className="-order-2 sm:order-2">
          <img
            src={heroImg}
            alt="hero image"
            loading="lazy"
            className="max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
