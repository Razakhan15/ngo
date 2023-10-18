import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import UserForm from "./components/user/UserForm";
import SubmittedForm from "./components/user/SubmittedForm";
import AdminRegister from "./components/admin/AdminRegister";
import AdminLogin from "./components/admin/AdminLogin";
import Panel from "./components/admin/Panel";
import UserFormDetails from "./components/admin/UserFormDetails";
import ForgotPass from "./components/ForgotPass";
import AdminForgPass from "./components/admin/AdminForgPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form_submitted" element={<SubmittedForm />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/" element={<UserForm />} />
        <Route path="/ngo/admin/reg" element={<AdminRegister />} />
        <Route path="/ngo/admin/login" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<Panel />} />
        <Route path="/details/user/:id" element={<UserFormDetails />} />
        <Route path="/user/forgot-password" element={<ForgotPass />} />
        <Route path="/ngo/admin/forgot-password" element={<AdminForgPass />} />
      </Routes>
    </Router>
  );
}

export default App;