import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
const app = express();
dotenv.config();
conectarDB();
// console.log(process.env.MONGO_URI);
app.use("/api/veterinarios", veterinarioRoutes);

// app.get("/", (req, res) => {
//   res.send("API esta funcionando");
// });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

console.log("sdadadsad");
