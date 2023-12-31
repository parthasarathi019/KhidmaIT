import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-navBg pt-8 mt-8">
      <div className="my-container flex flex-wrap gap-5 justify-between">
        <div className="text-zinc-100 space-y-4">
          <h2 className="text-2xl font-semibold">Lets talk🤙</h2>

          <div className="text-zinc-200 space-y-2">
            <p className="flex items-center gap-2">
              <BsTelephone /> +8801976243616
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineMailOutline /> Khidmahit2023@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <BiMap /> Tongibari, Munshiganj, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize font-medium">
          <Link to={"/"}>home</Link>
          <Link to={"/"}>service</Link>
          <Link to={"/about-us"}>company</Link>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize ">
          <Link to={"/"}>technical support</Link>
          <Link to={"/"}>development</Link>
          <Link to={"/"}>technology information</Link>
          <Link to={"/"}>testing</Link>
          <Link to={"/"}>consulting</Link>
        </div>
      </div>

      <p className="text-zinc-200 text-center font-semibold  py-3">
        &copy; {new Date().getFullYear()} copy rights. All right reserved by
        <span className="font-bold text-yellow-400"> khidmah it</span>
      </p>
    </div>
  );
};

export default Footer;
