import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import CustomInput from "../Shared/CustomInput";
import Button from "../Shared/Button/Button";
import SecondaryBtn from "../Shared/Button/SecondaryBtn";
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
import { FaInfoCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  toastError,
  toastSuccess,
} from "../Utility/notification";
import { getPostById } from "../API/GetAllPosts";
import LoaderFull from "../Shared/Laoder/LoaderFull";
import EmptyPostAnimation from "../Shared/Animation/EmptyPostAnimation";
import useAuth from "../Hooks/useAuth";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  //DATA FETCHING FROM API AND PREFILLED FORM
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const data = await getPostById(id);
        setFormData(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  //HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //GET USER FROM FIREBASE AUTH
  const { user } = useAuth();

  //GET USER DATA FROM MONGODB
  const [userDataMDB, setUserDataMDB] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/users/${user.email}`)
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
      const { _id, ...postToUpdate } = formData;
      postToUpdate.updateTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
      });
      const res = await axios.put(
        `http://localhost:5000/posts/${_id}`,
        postToUpdate
      );
      console.log("Post updated successfully:", res.data);

      setTimeout(() => {
        setIsLoading(false);
        toastSuccess("Post updated successfully!");
        navigate("/my-posted-list");
        e.target.reset();
      }, 2000);
    } catch (err) {
      console.error(err);
      toastError("Failed to update post.");
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoaderFull />;
  if (!formData) return <EmptyPostAnimation />;

  const next = () => setStep((next) => Math.min(next + 1, 3));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      {isLoading && <LoaderFull />}

      {/* Heading */}
      <div className="py-8 bg-teal-800 text-base-100 sticky top-18.5 z-10 w-full">
        <div className="res-padding">
          <h1 className="text-6xl font-semibold bebas tracking-wide py-4">
            Update Post
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
                      name="itemTitle"
                      placeholder="Enter title"
                      value={formData.itemTitle}
                      onChange={handleChange}
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
                      label="Date"
                      placeholder="Enter date (yyyy-mm-dd)"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      icon={Calendar}
                    />
                    <CustomInput
                      label="Time"
                      placeholder="Enter time (hh:mm)"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
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
                      icon={MapPin}
                    />
                    <CustomInput
                      label="District"
                      placeholder="Enter district"
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
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
                img={<FiArrowLeft />}
                onClick={prev}
                disabled={step === 0}
              />
            )}
            {step < 3 ? (
              <SecondaryBtn
                type="button"
                label="Next"
                img={<FiArrowRight />}
                onClick={next}
                className="border-teal-800"
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

export default UpdatePost;
