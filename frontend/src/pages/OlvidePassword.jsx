import React from "react";
import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-red-500 font-black text-5xl">
          Recupera el acceso de tu cuenta{" "}
          <span className="text-blue-700">
            y no pierdas el control de tus pacientes.
          </span>
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
              placeholder="Correo electrónico"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
            />
          </div>
        </form>
        <input
          type="submit"
          value="Recuperar cuenta"
          className="bg-rose-500 w-full hover:bg-rose-900 p-3 px-10
             text-white uppercase font-bold rounded-xl 
             hover:cursor-pointer transition duration-300 ease-in-out md:w-auto"
        />
        <nav className="mt-10 lg:flex lg:justify-between text-red-600 font-bold">
          <Link className="block text-center my-5 text-slate-500" to="/">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </Link>
          <Link
            className="block text-center my-5 text-slate-500"
            to="/registrar-cuenta"
          >
            ¿No tienes una cuenta? Regístrate aquí
          </Link>
        </nav>
      </div>
    </>
  );
};

export default OlvidePassword;
