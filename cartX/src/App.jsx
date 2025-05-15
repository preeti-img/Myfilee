import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact.jsx";
import Middle from "./Apple.jsx";
import First from "../First.jsx";

function App() {
  return (
    <>
      <Navbar />
    

              <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/industry" element={<Middle />} />
          <Route path="/resourse" element={<Middle />} />
          <Route path="/about" element={<Middle />} />
        </Routes>
      
    </>
  );
}
export default App;
