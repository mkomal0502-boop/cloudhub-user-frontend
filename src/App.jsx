import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyApps from "./pages/MyApps";
import Dashboard from "./pages/Dashboard";
import UploadAPK from "./pages/UploadAPK";
import Sessions from "./pages/Sessions";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-apps" element={<MyApps />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadAPK />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;