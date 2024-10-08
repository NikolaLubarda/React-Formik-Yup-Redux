import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";

function App() {
  return (
    <div>
      {" "}
      <NavBarComponent />
      <Outlet />
    </div>
  );
}

export default App;
