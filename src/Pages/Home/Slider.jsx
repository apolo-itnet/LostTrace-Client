import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "LOST TRACE",
    subtitle: "Lost & Found Solution",
    image: "https://i.postimg.cc/MKkw53pg/Worried-amico.png",
  },
  {
    id: 2,
    title: "FIND WHAT'S LOST",
    subtitle: "Your personal item recovery hub",
    image: "https://i.postimg.cc/jjjY2GMn/Worried-rafiki.png",
  },
  {
    id: 3,
    title: "TRACE. REPORT. RETURN.",
    subtitle: "Helping you reconnect with what matters",
    image: "https://i.postimg.cc/Xq8WzWvx/undraw-travelers-kud9.webp",
  },
];

const Slider = () => {
  return (
    <div className="h-[calc(100vh-83px)] w-full res-padding bg-teal-800/80 ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={2000}
        loop
      >
        {slides.map(({ id, title, subtitle, image }) => (
          <SwiperSlide key={id}>
            <div className="w-full mx-auto h-[calc(100vh-83px)] flex items-center justify-between gap-4 px-4 ">
              <motion.div
                className="space-y-4 flex justify-between items-center gap-4 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="w-full">
                  <h1 className="text-4xl md:text-9xl bebas tracking-wider font-black text-amber-400">
                    {title}
                  </h1>
                  <p className="text-4xl md:text-5xl bebas uppercase font-sans">{subtitle}</p>
                </div>

                <div className="w-full mx-auto bg-base-300/50 h-[calc(100vh-80px-80px)] p-2 border-2 border-base-300/50 rounded-t-full flex">
                  <img src={image} alt={title} className="w-2/3 object-cover  mx-auto flex justify-end items-end" />
                </div>{" "}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
