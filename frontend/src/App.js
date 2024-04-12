import EditPassword from "./components/EditPassword";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Manager />} />{" "}
        <Route path="/editPass/:id" element={<EditPassword />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
