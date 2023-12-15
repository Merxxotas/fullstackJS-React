import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  // console.log(params);
  const { id } = params;
  useEffect(() => {
    // console.log("El id es: ", id);
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`;
        // console.log(url);
        const { data } = await axios.get(url);
        // console.log(data);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          error: false,
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-green-700 font-black text-5xl">
          ¡Confirma tu cuenta{" "}
          <span className="text-yellow-500">y empieza a administrar</span> a{" "}
          {""}
          tus pacientes!
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-slate-500" to="/">
            Iniciar sesión AQUÍ
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
