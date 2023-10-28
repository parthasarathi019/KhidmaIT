import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcesswebdev from "../services/Web/OurProcesswebdev";
import Serviceswebdev from "../services/Web/Serviceswebdev";

const WebDevelopment = () => {
  const navItems = [
    {
      label: "Web Development",
      to: "#"
    },
    {
      label: "Technical Support",
      to: "#"
    },
    {
      label: "AWS/Azure",
      to: "#"
    },
    {
      label: "Consulting",
      to: "#"
    },
    {
      label: "Information Technology",
      to: "#"
    },
  ]
  return (
    <section className="my-container">
      <header className="items-center grid-cols-4 gap-10 py-8 space-y-4 lg:grid lg:space-y-0 lg:py-20">
        <div className='col-span-3 space-y-4'>
          <p>OUR SERVICES</p>
          <h3 className='text-3xl font-semibold leading-tight lg:text-5xl lg:w-3/4'>We Build Software Solutionthat Solve Clients Business Challenges</h3>
          <p className='font-semibold'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
          <Button text="Request A Quote" />
        </div>
        <ul className='col-span-1 space-y-1 lg:space-y-4'>
          {navItems.map((item) => (
            <li key={item.label} className='text-lg font-bold '>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </header>
      <div>
        <OurProcesswebdev/>
        <Serviceswebdev />
      </div>
    </section>
)};

export default WebDevelopment;
