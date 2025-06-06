import React from "react";
import CustomInput from "../../Shared/CustomInput";
import { ImageIcon, Key, Mail, Phone, UserRoundPen } from "lucide-react";
import SocialLogin from "../../Shared/SocialLogin";
import { Link } from "react-router";
import SecondaryBtn from "../../Shared/Button/SecondaryBtn";
import Button from "../../Shared/Button/Button";

const Signup = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto res-padding flex justify-center items-start">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="w-full mx-auto my-10"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex-1 p-8 w-full border border-base-300 shadow-xs rounded-2xl">
              <form onSubmit={handleRegister} className="form-control">
                <fieldset className="fieldset mx-auto items-center space-y-2">
                  {/* Name Field */}
                  <div>
                    <CustomInput
                      type="text"
                      label={"Full Name"}
                      name={"fullName"}
                      placeholder={"Enter your full name"}
                      icon={UserRoundPen}
                    />
                  </div>

                  {/* Email & Number Field */}
                  <div className="flex justify-between items-center gap-2">
                    <div className="w-full">
                      <CustomInput
                        type="text"
                        label={"Email"}
                        name={"email"}
                        placeholder={"Enter your email address"}
                        icon={Mail}
                      />
                    </div>
                    {/* Number Field */}
                    <div className="w-full">
                      <CustomInput
                        type="number"
                        label={"Phone Number"}
                        name={"phone"}
                        placeholder={"Enter your Phone Number"}
                        icon={Phone}
                      />
                    </div>
                  </div>

                  {/* Password & Confirm Password  Field */}
                  <div className="flex justify-between items-center gap-2">
                    <div className="w-full">
                      <CustomInput
                        type="password"
                        label={"Password"}
                        name={"password"}
                        placeholder={"Enter your Password"}
                        icon={Key}
                      />
                    </div>
                    {/* Confirm Password Field */}
                    <div className="w-full">
                      <CustomInput
                        type="password"
                        label={"Confirm Password"}
                        name={"confirmPassword"}
                        placeholder={"Enter your Confirm Password"}
                        icon={Key}
                      />
                    </div>
                  </div>

                  {/* Profile Photo Field */}
                  <div>
                    <CustomInput
                      type="text"
                      label={"Profile Photo"}
                      name={"photoURL"}
                      placeholder={"https:// URL..."}
                      icon={ImageIcon}
                    />
                  </div>

                  <div>
                    <span className="text-xs font-medium ">
                      Already have an account?
                    </span>
                    <span>
                      <Link
                        to={"/signin"}
                        className="text-teal-800 text-sm font-bold pl-1"
                      >
                        {" "}
                        Sign in{" "}
                      </Link>
                    </span>
                  </div>
                  <div className="w-full flex flex-col">
                    <Button
                      label={"Register"}
                      className="w-full"
                    ></Button>
                  </div>
                </fieldset>
              </form>
              <SocialLogin />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="my-10 responsive-padding flex flex-col justify-between bg-transparent"
        >
          <div>
            <p className="text-4xl font-bold text-center py-2 ">
              Let's Get Start
            </p>
            <p className="text-sm text-center">
              <span className="font-bold text-teal-800">Register</span> now and
              get access to post lost items
            </p>
          </div>
          <img
            src={"https://i.postimg.cc/50TVZnqY/undraw-chore-list-ylw0.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
