import React from "react";
import Button from "./Button/Button";

const ErrorPage = () => {
  return (
    <div>
      <div
        data-aos-duration="1000"
        data-aos="fade-left"
        className="h-screen flex flex-col justify-center items-center"
      >
        <img
          src={
            "https://i.postimg.cc/Y2h5D77F/Oops-404-Error-with-a-broken-robot.gif"
          }
          alt=""
        />
        <Button label="Go Home" onClick={() => window.location.replace("/")} />
      </div>
    </div>
  );
};

export default ErrorPage;
