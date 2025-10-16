import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import Footer from "./app/components/Footer";
import Layout from "./app/components/layout/Layout";
import About from "./app/pages/about/About";
import Contact from "./app/pages/contact/Contact";
import HomePage from "./app/pages/home/Home";
import Portfolio from "./app/pages/portfolio/Portfolio";
import Service from "./app/pages/service/Service";
import GenerateStruct from "./app/pages/generate-struct";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <nav>
          <Layout />
        </nav> */}
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/" element={<HomePage />}></Route> */}
          <Route path="/" element={<GenerateStruct />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
