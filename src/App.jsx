// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => (
  <>
    <div>
      <Header />
      <main className="mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
