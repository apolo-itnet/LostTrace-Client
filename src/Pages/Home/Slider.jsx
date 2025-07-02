import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SecondaryBtn from "../../Shared/Button/SecondaryBtn";
import { slideUp } from "../../Utility/animation";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";


const heroSlides = [
  {
    title: (
      <>
        <span className="text-teal-800">LOST</span>{" "}
        <span className="px-2 block lg:hidden">&</span>
        <span className="hidden lg:flex text-6xl absolute -bottom-2 left-56">
          &
        </span>
        <span className="tracking-widest">TRACE</span>
      </>
    ),
    subtitle: "Lost & Found Solution",
    description:
      "Track, report, and recover lost items effortlessly with our all-in-one platform.",
    image: "https://i.postimg.cc/MKkw53pg/Worried-amico.png",
  },
  {
    title: (
      <>
        FIND WHAT'S <span className="text-teal-800">LOST</span>
      </>
    ),
    subtitle: "Every Lost Item Has a Way Back",
    description:
      "Connecting people with their missing valuables through smart search and real-time updates.",
    image: "https://i.postimg.cc/jjjY2GMn/Worried-rafiki.png",
  },
  {
    title: (
      <>
        <span className="text-teal-800">POST.</span> TRACE.RETURN
      </>
    ),
    subtitle: "Your Trusted Partner in Recovery",
    description:
      "Empowering you to reclaim what matters—with speed, security, and simplicity.",
    image: "https://i.postimg.cc/Xq8WzWvx/undraw-travelers-kud9.webp",
  },
];

