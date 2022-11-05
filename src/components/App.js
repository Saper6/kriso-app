import { Routes, Route } from "react-router-dom";
import HomePage2 from "./home/HomePage2";
import SubPage1 from "./home/SubPage1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage2 />} />
      <Route exact path="/" element={<SubPage1 />} />
      <Route element={<ToastContainer autoClose={3000} hideProgressBar />} />
    </Routes>
  );
}

export default App;
