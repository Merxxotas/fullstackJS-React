import express from "express";
import {
  autenticar,
  comprobarToken,
  confirmar,
  nuevoPassword,
  olvidePassword,
  perfil,
  registrar,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

//URL PUBLICAS
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
// router.get("/olvide-password/:token", comprobarToken); //Forma "Individual"
// router.post("/olvide-password/:token", nuevoPassword); //Forma "Individual"
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); //Forma "Multiple"
//URL PRIVADAS
router.get("/perfil", checkAuth, perfil);
export default router;
