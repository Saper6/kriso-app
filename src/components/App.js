import { Routes, Route } from "react-router-dom";
import HomePage2 from "./home/HomePage2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage2 />} />
      <Route element={<ToastContainer autoClose={3000} hideProgressBar />} />
    </Routes>
  );
}

export default App;
