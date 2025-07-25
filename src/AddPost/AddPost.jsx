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
import { toastSuccess, toastWarning } from "../Utility/notification";
import { useNavigate } from "react-router";
import LoaderFull from "../Shared/Laoder/LoaderFull";

const AddPost = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorFieldBorder, setErrorFieldBorder] = useState({});
  const [formData, setFormData] = useState({
    itemTitle: "",
    postType: "",
    category: "",
    brandModel: "",
    color: "",
    description: "",
    date: "",
    time: "",
    location: "",
    district: "",
    identityMark: "",
    documentNumber: "",
    photo: "",
    rewards: "",
    creationTime: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    }),
  });

  //HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorFieldBorder((prev) => ({ ...prev, [name]: false }));
  };

  //GET USER FROM FIREBASE AUTH
  const { user } = useAuth();

  //GET USER DATA FROM MONGODB
  const [userDataMDB, setUserDataMDB] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://lost-trace.vercel.app/users/${user.email}`)
        .then((res) => setUserDataMDB(res.data))
        .catch((err) => console.log("Failed to get data", err));
    }
  }, [user?.email]);

  //USER PREFILLED DATA ON FIREBASE & MONGODB
  useEffect(() => {
    if (user && userDataMDB) {
      setFormData((prev) => ({
        ...prev,
        name: user?.displayName || "",
        email: user?.email || "",
        phone: userDataMDB?.phone || "",
      }));
    }
  }, [user, userDataMDB]);

  // FROM DATA SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post("https://lost-trace.vercel.app/posts", formData);
      setTimeout(() => {
        setIsLoading(false);
        toastSuccess("Post added successfully!");
        navigate("/my-posted-list");
        e.target.reset();
      }, 2000);
    } catch (err) {
      console.error(err);
      toastError("Failed to submit post.");
      setIsLoading(false);
    }
  };

  // ✅ STEP-WISE VALIDATION
  const handleNext = () => {
    const requiredFieldsPerStep = {
      0: ["itemTitle", "postType", "category", "description"],
      1: ["date", "time", "location", "district"],
      2: ["photo"],
      3: [],
    };

    const currentRequired = requiredFieldsPerStep[step];
    const newErrors = {};

    const missingField = currentRequired.find((field) => {
      const isEmpty = !formData[field]?.trim();
      if (isEmpty) newErrors[field] = true;
      return isEmpty;
    });

    if (missingField) {
      setErrorFieldBorder(newErrors);
      toastWarning(`Please fill the required field: ${missingField}`);
      return;
    }

    setErrorFieldBorder({});
    if (step < 3) setStep(step + 1);
  };

  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      {isLoading && <LoaderFull />}

      {/* Heading */}
      <div className="py-8 bg-teal-800 text-base-100 sticky top-20.5 z-10 w-full">
        <div className="res-padding">
          <h1 className="text-6xl font-semibold bebas tracking-wide py-4">
            Add Post
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto p-6 bg-base-100 border border-base-300 shadow-none rounded-xl my-6 league text-sm">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`font-semibold ${step === 0 ? "text-blue-600" : ""}`}
            >
              Step 1: Basic Info
            </span>
            <span
              className={`font-semibold ${step === 1 ? "text-blue-600" : ""}`}
            >
              Step 2: Location Info
            </span>
            <span
              className={`font-semibold ${step === 2 ? "text-blue-600" : ""}`}
            >
              Step 3: Media Info
            </span>
            <span
              className={`font-semibold ${step === 3 ? "text-blue-600" : ""}`}
            >
              Step 4: Contact Info
            </span>
          </div>

          {/* Step 1: Basic Info */}
          {step === 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="grid gap-1 manrope">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomInput
                      type="text"
                      label="Title"
                      placeholder="Enter Lost/Found Item Title"
                      name="itemTitle"
                      value={formData.itemTitle}
                      onChange={handleChange}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.itemTitle ? "border-red-500" : ""
                      }`}
                      icon={BookA}
                    />

                    <CustomInput
                      label="Type"
                      type="select"
                      name="postType"
                      value={formData.postType}
                      onChange={handleChange}
                      select={"Select Type"}
                      options={[
                        { label: "Lost", value: "lost" },
                        { label: "Found", value: "found" },
                      ]}
                      icon={ListChecks}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.postType ? "border-red-500" : ""
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CustomInput
                      label="Select Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      type="select"
                      select={"Select Category"}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.category ? "border-red-500" : ""
                      }`}
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
                      value={formData.brandModel}
                      onChange={handleChange}
                      icon={Pen}
                      className="w-full flex"
                    />

                    <CustomInput
                      label="Color (if applicable)"
                      type="text"
                      placeholder="Types Colors"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      icon={Pen}
                      className="w-full flex"
                    />
                  </div>

                  <div>
                    <CustomInput
                      label="Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      type="textarea"
                      className={`input input-bordered w-full flex justify-center items-center ${
                        errorFieldBorder.description ? "border-red-500" : ""
                      }`}
                      placeholder="Enter description"
                      icon={FaInfoCircle}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Step 2: Location Info */}
          {step === 1 && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="grid gap-1 manrope">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomInput
                      label="Lost/Found Date"
                      placeholder="Enter date (yyyy-mm-dd)"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.date ? "border-red-500" : ""
                      }`}
                      icon={Calendar}
                    />
                    <CustomInput
                      label="Time"
                      placeholder="Enter time (hh:mm)"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.time ? "border-red-500" : ""
                      }`}
                      icon={Clock}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomInput
                      label="Location"
                      placeholder="Enter location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.location ? "border-red-500" : ""
                      }`}
                      icon={MapPin}
                    />
                    <CustomInput
                      label="District"
                      placeholder="Enter district"
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`input input-bordered w-full ${
                        errorFieldBorder.district ? "border-red-500" : ""
                      }`}
                      icon={MapPinned}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Step 3: Media Info */}
          {step === 2 && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="grid gap-1 manrope">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CustomInput
                      label="Identity Mark"
                      placeholder="Enter identity mark"
                      type="text"
                      name="identityMark"
                      value={formData.identityMark}
                      onChange={handleChange}
                      required={false}
                      icon={Highlighter}
                    />
                    <CustomInput
                      label="Document Number"
                      placeholder="Enter Student ID/NID/Passport"
                      type="text"
                      name="documentNumber"
                      value={formData.documentNumber}
                      onChange={handleChange}
                      required={false}
                      icon={IdCardLanyard}
                    />
                  </div>
                  <CustomInput
                    label="Photo URL"
                    placeholder="https://example.com/photo.jpg"
                    type="url"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${
                      errorFieldBorder.photo ? "border-red-500" : ""
                    }`}
                    icon={ImagePlus}
                  />
                  <CustomInput
                    label="Photo"
                    placeholder="Upload photo"
                    type="file"
                    name="photoFile"
                    value={formData.photoFile}
                    onChange={handleChange}
                    disabled
                    accept="image/*"
                    icon={ImagePlus}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Step 4: Contact Info */}
          {step === 3 && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <div className="grid gap-1 manrope">
                  <div>
                    <CustomInput
                      label="Your Name"
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      value={formData.name}
                      onChange={handleChange}
                      readonly
                      icon={User}
                      className="cursor-not-allowed"
                    />
                    <CustomInput
                      label="Email"
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      value={formData.email}
                      onChange={handleChange}
                      readonly
                      required={false}
                      icon={Mail}
                    />
                  </div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <CustomInput
                        label="Phone"
                        type="number"
                        name="phone"
                        defaultValue={userDataMDB?.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        readonly
                        required={false}
                        icon={Phone}
                      />
                      <CustomInput
                        label="Phone (Optional)"
                        placeholder="Enter your phone number"
                        type="number"
                        name="phoneOptional"
                        value={formData.phoneOptional}
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
                        value={formData.rewards}
                        required={false}
                        onChange={handleChange}
                        icon={BadgeDollarSign}
                      />
                      <p className="text-sm tracking-wide manrope text-red-500 pl-12 pb-2 flex -mt-3  ">
                        if any rewards will be given to the finder
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          <div className="flex justify-between mt-4">
            {step > 0 && (
              <SecondaryBtn
                type="button"
                label="Back"
                img={<FiArrowLeft size={16} />}
                onClick={prev}
                disabled={step === 0}
                className="flex justify-center items-center"
              />
            )}
            {step < 3 ? (
              <SecondaryBtn
                type="button"
                label="Next"
                img={<FiArrowRight size={16} />}
                onClick={handleNext}
                className="flex justify-center items-center"
              />
            ) : (
              <Button label="Submit" type="submit" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
