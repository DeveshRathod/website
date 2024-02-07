import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Achievements from "./pages/Achievements.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
