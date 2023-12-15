import nodemailer from "nodemailer";
const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // console.log(datos);
  const { email, nombre, token } = datos;
  //Enviar el email
  const info = await transporter.sendMail({
    from: "Administrador de apcientes de una Veterinaria",
    to: email,
    subject: "Confirma tu cuenta de usuario por favor",
    text: `Haz click en el siguiente enlace para confirmar tu cuenta de usuario`,
    html: `
      <h1>Confirma tu cuenta</h1>
      <p>Hola ${nombre}, haz click en el siguiente enlace para confirmar tu cuenta de usuario</p>
      <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace: 
      <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>
      <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `,
  });
  console.log("Mensaje enviado %s", info.messageId);
};

export default emailRegistro;
