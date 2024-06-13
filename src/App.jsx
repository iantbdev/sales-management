import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import LandingPage from "./Components/LandingPage/landingPage";
import Management from "./Components/Management/management";
import Header from "./Components/Header/header";
import { useSelector } from "react-redux";

const App = () => {
  // Verifica se o user é autentificado
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="landingPage"
            element={isAuthenticated ? <LandingPage /> : <Login />}
          />
          <Route
            path="management"
            element={isAuthenticated ? <Management /> : <Login />}
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
