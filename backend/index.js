import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import conectarDB from "./config/db.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
const app = express();
app.use(express.json());
dotenv.config();
conectarDB();
const dominiosPermitidos = ["http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    // const existe = dominiosPermitidos.some(dominio => dominio === origin);
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
