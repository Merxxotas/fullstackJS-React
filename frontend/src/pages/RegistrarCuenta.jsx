import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
const RegistrarCuenta = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Hay campos vacíos",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    if (password.length < 8) {
      // Mostrar la alerta
      setAlerta({
        msg: "La contraseña debe tener al menos 8 caracteres",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    // Validar si la contraseña tiene algún número
    if (!/\d/.test(password)) {
      setAlerta({
        msg: "La contraseña debe contener al menos un número",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    // Validar si la contraseña tiene alguna letra mayúscula
    if (!/[A-Z]/.test(password)) {
      setAlerta({
        msg: "La contraseña debe contener al menos una letra mayúscula",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    // Validar si la contraseña tiene algún carácter especial
    if (!/[!@#$%^&*()]/.test(password)) {
      setAlerta({
        msg: "La contraseña debe contener al menos un carácter especial",
        error: true,
      });
      // Esperar 3 segundos y ocultar la alerta
      setTimeout(function () {
        setAlerta({}); // Cambiar el estado de la alerta a vacío
      }, 3000);
      return;
    }

    // console.log("Todo correcto, y yo que me alegro...");
    setAlerta({});

    try {
      const url = "http://localhost:4000/api/veterinarios";
      await axios.post(url, { nombre, email, password });
      setAlerta({
        msg: "El usuario se creó correctamente, revise su email",
        error: false,
      });

      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data) {
        setAlerta({ msg: error.response.data.msg, error: true });
      } else {
        setAlerta({
          msg: "Un error inesperado ha ocurrido, lo sentimos",
          error: true,
        });
      }

      setTimeout(() => {
        setAlerta({});
      }, 3000);
    }
  };

  const { msg } = alerta;

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
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 rounded-xl border-gray-300"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Registrar cuenta"
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
