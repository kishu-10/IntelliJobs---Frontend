import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/1.style.css";
import { useEffect } from "react";
import Jobs from "./components/Jobs";

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}

export default App;
