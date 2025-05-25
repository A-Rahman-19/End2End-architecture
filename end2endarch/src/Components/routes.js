import {Routes, Route  } from "react-router-dom";
import Home from "./home";
import Portfolio from "./portfolio";
import Architecture from "./architecture";
import InteriorDesign from "./interiorDesign";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
       <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/interior-design" element={<InteriorDesign />} />
       <Route path="/architecture" element={<Architecture />} />
    </Routes>
  );
};

export default AppRoutes;
