import { useEffect, useState } from "react";
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
  Mail,
  MapPin,
  MapPinned,
  Pen,
  Phone,
  User,
} from "lucide-react";
import SecondaryBtn from "../Shared/Button/SecondaryBtn";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Button from "../Shared/Button/Button";
import { toastSuccess } from "../Utility/notification";
import { useNavigate } from "react-router";

const AddPost = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  //GET USER FROM FIREBASE AUTH
  const { user } = useAuth();

  //GET USER FROM MONGODB
  const [userDataMDB, setUserDataMDB] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/users/${user.email}`)
        .then((res) => setUserDataMDB(res.data))
        .catch((err) => console.log("Failed to get data", err));
    }
  }, [user?.email]);

  const next = () => setStep((prev) => Math.min(prev + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const steps = [
    {
      title: "Basic Info",
      content: (
        <div className="grid gap-1 manrope">
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
                { label: "Documents", value: "documents" },
                { label: "People", value: "people" },
                { label: "Pets", value: "pets" },
                { label: "Jewelry", value: "jewelry" },
                { label: "Gadgets", value: "gadgets" },
                { label: "Accessories", value: "accessories" },
                { label: "Bags", value: "bags" },
                { label: "Toys", value: "toys" },
                { label: "Books", value: "books" },
                { label: "Vehicle", value: "vehicle" },
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
              label="Color (if applicable)"
              type="text"
              placeholder="Types Colors"
              name="color"
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
        <div className="grid gap-1 manrope">
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
        <div className="grid gap-1 manrope">
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
        <div className="grid gap-1 manrope">
          <div>
            <CustomInput
              label="Your Name"
              placeholder={
                user?.displayName ? user?.displayName : "Enter your name"
              }
              name="name"
              readonly
              icon={User}
              className="cursor-not-allowed"
            />
            <CustomInput
              label="Email"
              placeholder={user?.email ? user?.email : "Enter your email"}
              type="email"
              name="email"
              required={false}
              icon={Mail}
            />
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomInput
                label="Phone"
                placeholder={userDataMDB?.phone || "Enter your phone number"}
                type="tel"
                name="phone"
                required={false}
                icon={Phone}
              />
              <CustomInput
                label="Phone (Optional)"
                placeholder="Enter your phone number"
                type="tel"
                name="phone"
                required={false}
                icon={Phone}
              />
            </div>
            <div>
              <CustomInput
                label="Rewards"
                placeholder="e.g 5000 Taka"
                type="number"
                name="rewards"
                icon={BadgeDollarSign}
              />
              <p className="text-sm tracking-wide manrope text-red-500 pl-12 pb-2 flex -mt-3  ">
                if any rewards will be given to the finder
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  //SEND DATA TO DATABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.post("http://localhost:5000/posts", data);
      toastSuccess("Post added successfully!");
      navigate("/");
      // navigate("/my-posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 border border-base-300 shadow-none rounded-xl my-10 league text-sm">
      <h2 className="text-xl font-bold mb-4 text-center text-teal-700">
        Step {step + 1}: {steps[step].title}
      </h2>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            {steps[step].content}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-4">
          <SecondaryBtn
            label="Back"
            img={<FiArrowLeft />}
            onClick={prev}
            // disabled={step === 0}
          />
          {step < steps.length - 1 ? (
            <SecondaryBtn
              label="Next"
              img={<FiArrowRight />}
              onClick={next}
              className="border-teal-800"
            />
          ) : (
            <Button label="Submit" />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddPost;
