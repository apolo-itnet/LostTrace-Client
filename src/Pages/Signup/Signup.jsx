import React, { use, useState } from "react";
import CustomInput from "../../Shared/CustomInput";
import { ImageIcon, Key, Mail, Phone, UserRoundPen } from "lucide-react";
import SocialLogin from "../../Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import Button from "../../Shared/Button/Button";
import {
  toastError,
  toastSuccess,
  toastWarning,
} from "../../Utility/notification";
import { AuthContext } from "../../Contexts/AuthContexts";
import { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (password) => {
    const error = [];
    if (password.length < 6)
      error.push("Password must be at least 6 characters");
    if (!/[A-Z]/.test(password))
      error.push("Password must contain at least ONE UPPERCASE letter");
    if (!/[a-z]/.test(password))
      error.push("Password must contain at least one lowercase letter");
    if (!/[0-9]/.test(password))
      error.push("Password must contain at least one number");
    return error;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const { fullName, email, password, confirmPassword, photoURL, phone } =
      form;
    const photo = photoURL.value || "https://i.postimg.cc/WpBxFRrR/user-5.png";

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      toastWarning("Email is required");
      return;
    }

    const passwordErrors = validatePassword(password.value);
    if (passwordErrors.length > 0) {
      setPasswordError(passwordErrors);
      toastWarning(
        "Password must be at least 6 characters long, contain at least one uppercase, one lowercase and one number."
      );
      return;
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPasswordError("Passwords do not match");
      toastWarning("Passwords do not match");
      return;
    }

    try {
      //firebase signup
      const { user } = await createUser(email.value, password.value);

      //firebase update profile
      await updateProfile(user, {
        displayName: fullName.value,
        photoURL: photo,
      });

      // Send the user data to the MDB
      const userData = {
        name: fullName.value,
        email: email.value,
        photoURL: photo,
        phone: phone.value,
        role: "user",
      };

      const bangladeshTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
      });

      userData.creationTime = bangladeshTime;
      userData.lastSignInTime = bangladeshTime;

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (data.insertedId) {
        toastSuccess("Successfully signed up!");
        navigate("/");
      } else {
        toastError("Failed to send MDB data!");
      }
    } catch (err) {
      console.error(err);
      toastError("Signup failed", err.message);
    }
  };

  const handleGoogleSignIn = async () => {
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
      <Toaster reverseOrder={false} />
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
                    <Button label={"Register"} className="w-full"></Button>
                  </div>
                </fieldset>
              </form>
              <SocialLogin handleGoogleLogin={handleGoogleSignIn} />
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
