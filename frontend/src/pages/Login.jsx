import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-red-500 font-black text-6xl">
          Inicia sesión, y administra tus{" "}
          <span className="text-blue-700">Pacientes</span> de veterinaria
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Correo electrónico
            </label>
            <input
              type="email"
              // name="email"
              // id="email"
              placeholder="Correo electrónico"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Contraseña
            </label>
            <input
              type="password"
              // name="email"
              // id="email"
              placeholder="Tu contraseña (password)"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>

          <input
            type="submit"
            value="Iniciar sesión"
            className="bg-rose-500 w-full hover:bg-rose-900 p-3 px-10
             text-white uppercase font-bold rounded-xl 
             hover:cursor-pointer transition duration-300 ease-in-out md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between text-red-600 font-bold">
          <Link
            className="block text-center my-5 text-slate-500"
            to="/registrar-cuenta"
          >
            ¿No tienes una cuenta? Regístrate aquí
          </Link>
          <Link
            className="block text-center my-5 text-slate-500"
            to="/olvide-password"
          >
            Olvidé mi contraseña (password)
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
