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
    res.status(400).send("Hubo un error");
  }
};
const perfil = (req, res) => {
  res.json({ msg: "mostrando perfil..." });
};

const confirmar = async (req, res) => {
  // console.log(req.params.token);
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });
  console.log(usuarioConfirmar);
  if (!usuarioConfirmar) {
    const error = new Error("USUARIO no válido");
    return res.status(400).json({ msg: error.message });
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
export { registrar, perfil, confirmar };
