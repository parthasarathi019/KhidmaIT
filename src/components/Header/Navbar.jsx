import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import second from "../../assets/less.png";
import AOS from "aos";
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

import "aos/dist/aos.css"; // You can also use <link> for styles
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };
  const navData = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "services",
      path: "/web-development",
      submenu: [
        {
          id: 11,
          name: "web development",
          path: "web-development",
        },
        {
          id: 22,
          name: "graphics design",
          path: "graphics-design",
        },
        {
          id: 322,
          name: "digital marketing",
          path: "digital-marketing",
        },
        {
          id: 44,
          name: "seo",
          path: "seo",
        },
      ],
    },
    {
      id: 3,
      name: "about us",
      path: "about-us",
    },
    {
      id: 4,
      name: "contact us",
      path: "contact-us",
    },
  ];
  return (
    <>
      <nav className="bg-navBg py-3 sticky top-0 left-0 w-full z-30">
        <div
          className="my-container flex justify-between items-center px-2"
        >
          <div>
            <img src={second} alt="" />
          </div>
          <div className="sm:flex items-center gap-3 hidden">
            {navData.map((item) => (
              <li
                key={item.id}
                className="list-none relative group uppercase text-zinc-300 font-semibold hover:text-white"
              >
                <NavLink
                  to={item.path}
                  onClick={toggleNav}
                  className={({ isActive }) =>
                    isActive ? "active dot" : "inActive"
                  }
                >
                  {item.name}
                </NavLink>

                <div className="hidden group-hover:block absolute top-[25px] left-0 bg-white  rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
                  {item?.submenu?.map((menu) => (
                    <Link
                      onClick={toggleNav}
                      to={menu.path}
                      key={menu.id}
                      className="px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-500 font-medium capitalize hover:text-btnBg"
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </div>

          <p
            className="text-white sm:hidden text-2xl cursor-pointer"
            onClick={toggleNav}
          >
            <RiMenu4Fill />
          </p>
        </div>
      </nav>

      {/* MOBILE MENU  */}

      <div
        className={`block sm:hidden bg-black/90 fixed z-50 top-0 right-0 max-w-screen-sm w-full pb-4 text-center h-screen space-y-3  transition-all backdrop-blur-md ${
          showNav ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <span
          className="absolute top-4 right-4 text-white text-2xl w-8 h-8 bg-rose-500 rounded-full grid place-content-center cursor-pointer"
          onClick={toggleNav}
        >
          <MdClose className="p-1 font-semibold" />
        </span>
        <div className="pt-[5rem] space-y-4">
          {navData.map((item) => (
            <li
              key={item.id}
              className="list-none relative group w-max mx-auto"
            >
              <NavLink
                onClick={toggleNav}
                to={item.path}
                className="uppercase text-white font-semibold hover:text-white"
              >
                {item.name}
              </NavLink>

              <div className="absolute top-0 -right-[11rem] bg-navBg border border-zinc-700 rounded-md z-10 space-y-3  translate-y-3 transition-all opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md  ">
                {item?.submenu?.map((menu) => (
                  <Link
                    to={menu.path}
                    key={menu.id}
                    onClick={toggleNav}
                    className="text-sm px-6 last:pb-6 first:pt-5 flex flex-col w-max text-zinc-50 transition-all font-medium capitalize hover:text-btnBg "
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
