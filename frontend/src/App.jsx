import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import Login from "./pages/Login";
import OlvidePassword from "./pages/OlvidePassword";
import RegistrarCuenta from "./pages/RegistrarCuenta";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            <Route path="registrar-cuenta" element={<RegistrarCuenta />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
