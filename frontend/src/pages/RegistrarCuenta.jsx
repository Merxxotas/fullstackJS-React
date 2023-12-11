import React from "react";
import { Link } from "react-router-dom";
const RegistrarCuenta = () => {
  return (
    <>
      <div>
        <h1 className="text-red-500 font-black text-5xl">
          Por favor, ingresa tu{" "}
          <span className="text-blue-700">correo electrónico</span> asociado a
          la cuenta
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Digita tu contraseña (password)"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Vuelve a escribir tu contraseña (password)
            </label>
            <input
              type="password"
              placeholder="Digita tu contraseña (password)"
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
            to="/olvide-password"
          >
            ¿Olvidaste tu constraseña (password)? Recuperala aquí
          </Link>
        </nav>
      </div>
    </>
  );
};

export default RegistrarCuenta;
