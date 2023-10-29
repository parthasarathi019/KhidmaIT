import SectionTitle from "../shared/SectionTitle";

const Contact = () => {
  return (
    <section className="md:px-8 px-3 py-8">
      <div className="my-container">
        <div>
          <SectionTitle text={"get in touch"} />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-x-3 md:pt-10 pt-6">
          <div className="grid md:grid-cols-2 gap-10 md:flex-row">
            <div className="">
              <p className="pt-6">
                <span className="font-semibold font-sans text-[1.05em]">
                  Email:
                </span>{" "}
                Email@hotmail.com
              </p>
              <p className="pt-6">
                <span className="font-semibold font-sans text-[1.05em]">
                  Phone:
                </span>
                +17 192 1727
              </p>
              <p className="pt-6">
                Feel free to reach out! I'm here to listen and collaborate.
                Whether it's about a project, idea, or just to say hello, I'm
                excited to hear from you. Your thoughts and visions matter, and
                I'm eager to be a part of them{" "}
              </p>
            </div>
            <form className="bg-white p-4 rounded-md border border-zinc-200">
              <div className="space-y-4">
                <div className="">
                  <input
                    placeholder="Enter your name"
                    className="w-full bg-slate-50/40 p-2 rounded-md outline-none border border-zinc-200 focus:border-zinc-400"
                    type="text"
                    required
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    className="w-full bg-slate-50/40 p-2 rounded-md outline-none border border-zinc-200 focus:border-zinc-400"
                    type="email"
                    required
                    name=""
                    id=""
                  />
                </div>
                <div className="">
                  <textarea
                    placeholder="Message here..."
                    className="w-full bg-slate-50/40 p-2 rounded-md outline-none border border-zinc-200 focus:border-zinc-400 min-h-[10rem]"
                    required
                    name=""
                    id=""
                  ></textarea>
                </div>
                <div className=" flex justify-center md:justify-start">
                  {" "}
                  <input
                    className="w-full bg-green-800/70 text-white hover:bg-green-800/90 transition-all cursor-pointer p-2 rounded-md outline-none border border-zinc-200 focus:border-zinc-400 uppercase font-semibold"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
