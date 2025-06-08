import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import CustomInput from "../Shared/CustomInput";
import { FaInfoCircle } from "react-icons/fa";
import {
  BadgeDollarSign,
  BookA,
  Calendar,
  Clock,
  Highlighter,
  IdCardLanyard,
  ImagePlus,
  ListChecks,
  LocateIcon,
  MapPin,
  MapPinned,
  Pen,
} from "lucide-react";

const AddPost = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const steps = [
    {
      title: "Basic Info",
      content: (
        <div className="grid gap-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              type="text"
              label="Title"
              placeholder="Enter Lost/Found Item Title"
              name="itemTitle"
              required
              icon={BookA}
            />

            <CustomInput
              label="Type"
              type="select"
              name="postType"
              select={"Select Type"}
              options={[
                { label: "Lost", value: "lost" },
                { label: "Found", value: "found" },
              ]}
              icon={ListChecks}
              required
              className="w-full flex"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CustomInput
              label="Select Category"
              name="category"
              type="select"
              select={"Select Category"}
              required
              icon={ListChecks}
              options={[
                { label: "People", value: "people" },
                { label: "Pets", value: "pets" },
                { label: "Phones & Tablets", value: "phones & tablets" },
                { label: "Gadgets", value: "gadgets" },
                { label: "Accessories", value: "accessories" },
                { label: "Jewelry", value: "jewelry" },
                { label: "Bags", value: "bags" },
                { label: "Toys", value: "toys" },
                { label: "Books", value: "books" },
                { label: "Sports", value: "sports" },
                { label: "Bike", value: "bike" },
                { label: "Car", value: "car" },
                { label: "Other", value: "other" },
              ]}
            />

            <CustomInput
              type="text"
              label="Brand / Model (if applicable)"
              placeholder="Types Brand / Model"
              name="brandModel"
              icon={Pen}
              className="w-full flex"
            />

            <CustomInput
              label="Colors (if applicable)"
              type="text"
              placeholder="Types Colors"
              name="brandModel"
              icon={Pen}
              className="w-full flex"
            />
          </div>

          <div>
            <CustomInput
              label="Description"
              name="description"
              type="textarea"
              required
              placeholder="Enter description"
              icon={FaInfoCircle}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Item Details",
      content: (
        <div className="grid gap-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Date"
              placeholder="Enter date (yyyy-mm-dd)"
              type="date"
              name="date"
              required
              icon={Calendar}
            />
            <CustomInput
              label="Time"
              placeholder="Enter time (hh:mm)"
              type="time"
              name="time"
              required
              icon={Clock}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Location"
              placeholder="Enter location"
              type="text"
              name="location"
              required
              icon={MapPin}
            />
            <CustomInput
              label="Zone"
              placeholder="Enter zone"
              type="text"
              name="zone"
              required
              icon={MapPinned}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Media Info",
      content: (
        <div className="grid gap-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Identity Mark"
              placeholder="Enter identity mark"
              type="text"
              name="identityMark"
              icon={Highlighter}
            />
            <CustomInput
              label="Document Number"
              placeholder="Enter Student ID/NID/Passport"
              type="text"
              name="documentNumber"
              icon={IdCardLanyard}
            />
          </div>
          <CustomInput
            label="Photo URL"
            placeholder="https://example.com/photo.jpg"
            type="url"
            name="photo"
            icon={ImagePlus}
          />
          <CustomInput
            label="Photo"
            placeholder="Upload photo"
            type="file"
            name="photo"
            accept="image/*"
            icon={ImagePlus}
          />
        </div>
      ),
    },
    {
      title: "Contact Info",
      content: (
        <div className="grid gap-1">
          <div>
            <CustomInput
              label="Your Name"
              placeholder="Enter your name"
              name="name"
              icon={FiArrowRight}
            />
            <CustomInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              icon={FiArrowRight}
            />
          </div>
          <div>
            <CustomInput
              label="Phone"
              placeholder="Enter your phone number"
              type="tel"
              name="phone"
              icon={FiArrowRight}
            />
            <div>
              <CustomInput
                label="Rewards"
                placeholder="e.g 5000 Taka"
                type="number"
                name="rewards"
                icon={BadgeDollarSign}
              />
              <p className="text-sm tracking-wide manrope text-red-500 pl-12 pb-2 flex -mt-3  ">if any rewards will be given to the finder</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 border border-base-300 shadow-none rounded-xl my-10 manrope text-sm">
      <h2 className="text-xl font-bold mb-4 text-center text-teal-700">
        Step {step + 1}: {steps[step].title}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
        >
          {steps[step].content}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-4">
        <button
          onClick={prev}
          disabled={step === 0}
          className="btn btn-outline btn-sm flex items-center gap-1"
        >
          <FiArrowLeft /> Back
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={next}
            className="btn btn-primary btn-sm flex items-center gap-1"
          >
            Next <FiArrowRight />
          </button>
        ) : (
          <button className="btn btn-success btn-sm">Submit</button>
        )}
      </div>
    </div>
  );
};

export default AddPost;
