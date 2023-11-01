import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcessSeo from "../services/Seo/OurProcessSeo";
import ServicesSeo from "../services/Seo/ServicesSeo";
// import SectionTitle from "../shared/SectionTitle";

const Seo = () => {
  const navItems = [
    {
      label: "Keyword Research",
      to: "#",
    },
    {
      label: "Competitors Analysis",
      to: "#",
    },
    {
      label: "On Page SEO",
      to: "#",
    },
    {
      label: "Off Page SEO",
      to: "#",
    },
    {
      label: "Backlink Analyzing",
      to: "#",
    },
  ];
  return (
    <section className="my-container">
      <header className="items-center grid-cols-4 gap-10 py-8 space-y-4 lg:grid lg:space-y-0 lg:py-20">
        <div className="col-span-3 space-y-4">
          {/* <div className="w-max">
            <SectionTitle text={"our services"} number={"01"} />
          </div> */}
          <h3 className="text-3xl text-center md:text-left font-semibold leading-tight lg:text-5xl lg:w-3/4">
            Accelerate your online growth with sophisticated SEO solutions
          </h3>
          <p className="font-semibold text-center md:text-left">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
         <div className="flex justify-center md:justify-start"> <Button text="Request A Quote" /></div>
        </div>
        <ul className="col-span-1 space-y-1 lg:space-y-4 hidden md:block">
          {navItems.map((item) => (
            <li key={item.label} className="text-lg font-bold ">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <div>
        <OurProcessSeo />
        <ServicesSeo />
      </div>
    </section>
  );
};

export default Seo;
