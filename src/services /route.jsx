// src/services/route.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App"; // Main layout component
import Home from "../pages/Home"; // Home component
import About from "../pages/About"; // About component
import ContactUs from "../pages/ContactUs";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);
