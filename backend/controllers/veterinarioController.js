import emailRegistro from "../helpers/emailRegistro.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarid.js";
import Veterinario from "../models/Veterinario.js";
const registrar = async (req, res) => {
  // console.log(req.body);
  const { email, nombre } = req.body;
  //prevenir si un usuario ya se encuentra duplicado
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("El usuario ya existe 🥱");
    return res.status(401).json({ msg: error.message });
  }
  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    //Enviar email
    emailRegistro({ email, nombre, token: veterinarioGuardado.token });
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error en el registro del usuario. 🙄😶");
  }
};
const perfil = (req, res) => {
  // console.log(req.veterinario);
  // res.json({ msg: "mostrando perfil... 🖨" });
  const { veterinario } = req;
  res.json({ perfil: veterinario });
};

const confirmar = async (req, res) => {
  // console.log(req.params.token);
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });
  // console.log(usuarioConfirmar);
  if (!usuarioConfirmar) {
    const error = new Error("Usuario no válido");
    return res.status(404).json({ msg: error.message });
  }

  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente..." });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  //prevenir si un usuario ya se encuentra duplicado
  const usuario = await Veterinario.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  //confirmar si el usuario esta confirmado
  if (!usuario.confirmado) {
    const error = new Error("El usuario no está confirmado");
    return res.status(403).json({ msg: error.message });
  }

  //comprobar password
  if (await usuario.comprobarPassword(password)) {
    // console.log("password correcto");
    //generar JWT
    res.json({ token: generarJWT(usuario.id) });
    // res.json({msg: "Usuario autenticado correctamente"});
  } else {
    // console.log("password incorrecto");
    const error = new Error("Password incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  // console.log("asd");
  const existeVeterinario = await Veterinario.findOne({ email });
  // console.log(existeVeterinario);
  if (!existeVeterinario) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeVeterinario.token = generarId();
    await existeVeterinario.save();
    res.json({
      msg: "Se ha enviado un correo para reestablecer el password 📧",
    });
  } catch (error) {
    console.log(error);
  }
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;
  // console.log(token);
  const tokenValido = await Veterinario.findOne({ token });
  if (tokenValido) {
    res.json({ msg: "Token válido y el usuario existe ✅" });
  } else {
    const error = new Error("Token no válido");
    return res.status(400).json({ msg: error.message });
  }
};

const nuevoPassword = async (req, res) => {
  // console.log("asd");
  const { token } = req.params;
  const { password } = req.body;
  const veterinario = await Veterinario.findOne({ token });
  if (!veterinario) {
    const error = new Error("Token no válido 🧩");
    return res.status(400).json({ msg: error.message });
  }

  try {
    veterinario.token = null;
    veterinario.password = password;
    await veterinario.save();
    res.json({ msg: "Password actualizado correctamente 🥳" });
  } catch (error) {
    console.log(error);
  }
};

export {
  autenticar,
  comprobarToken,
  confirmar,
  nuevoPassword,
  olvidePassword,
  perfil,
  registrar,
};
