import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetoreUserAction } from "./Store/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.hasOwnProperty("test_user")) {
      let user = JSON.parse(localStorage.getItem("test_user"));
      dispatch(resetoreUserAction(user));
    }
  }, []);
  return (
    <div>
      {" "}
      <NavBarComponent />
      <Outlet />
    </div>
  );
}

export default App;
