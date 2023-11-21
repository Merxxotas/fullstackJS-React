import Veterinario from "../models/Veterinario.js";
const registrar = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  //prevenir si un usuario ya se encuentra duplicado
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("El usuario ya existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error en el registro del usuario. 🙄😶");
  }
};
const perfil = (req, res) => {
  res.json({ msg: "mostrando perfil..." });
};

const confirmar = async (req, res) => {
  console.log(req.params.token);
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });
  console.log(usuarioConfirmar);
  if (!usuarioConfirmar) {
    const error = new Error("USUARIO no válido");
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

const autenticar = async(req, res) => {
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
  if(await usuario.comprobarPassword(password)){
    res.json({msg: "Usuario autenticado correctamente"});
    console.log("password correcto");
  }else{
    const error = new Error("Password incorrecto");
    return res.status(403).json({ msg: error.message });
    console.log("password incorrecto");
  }
};

export { autenticar, confirmar, perfil, registrar };

