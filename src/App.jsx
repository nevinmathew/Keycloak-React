import {Route, Routes, } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resources from "./components/Resources";

const App = () => {
  return (
    <div>
      <NavBar/>
      <br/><br/><br/>
      <Resources/>
      <Routes>
        <Route path={"/", "/home"} element={<Home />} />
      </Routes>
      <br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default App;
