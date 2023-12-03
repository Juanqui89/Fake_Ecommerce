import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./Views/Home";
import Electronics from "./Views/Electronics";
import Jewerely from "./Views/Jewerely";
import Mens_Clothes from "./Views/Mens_Clothes";
import Women_Clothes from "./Views/Women_Clothes";

import { useEffect } from "react";

function ScrollToTop() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Jewerely" element={<Jewerely />} />
          <Route path="/Mens_Clothes" element={<Mens_Clothes />} />
          <Route path="/Women_Clothes" element={<Women_Clothes />} />
          <Route path="*" element={"404 Error Page Not Found"} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
