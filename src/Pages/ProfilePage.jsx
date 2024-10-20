import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = ({}) => {
  const { userData } = useSelector((state) => state.userStore);
  return (
    <div>
      <img
        src={userData.image}
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
    </div>
  );
};

export default ProfilePage;
