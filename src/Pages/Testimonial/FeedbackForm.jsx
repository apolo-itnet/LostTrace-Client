import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomInput from "../../Shared/CustomInput";
import { FaInfoCircle } from "react-icons/fa";
import RatingStar from "../../Shared/RatingStar";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toastSuccess } from "../../Utility/notification";
import Button from "../../Shared/Button/Button";
import LoaderFull from "../../Shared/Laoder/LoaderFull";

const FeedbackForm = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const feedbackData = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      rating,
      description,
      creationTime: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
      }),
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/feedback",
        feedbackData
      );
      if (res.data.insertedId) {
        setTimeout(() => {
          setIsLoading(false);
          toastSuccess("Thanks for your feedback!");
          setRating(0);
          setDescription("");
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Feedback submit failed", error);
    }
  };

  return (
    <div>
      {/* Header */}
      {isLoading && <LoaderFull />}
      <div className="py-4 bg-teal-800 text-base-100 sticky top-18.5 z-10 w-full">
        <div className="res-padding">
          <h1 className="text-6xl font-semibold bebas tracking-wider py-4">
            FEEDBACK
          </h1>
        </div>
      </div>

      <div className="res-padding py-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Image */}
          <div className="w-md mx-auto">
            <img
              src="https://i.postimg.cc/59nVq2VV/Online-Review-pana.png"
              alt=""
              className="w-full"
            />
          </div>

          {/* Right Form */}
          <div>
            <h1 className="text-3xl font-black text-center tracking-normal normal-case text-teal-800 pb-8 w-md mx-auto">
              Feel free to drop us your Feedback, to improve our service
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2 manrope"
              >
                {/* Hidden Inputs */}
                <input
                  type="hidden"
                  name="name"
                  value={user?.displayName}
                  readOnly
                />
                <input
                  type="hidden"
                  name="email"
                  value={user?.email}
                  readOnly
                />
                <input
                  type="hidden"
                  name="photo"
                  value={user?.photoURL}
                  readOnly
                />

                {/* Rating */}
                <div className="flex flex-col gap-2 py-2">
                  <h1>Please rate our service</h1>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <RatingStar
                        key={star}
                        filled={star <= (hovered || rating)}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                      />
                    ))}
                  </div>
                </div>

                {/* Feedback Text */}
                <div>
                  <CustomInput
                    label="Feedback"
                    name="description"
                    type="textarea"
                    rows={4}
                    placeholder="Enter your feedback here"
                    icon={FaInfoCircle}
                    value={description}
                    required={true}
                    onChange={(e) => setDescription(e.target.value)}
                    className="text-teal-800"
                  />
                </div>

                {/* Submit */}
                <Button
                  label={"Submit Feedback"}
                  type="submit"
                  className="btn bg-teal-800 text-white hover:bg-teal-700 w-full"
                ></Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
