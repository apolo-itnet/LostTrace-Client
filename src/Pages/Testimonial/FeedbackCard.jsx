import React, { useEffect, useState } from "react";
import { getAllFeedback } from "../../API/feedbackApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="my-10 max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        speed={2000}
        navigation
        autoplay={{ delay: 4000 }}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className="mySwiper !h-full"
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={feedback._id}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 p-4 shadow-xl rounded-xl ${
                  isActive ? "scale-100 opacity-100" : "scale-90 opacity-10"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="relative px-4 py-12 bg-white rounded-t-xl">
                    <p className="relative text-lg italic text-center text-gray-800">
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
                  <div className="flex flex-col w-full items-center justify-center p-6 rounded-b-xl bg-teal-800 text-white z-10">
                    <img
                      src={feedback.photo}
                      alt={feedback.name}
                      className="w-16 h-16 mb-2 -mt-10 bg-center bg-cover rounded-full"
                    />
                    <p className="text-xl font-semibold">{feedback.name}</p>
                    <p className="text-sm uppercase">Aliquam illum</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackCard;
