import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Messages from "./pages/messages/Messages";

const App = () => {
  return (
    <main className="p-4 h-screen flex items-center justify-center">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
