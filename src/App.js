import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/style.scss";
// Components
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Program from "./pages/Program/Program";

const App = () => {
  return (
    <div className="app" dir="rtl">
      <BrowserRouter basename="/Tomo">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
