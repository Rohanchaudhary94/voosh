import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compnents/Navbar/Navbar";
import Page1 from "./pages/Page1/Page1";
import Page8 from "./pages/Page8/Page8";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landingpage from "./pages/Landingpage/Landingpage";

const to = localStorage.getItem("token");

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <Page1 />
    
      <Page8 />

     
    </div>
  );
};

function App() {
  if (to) {
    return (
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
          


            <Route exact path="/" element={<Home />} />
          <Route path="/#Waitinglist" element={<Page8 />} />
          <Route path="/dashboard" element={<Landingpage />} />         
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/#Waitinglist" element={<Page8 />} />
            {/* <Route path="/dashboard" element={<Landingpage />} />   */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
