import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./src/pages/Signup";
import Home from "./src/pages/Home";

const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/home"
          element={
            isAuthenticated() ? <Home /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
