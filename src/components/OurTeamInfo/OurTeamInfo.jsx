import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import SectionTitle from "../../pages/shared/SectionTitle";
// import SectionTitle from "../../pages/shared/SectionTitle";

const OurTeamInfo = ({ num }) => {
  return (
    <div className="py-4 mb-8">
      <div>
        <SectionTitle text={"meet our teams"} number={num} />
      </div>
      <div className="my-container">
        <div>
          <Swiper
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            creativeEffect={true}
            modules={[Autoplay, Navigation, EffectCreative]}
          >
            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"web development"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">redwan islam</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 4  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"seo expert"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">redwan islam</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 4  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"digital marketing"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">redwan islam</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 4  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white backdrop-blur-md p-4 border border-zinc-200">
                <div>
                  <SectionTitle text={"graphics design"} />
                </div>

                <div className="mx-auto w-max">
                  {/* // ! AVATAR  */}
                  <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                    <img
                      className="max-w-full w-full"
                      src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                      alt="avatar"
                    />
                  </div>
                  {/* // ! TITLLE  */}
                  <div className="text-center leading-4 mt-2">
                    <h3 className="uppercase font-semibold">redwan islam</h3>
                    <p className="text-p-text uppercase text-sm font-semibold">
                      team head
                    </p>
                  </div>
                </div>

                {/* // ! GROUP  */}
                <div className="flex items-center justify-center pb-4 gap-12 mt-8 flex-wrap">
                  {/* // * person 1  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 2  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 3  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                  {/* // * person 4  */}
                  <div className="">
                    {/* // ! AVATAR  */}
                    <div className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 overflow-hidden mx-auto">
                      <img
                        className="max-w-full w-full"
                        src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                        alt="avatar"
                      />
                    </div>
                    {/* // ! TITLLE  */}
                    <div className="text-center leading-4 mt-2">
                      <h3 className="uppercase font-semibold">redwan islam</h3>
                      <p className="text-p-text uppercase text-sm font-semibold">
                        team head
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurTeamInfo;
