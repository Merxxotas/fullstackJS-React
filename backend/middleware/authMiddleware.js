import jwt from "jsonwebtoken";
import Veterinario from "../models/Veterinario.js";
const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.veterinario = await Veterinario.findById(decoded.id).select(
        "-password -token -confirmado"
      );
      // console.log(decoded);
      //   console.log(veterinario);
      return next();
    } catch (error) {
      const e = new Error("No autenticado1🤬");
      return res.status(403).json({ msg: e.message });
    }
  }
  if (!token) {
    const error = new Error("No autenticado, no hay token 2🤬");
    res.status(403).json({ msg: error.message });
  }
  next();
};
export default checkAuth;
