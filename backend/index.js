import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
const app = express();
dotenv.config();
conectarDB();
// console.log(process.env.MONGO_URI);
app.use("/", (req, res) => {
  res.send("Hola Mundo1");
  // alert("Chao mundo");
  console.log("Chao mundo1");
  //   console.log("Nueva conexion");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

console.log("sdadadsad");
