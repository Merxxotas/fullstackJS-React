import React from "react";
const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "from-indigo-400 to-indigo-600"
          : "from-red-400 to-red-600"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase font-bold text-sm mb-10 text-white`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
