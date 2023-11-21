import express from "express";
import {
  autenticar,
  confirmar,
  perfil,
  registrar
} from "../controllers/veterinarioController.js";
const router = express.Router();
router.post("/", registrar);
router.post("/login", autenticar);

router.get("/perfil", perfil);
router.get("/confirmar/:token", confirmar);

export default router;
