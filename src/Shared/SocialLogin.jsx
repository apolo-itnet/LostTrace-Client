import React, { use } from "react";
// import { AuthContext } from "../Contexts/AuthContext/AuthContext";
// import { showSweetNotify, showToastError } from "../Utility/notification";
import { useNavigate } from "react-router";
import SecondaryBtn from "./Button/SecondaryBtn";

const SocialLogin = ({ from }) => {
  // const {logInWithGoogle} = use(AuthContext);
  const navigate = useNavigate();

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    console.log(handleGoogleLogin);
    
    try {
      await logInWithGoogle();
      console.log("button kaj korche?",logInWithGoogle);
      
      showSweetNotify("Google login successful!");
      navigate(from || "/");
    } catch (error) {
      console.error("Google login error:", error);
      showToastError(`Google login failed: ${error.message}`);
    }
  };

  return (
    <div>
      {/* Divider  */}
      <div className="flex w-full flex-col">
        <div className="divider">OR</div>
      </div>
      {/* Social Login Buttons */}
      <div className="flex flex-col gap-2">
        {/* Google */}
        <button onClick={handleGoogleLogin} className="btn py-5 bg-transparent border border-teal-600">
          <img
            src={
              "https://i.postimg.cc/zXtwGs8Y/google-favicon-logo-brandlogos-net-cgzfg-512x524.png"
            }
            alt="g_logo"
            className="w-5 h-5 object-cover"
          />
          Login with Google
        </button>
        {/* Facebook */}
        <button className="btn py-5 bg-transparent border border-teal-600 ">
          <img
            src={
              "https://i.postimg.cc/YS1tdwC5/facebook-logo-brandlogos-net-xmmz9-512x513.png"
            }
            alt="fb_logo"
            className="w-6 h-6 object-cover"
          />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
