import { createRoot } from "react-dom/client";
//CSS
import "./index.css";
//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import HomePage from "./Pages/HomePage.jsx";

//App
import App from "./App";

//redux
import { Provider } from "react-redux";
import store from "./Store/store.js";
import ProfilePage from "./Pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    <RouterProvider router={router} />{" "}
  </Provider>
);
