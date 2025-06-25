import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContexts";
import { toastError, toastSuccess } from "../Utility/notification";

const SocialLogin = ({ from }) => {
  const {signInWithGoogle} = use(AuthContext);
  const navigate = useNavigate();

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    
    try {
      await signInWithGoogle();
      console.log("button kaj korche?", signInWithGoogle);
      
      toastSuccess("Successfully signed up in Google!");
      navigate(from || "/");
    } catch (error) {
      console.error("Google login error:", error);
      toastError(`Google login failed: ${error.message}`);
    }
  };

  return (
    <div>

      <div className="flex w-full flex-col">
        <div className="divider">OR</div>
      </div>

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

