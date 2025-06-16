import React, { useEffect, useState } from "react";
import { getAllFeedback } from "../../API/feedbackApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllFeedback();
        setFeedbacks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={40}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        speed={2000}
        navigation={{
          nextEl: ".slide-button-next",
          prevEl: ".slide-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        // onSwiper={(swiper) => {}}
        className="mySwiper h-[480px] w-full mx-auto group relative"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback._id}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 shadow-xl rounded-xl border border-base-300 w-90 h-96 flex manrope  ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-10 blur-xs"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="relative flex h-full px-12 py-10 bg-gray-50">
                    <p className="relative text-lg italic leading-7 text-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-8 h-8 text-amber-400 mb-2"
                      >
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                      </svg>
                      {feedback.description}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="absolute right-0 w-8 h-8 text-amber-400"
                      >
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                      </svg>
                    </p>
                  </div>

                  <div className="flex flex-col w-full items-center justify-center py-4 rounded-b-xl bg-teal-800 text-white relative z-10">
                    <img
                      src={feedback.photo}
                      alt={feedback.name}
                      className="w-18 h-18 mb-2 -mt-10 bg-center bg-cover rounded-full p-1 border-2 border-amber-400 absolute top-0 left-1/2 transform -translate-x-1/2"
                    />
                    <div className="text-center pt-6 league">
                      <p className="text-xl font-semibold">{feedback.name}</p>
                      <p className="text-sm uppercase">{feedback.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        <div className="slide-button-prev rounded-full absolute top-100 w-16 h-16  flex justify-center items-center bg-amber-400 text-teal-800 duration-300 ease-in-out transition-all z-50 cursor-pointer">
          <ArrowLeft />
        </div>
        <div className="slide-button-next rounded-full absolute top-100 left-18 w-16 h-16  flex justify-center items-center bg-amber-400 text-teal-800  duration-300 ease-in-out transition-all z-50 cursor-pointer">
          <ArrowRight />
        </div>
      </Swiper>
    </div>
  );
};

export default FeedbackCard;
