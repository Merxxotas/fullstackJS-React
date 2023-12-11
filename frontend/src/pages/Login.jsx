import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Inicia sesión, y administra tus{" "}
          <span className="text-black">Pacientes</span> de veterinaria
        </h1>
      </div>
      <div>
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
            className="bg-indigo-500 w-full hover:bg-indigo-600 p-3 px-10
             text-white uppercase font-bold rounded-xl 
             hover:cursor-pointer transition duration-300 ease-in-out md:w-auto"
          />
        </form>
        <nav>
          <Link to="/registrar-cuenta">
            ¿No tienes una cuenta? Regístrate aquí
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
