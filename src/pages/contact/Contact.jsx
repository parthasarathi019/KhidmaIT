import SectionTitle from "../shared/SectionTitle";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="py-10">
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-purple-500 to-pink-500 absolute top-0 right-0 -z-10 blur-[250px]"></div>
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-yellow-500 to-rose-500 absolute top-0 left-0 -z-10 blur-[250px]"></div>
      <div className="my-container">
        <div className="">
          <SectionTitle text={"contact us"} />
        </div>

        <div className="grid gap-[7rem] md:gap-3 md:grid-cols-[1fr,_2fr] bg-white px-6 border border-zinc-200 py-12  rounded-md relative">
          {/* left  */}

          <div className="relative">
            <h1 className="capitalize text-4xl font-medium text-zinc-700 text-center mb-12 ">
              Get in touch
            </h1>

            <div className="space-y-7 w-max mx-auto">
              <a
                href="tel:019873855"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <BiPhoneCall />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  Book a free call
                </p>
              </a>
              <a
                href="mailto:Khidmahit2023@gmail.com"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <HiOutlineMail />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">Send Email</p>
              </a>
              <a
                href="#"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <AiOutlineWhatsApp />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  WhatsApp Chat
                </p>
              </a>
            </div>
          </div>
          {/* right  */}
          <div>
            <h1 className="mb-8 text-3xl text-zinc-700 font-semibold">
              Leave a message and we will contact you shortly.
            </h1>

            <form
              className="relative space-y-5
            "
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-rose-50/20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-rose-50/20"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-rose-50/20"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-rose-50/20"
                ></textarea>
              </div>

              <div className=" w-full sm:w-max mx-auto  ">
                <button
                  type="submit"
                  className="w-full sm:w-max border border-orange-500 py-2 px-4 rounded-md drop-shadow-sm  text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
