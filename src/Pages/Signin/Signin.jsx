import React from "react";
import CustomInput from "../../Shared/CustomInput";
import { Key, Mail } from "lucide-react";
import SocialLogin from "../../Shared/SocialLogin";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie-animation/login-lottie.json";
import Button from "../../Shared/Button/Button";

const Signin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="max-w-6xl h-[calc(100vh-83px)] mx-auto res-padding flex justify-start items-start">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="bg-base-100 flex-1  my-10"
        >
          <div className="flex items-center justify-center gap-8 max-w-xl">
            <div className="flex-1 p-8 w-full border border-base-300 shadow-xs rounded-2xl">
              <form onSubmit={handleLogin} className="form-control">
                <fieldset className="fieldset mx-auto items-center">
                  <h1 className="text-2xl font-bold text-center">
                    Sign in Now!
                  </h1>
                  {/* Email Field */}
                  <div>
                    <CustomInput
                      type="text"
                      name={"email"}
                      label={"Email"}
                      placeholder={"Enter your email address"}
                      icon={Mail}
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <CustomInput
                      type="password"
                      name={"password"}
                      label={"Password"}
                      placeholder={"Enter your Password"}
                      icon={Key}
                    />
                  </div>
                  <div>
                    <a className="link link-hover text-teal-800 font-semibold">
                      Forgot password?
                    </a>
                  </div>
                  <div className="w-full flex flex-col">
                    <Button label={"Sign in"} className="w-full"></Button>
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
          className="my-10 h-fit responsive-padding flex-1 flex-col justify-center gap-4 items-center"
        >
          <div>
            <p className="text-4xl font-bold text-center py-2 ">
              Welcome Back
            </p>
            <p className="text-sm text-center">
              <span className="font-bold text-teal-800">Sign in</span> and stay connected with us
            </p>
          </div>
          <img
            src={"https://i.postimg.cc/Fzmmpzh7/Login.webp"}
            alt=""
            className="h-[calc(80vh-83px)] mx-auto py-2"

          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
