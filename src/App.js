import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Reviews from "./Component/Reviews/Reviews";
import Dashboard from "./Component/Dashboard/Dashboard";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";
import NotFound from "./Component/NotFound/NotFound";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
