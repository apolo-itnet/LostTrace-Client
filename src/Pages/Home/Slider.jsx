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
        <span className="text-7xl md:text-9xl xl:text-[14rem] leading-10 xl:leading-[10rem] text-teal-800">
          LOST
        </span>
        <span className="text-7xl md:text-9xl xl:text-[14rem] leading-10 xl:leading-[10rem] text-amber-400 -ml-2">
          TRACE
        </span>
      </>
    ),
    subtitle: "Lost & Found Solution",
    description:
      "Track, report, and recover lost items effortlessly with our all-in-one platform. We ensure every step is safe, simple, and fast for our users.",
    image: "https://i.postimg.cc/MKkw53pg/Worried-amico.png",
  },
  {
    title: (
      <>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[12rem] leading-tight">
          FIND <span className="text-teal-800">WHAT'S</span> LOST
        </p>
      </>
    ),
    subtitle: "Every Lost Item Has a Way Back",
    description:
      "Connecting people with their missing valuables through smart search and real-time updates. We aim to bring peace of mind to every user who loses something valuable.",
    image: "https://i.postimg.cc/jjjY2GMn/Worried-rafiki.png",
  },
  {
    title: (
      <>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] leading-tight">
          <span className="text-teal-800">POST.</span> TRACE.
          <span className="text-teal-800"> RETURN.</span>
        </p>
      </>
    ),
    subtitle: "Your Trusted Partner in Recovery",
    description:
      "Empowering you to reclaim what matters—with speed, security, and simplicity. Our mission is to reconnect people with what they value the most.",
    image: "https://i.postimg.cc/Xq8WzWvx/undraw-travelers-kud9.webp",
  },
];


const Slider = () => {
  const { user } = useAuth();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="h-full w-full mx-auto overflow-hidden">
      <div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          modules={[EffectFade, Navigation, Autoplay]}
          effect="fade"
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
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
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-[calc(100vh-80px)] mx-auto flex px-4  relative">
                <AnimatePresence mode="wait">
                  {activeSlide === idx && (
                    <motion.div
                      key={`left-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="w-full flex flex-col justify-center items-center gap-2 md:gap-4"
                    >
                      <motion.h1
                        variants={slideUp(1.1)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-4xl md:text-7xl lg:text-9xl  bebas uppercase font-medium text-amber-400"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        variants={slideUp(1.2)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-xl md:text-4xl lg:text-6xl 2xl:text-7xl bebas uppercase underline decoration-amber-400"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <div className="flex justify-center items-center gap-4 lg:w-4xl md:w-xl w-full">
                        <div className="flex-1 hidden lg:block "></div>
                        <div className="flex-1 flex flex-col justify-center items-center  text-center lg:text-left lg:items-start  ">
                          <motion.p
                            variants={slideUp(1.4)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-sm md:text-lg manrope tracking-wide py-2 lg:py-4"
                          >
                            {slide.description}
                          </motion.p>

                          <motion.div
                            variants={slideUp(1.6)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                          >
                            <SecondaryBtn
                              label="View More"
                              className="!px-6 py-3"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}

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
