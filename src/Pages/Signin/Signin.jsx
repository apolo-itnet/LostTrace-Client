import React, { use, useState } from "react";
import CustomInput from "../../Shared/CustomInput";
import { Key, LampDesk, Mail } from "lucide-react";
import SocialLogin from "../../Shared/SocialLogin";
import Button from "../../Shared/Button/Button";
import { AuthContext } from "../../Contexts/AuthContexts";
import { Link, useLocation, useNavigate } from "react-router";
import { toastError, toastSuccess } from "../../Utility/notification";
import { Toaster } from "react-hot-toast";
import LoaderFull from "../../Shared/Laoder/LoaderFull";

const Signin = () => {
  const { signIn, loading, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setEmailError("");
    setPasswordError("");
    setIsLoading(true);

    try {
      signIn(email, password);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      toastSuccess("Login successful");
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      setIsLoading(false);
      if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email");
      } else if (error.code === "auth/wrong-password") {
        setPasswordError("Incorrect password");
      } else if (error.code === "auth/invalid-credential") {
        toastError("Check your email and password please...!", {
          style: { color: "red" },
        });
      } else {
        toastError(
          error.message || "Login failed! Check your email and password.",
          { style: { color: "red" } }
        );
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const gResult = await signInWithGoogle();
      toastSuccess("Successfully signed up in Google!");
      navigate(location.state?.from || "/", { replace: true });
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toastError(`Google Sign-In failed: ${error.message}`);
    }
  };

  return (
    <div>
      {isLoading && <LoaderFull />}
      <Toaster reverseOrder={false} />
      <div className="max-w-6xl mx-auto res-padding flex justify-start items-start">
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
                    {emailError && <p className="text-red-500">{emailError}</p>}
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
                    {passwordError && (
                      <p className="text-red-500">{passwordError}</p>
                    )}
                  </div>
                  <div className="flex justify-between pb-4">
                    <a className="link link-hover text-teal-800 font-semibold">
                      Forgot password?
                    </a>
                    <div>
                      <span className="text-xs font-medium underline ">
                        Don't have an account?
                      </span>
                      <span>
                        <Link
                          to={"/signup"}
                          className="text-teal-800 text-sm font-semibold pl-1 uppercase"
                        >
                          {" "}
                          Sign up{" "}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <Button
                      label={"Sign in"}
                      type="submit"
                      className="w-full"
                    ></Button>
                  </div>
                </fieldset>
              </form>
              <SocialLogin handleGoogleLogin={handleGoogleLogin} />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="my-10 w-full h-full responsive-padding flex-1 flex-col justify-center gap-4 items-center"
        >
          <div>
            <p className="text-4xl font-bold text-center py-2 ">Welcome Back</p>
            <p className="text-sm text-center">
              <span className="font-bold text-teal-800">Sign in</span> and stay
              connected with us
            </p>
          </div>
          <img
            src={"https://i.postimg.cc/Fzmmpzh7/Login.webp"}
            alt=""
            className=" h-96 mx-auto py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
