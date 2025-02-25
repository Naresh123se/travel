import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      {!isLogin && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
