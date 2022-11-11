import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Keychains from "./home/Keychains";
import MedPlaques from "./home/MedPlaques";
import SmallPlaques from "./home/SmallPlaques";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route exact path="/home/Keychains" element={<Keychains />} />
      <Route exact path="/home/MedPlaques" element={<MedPlaques />} />
      <Route exact path="/home/SmallPlaques" element={<SmallPlaques />} />
      <Route element={<ToastContainer autoClose={3000} hideProgressBar />} />
    </Routes>
  );
}

export default App;
