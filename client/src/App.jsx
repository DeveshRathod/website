import React from "react";
import { Route, Routes } from "react-router-dom";

import * as Pages from "./pages/index.js";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/achievements" element={<Pages.Achievements />} />
        <Route path="/contact" element={<Pages.Contact />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/projects" element={<Pages.Projects />} />
        <Route path="/*" element={<Pages.NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
