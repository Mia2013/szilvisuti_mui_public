import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "fontsource-roboto";
import { Toolbar } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

import ResponsiveAppBar from "./components/Nav/Nav";
import Footer from "./components/Footer"
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTopButton";

const Home = React.lazy(() => import("./pages/Home"));
const Cakes = React.lazy(() => import("./pages/Cakes"));
const Desserts = React.lazy(() => import("./pages/Desserts"));
const Cookies = React.lazy(() => import("./pages/Cookies"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Admin = React.lazy(() => import("./pages/Admin"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 2000,
      useClassNames: false,
      throttleDelay: 99,
      once: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Toolbar id="back-to-top-anchor" />

      <Suspense fallback={<Loading />}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="torta" element={<Cakes />} />
            <Route path="desszert" element={<Desserts />} />
            <Route path="sutemenyek" element={<Cookies />} />
            <Route path="rendeles" element={<Contact />} />
            <Route path="szilviadminfelulete" element={<Admin />} />

          </Routes>
        <BackToTop />

      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
