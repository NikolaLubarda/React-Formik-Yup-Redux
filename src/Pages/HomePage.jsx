import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { testAction } from "../Store/userSlice";

const HomePage = ({}) => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.userStore);

  function handleClick() {
    dispatch(testAction());
    console.log(isActive);
  }

  return (
    <div>
      <h2 className="text-center">Home page</h2>
      <button
        className="bg-red-500 rounded-lg m-[20px] border border-red-500 px-[20px] py-[20px]"
        onClick={handleClick}
      >
        Click me
      </button>
      {isActive ? <p> Trenutno je !TRUE!</p> : <p> Trenutno je !FALSE!</p>}
    </div>
  );
};

export default HomePage;
