import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Jobs from "./components/Jobs";
import Landing from "./components/Landing";
import Network from "./components/Network";
import JobDetail from "./components/JobDetail";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    const current = localStorage.getItem("theme");
    if (current === "dark") {
      document.documentElement.setAttribute("theme", "dark");
    } else {
      document.documentElement.removeAttribute("theme");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feeds" element={<Home />} />
        <Route path="/my-network" element={<Network />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/1" element={<JobDetail />} />
      </Routes>
    </>
  );
}

export default App;
