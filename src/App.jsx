import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Contactus from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <main className="">
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
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contactus" element={<Contactus />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
