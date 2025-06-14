import React, { useEffect, useState } from "react";
import CustomInput from "../../Shared/CustomInput";
import useAuth from "../../Hooks/useAuth";
import { toastSuccess, toastWarning } from "../../Utility/notification";
import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import SecondaryBtn from "../../Shared/Button/SecondaryBtn";
import Button from "../../Shared/Button/Button";
import axios from "axios";

const RecoveryPost = ({ post }) => {
  const { user } = useAuth();
  const [recoveredLocation, setRecoveredLocation] = useState("");
  const [recoveredDate, setRecoveredDate] = useState(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
  );
  const [hasRecovered, setHasRecovered] = useState(false);

  //GET USER DATA FROM MONGODB
  const [userDataMDB, setUserDataMDB] = useState(null);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/users/${user.email}`)
        .then((res) => setUserDataMDB(res.data))
        .catch((err) => console.log("Failed to get MongoDB user data", err));
    }
  }, [user]);

  //RECOVERY-POST DATA SEND TO MONGODB
  const handleRecovery = async (e) => {
    e.preventDefault();

    if (hasRecovered || post.status === "recovered") {
      toastWarning("Already recovered!");
      return;
    }

    const recoveryData = {
      postId: post._id,
      recoveredLocation,
      recoveredDate,
      recoveredBy: {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      },
    };

    try {
      const res = await fetch("http://localhost:5000/recovery-post", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recoveryData),
      });

      const data = await res.json();

      if (data.success) {
        toastSuccess("Recovered successfully!");
        setHasRecovered(true);
        document.getElementById("recovery-modal").close();
        setTimeout(() => {
          window.location.reload();
        }, 800);
      } else {
        toastWarning("Already recovered!");
      }
    } catch (err) {
      console.log("Recovery submission error", err);
      toastWarning("Recovery submission failed!");
    }
  };

  


  return (
    <dialog id="recovery-modal" className="modal">
      <div className="bg-base-100 text-base-content rounded-2xl p-8">
        <div className="modal-action flex justify-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex gap-10">
              <div className="flex-1">
                <div className="h-30">
                  <h3 className="font-bold text-lg py-10">Recovery Info!</h3>
                </div>
                <CustomInput
                  label={"Recovered Location"}
                  type="text"
                  name="recoveredLocation"
                  placeholder="Enter Location"
                  defaultValue={recoveredLocation}
                  onChange={(e) => setRecoveredLocation(e.target.value)}
                  required={true}
                  icon={MapPin}
                />
                <CustomInput
                  label="Recovered Date"
                  placeholder="Enter date (yyyy-mm-dd)"
                  type="date"
                  name="recoveredDate"
                  defaultValue={recoveredDate}
                  onChange={(e) => setRecoveredDate(e.target.value)}
                  required={true}
                  icon={Calendar}
                />
              </div>

              {/* //USER INFO */}
              <div className="flex-1">
                <div className="flex justify-center">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-24 h-24 object-contain rounded-full"
                  />
                </div>
                <div>
                  <CustomInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder={user?.displayName}
                    required={false}
                    readonly
                    icon={User}
                    className="cursor-not-allowed"
                  />
                  <CustomInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder={user?.email}
                    required={false}
                    readonly
                    icon={Mail}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput
                    label="Phone"
                    type="number"
                    name="phone"
                    placeholder={userDataMDB?.phone}
                    required={false}
                    readonly
                    icon={Phone}
                  />
                  <CustomInput
                    label="Phone (Optional)"
                    placeholder="Enter your phone number"
                    type="number"
                    name="phoneOptional"
                    required={false}
                    icon={Phone}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button label="Submit" onClick={handleRecovery} type="submit" />

              <SecondaryBtn
                label="Cancel"
                onClick={() =>
                  document.getElementById("recovery-modal").close()
                }
              />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RecoveryPost;
