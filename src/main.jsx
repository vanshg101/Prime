import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home .jsx";
import MyStuff from "./pages/MyStuff.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from 'react-redux'
import store from './components/store/Store.js';


import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/MyStuff" className="bg-black" element={<MyStuff />} />
      <Route path="/SignUp" className="bg-black" element={<SignUp />} />
      <Route path="/Login" className="bg-black" element={<Login />} />
    </Route>
  )
);//checking

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
