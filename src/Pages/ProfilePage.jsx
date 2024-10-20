import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = ({}) => {
  const { userData } = useSelector((state) => state.userStore);
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <img
        src={userData.image}
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
      <h2>{userData.firstname}</h2>
      <h2>{userData.lastname}</h2>
    </div>
  );
};

export default ProfilePage;
