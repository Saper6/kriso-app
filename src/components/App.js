import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route element={<ToastContainer autoClose={3000} hideProgressBar />} />
    </Routes>
  );
}

export default App;