const Slider = () => {
  const { user } = useAuth();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="h-full w-full mx-auto overflow-hidden bg-sky-50/50 ">
      <div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          modules={[EffectFade, Navigation, Autoplay]}
          effect="fade"
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={2500}
          keyboard={{
            enabled: true,
          }}
          loop
          navigation={{
            nextEl: ".slide-button-next",
            prevEl: ".slide-button-prev",
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
          className=" relative group res-padding "
        >
          {/* slide-1 */}
          <SwiperSlide>
            <div className="flex flex-col gap-6 lg:flex-row justify-between items-center h-[calc(100vh-81px)] w-full mx-auto relative res-padding">
              <AnimatePresence mode="wait">
                {activeSlide === 0 && (
                  <>
                    {/* left side */}
                    <motion.div
                      key="left-hero"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="w-full md:w-2xl lg:w-[56%]   flex flex-col justify-center items-start gap-2 lg:gap-6 lg:pl-8  res-padding "
                    >
                      {user && (
                        <div className="text-2xl lg:text-4xl bebas uppercase font-black text-amber-400 relative lg:leading-10 lg:pb-12 py-4">
                          <motion.p
                            variants={slideUp(0.2)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-teal-800 tracking-wider"
                          >
                            Hello -
                            <span className="tracking-widest">
                              {user.displayName}
                            </span>
                          </motion.p>
                          <motion.p
                            variants={slideUp(0.6)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-amber-400 tracking-wider"
                          >
                            Welcome To{" "}
                          </motion.p>{" "}
                        </div>
                      )}
                      <motion.h1
                        variants={slideUp(1.2)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="inline-flex gap-2 text-6xl md:text-8xl lg:text-[9rem] bebas uppercase font-black text-amber-400 lg:leading-12 relative"
                      >
                        <span className="text-teal-800 tracking-wider ">
                          LOST
                        </span>{" "}
                        <span className="px-2 block lg:hidden">&</span>
                        <span className="hidden lg:flex text-6xl absolute -bottom-2 left-56">
                          &
                        </span>
                        <span className="tracking-widest">TRACE</span>
                      </motion.h1>

                      <motion.p
                        variants={slideUp(1.4)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-6xl bebas uppercase tracking-normal underline decoration-amber-400"
                      >
                        Lost & Found Solution
                      </motion.p>

                      <motion.p
                        variants={slideUp(1.6)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="lg:w-md lg:text-md text-sm manrope lg:tracking-wider tracking-wide"
                      >
                        Track, report, and recover lost items effortlessly with
                        our all-in-one platform.
                      </motion.p>

                      <motion.div
                        variants={slideUp(1.8)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <SecondaryBtn
                          label={"View More"}
                          className="!px-4 lg:p-6 "
                        />
                      </motion.div>
                    </motion.div>

                    {/* right side */}
                    <div
                      key="right-img"
                      className="lg:w-[44%] md:w-md w-80 h-full mx-auto relative flex lg:justify-end justify-center items-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative w-full h-full inline-flex justify-center items-center"
                      >
                        <img
                          src="https://i.postimg.cc/MKkw53pg/Worried-amico.png"
                          alt="Worried-amico"
                          className="object-center object-cover p-4 z-10 absolute w-sm"
                        />
                        <img
                          src="https://i.postimg.cc/SNR0M3Wc/blob-2-opacity-100.gif"
                          alt=""
                          className="absolute w-full"
                        />
                        <img
                          src="https://i.postimg.cc/MKFCb5DN/blob-1-opacity-100.gif"
                          alt=""
                          className="absolute w-full"
                        />
                      </motion.div>
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>

          {/* slide-2 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-between items-center h-[calc(100vh-83px)] w-full mx-auto res-padding relative">
              <AnimatePresence mode="wait">
                {activeSlide === 1 && (
                  <>
                    {/* left side */}
                    <motion.div
                      key="left-hero"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-sm md:w-2xl lg:w-[56%]   flex flex-col justify-center items-start gap-2 lg:gap-6 lg:pl-8  res-padding "
                    >
                      <motion.h1
                        variants={slideUp(1.1)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-[7rem]  bebas tracking-wider font-black text-amber-400 leading-24"
                      >
                        FIND WHAT'S <span className="text-teal-800">LOST</span>
                      </motion.h1>
                      <motion.p
                        variants={slideUp(1.0)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-6xl bebas uppercase tracking-tight font-sans underline decoration-amber-400"
                      >
                        every Lost Item Has a Way Back
                      </motion.p>

                      <motion.p
                        variants={slideUp(0.9)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-md text-md manrope tracking-wider py-4"
                      >
                        Connecting people with their missing valuables through
                        smart search and real-time updates.
                      </motion.p>
                      <motion.div
                        variants={slideUp(0.8)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <SecondaryBtn label={"View More"} />
                      </motion.div>
                    </motion.div>

                    {/* right side */}
                    <motion.div
                      key="right-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="lg:w-[44%] md:w-md w-80 h-full mx-auto relative flex lg:justify-end justify-center items-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative w-full h-full inline-flex justify-center items-center"
                      >
                        <img
                          src="https://i.postimg.cc/jjjY2GMn/Worried-rafiki.png"
                          alt="Worried-rafiki"
                          className="object-center object-cover p-4 z-10 absolute w-sm"
                        />
                        {/* <div className="relative w-full h-full"> */}

                        <img
                          src={
                            "https://i.postimg.cc/SNR0M3Wc/blob-2-opacity-100.gif"
                          }
                          alt=""
                          className="absolute w-full"
                        />
                        <img
                          src={
                            "https://i.postimg.cc/MKFCb5DN/blob-1-opacity-100.gif"
                          }
                          alt=""
                          className="absolute w-full"
                        />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>

          {/* slide-3 */}
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-between items-center h-[calc(100vh-83px)] w-full mx-auto res-padding relative">
              <AnimatePresence mode="wait">
                {activeSlide === 2 && (
                  <>
                    {/* left side */}
                    <motion.div
                      key="left-hero"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-sm md:w-2xl lg:w-[56%]   flex flex-col justify-center items-start gap-2 lg:gap-6 lg:pl-8  res-padding"
                    >
                      <motion.h1
                        variants={slideUp(1.1)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-[6rem]  bebas tracking-wider font-black text-amber-400 leading-24"
                      >
                        <span className="text-teal-800">POST.</span>
                        TRACE.RETURN
                      </motion.h1>
                      <motion.p
                        variants={slideUp(1.0)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-5xl bebas uppercase tracking-tight font-sans underline decoration-amber-400"
                      >
                        Your Trusted Partner in Recovery
                      </motion.p>

                      <motion.p
                        variants={slideUp(0.9)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-md text-md manrope tracking-wider py-4"
                      >
                        Empowering you to reclaim what matters—with speed,
                        security, and simplicity.
                      </motion.p>
                      <motion.div
                        variants={slideUp(0.8)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <SecondaryBtn label={"View More"} />
                      </motion.div>
                    </motion.div>

                    {/* right side */}
                    <motion.div
                      key="right-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="lg:w-[44%] md:w-md w-80 h-full mx-auto relative flex lg:justify-end justify-center items-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative w-full h-full inline-flex justify-center items-center"
                      >
                        <img
                          src="https://i.postimg.cc/Xq8WzWvx/undraw-travelers-kud9.webp"
                          alt="Worried-found"
                          className="object-center object-cover p-4 z-10 absolute w-sm"
                        />
                        {/* <div className="relative w-full h-full"> */}

                        <img
                          src={
                            "https://i.postimg.cc/SNR0M3Wc/blob-2-opacity-100.gif"
                          }
                          alt=""
                          className="absolute w-full"
                        />
                        <img
                          src={
                            "https://i.postimg.cc/MKFCb5DN/blob-1-opacity-100.gif"
                          }
                          alt=""
                          className="absolute w-full"
                        />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>

          <div className="slide-button-prev rounded-md relative lg:absolute top-80  w-10 h-10 flex justify-center items-center bg-amber-400 text-teal-800 group-hover:left-0 -left-96 duration-300 ease-in-out transition-all z-50 cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="slide-button-next rounded-md relative lg:absolute top-80  w-10 h-10 flex justify-center items-center bg-amber-400 text-teal-800 group-hover:right-0 -right-96 duration-300 ease-in-out transition-all z-50 cursor-pointer">
            <ArrowRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
