import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Services from "./pages/Services";

import Contactus from "./pages/ContactUs";

import AdminLayout from "./layouts/AdminLayout";
import Navbar from "./components/ui/Navbar";

function App() {
  const Layout = () => {
    return (
      <>
        <Header/>
        <main className="min-h-screen w-full">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/services" element={<Services />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
