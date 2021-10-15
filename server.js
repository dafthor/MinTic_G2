//* IMPORTAR PAQUETES

//const mysql = require("mysql");
const express = require("express");
const path = require("path");

// //* CONEXION BD
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "mision", //! CAMBIA A TU USARIO
//   password: "mintics", //! TU CONTRASEÑA
//   database: "minticg2",
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Conectado MySQL con exito");
// });

//! FINALIZA LA CONEXION MYSQL
//connection.end();

//*! DECLARANDO RUTAS PUBLICAS STATIC
let staticPath = path.join(__dirname, "");

//* inicializando expresss.js
const app = express();

//* Middlewares??
app.use(express.static(staticPath));
app.use(express.json());

//! Rutas
//? Ruta Inicio
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "public", "index.html")); //?Linea reemplazada cuando se agregó "Let staticPath" y "app.use(express.static(staticPath));"
  res.sendFile(path.join(staticPath, "index.html"));
});

//? Ruta de Registro
app.get("/registro", (req, res) => {
  res.sendFile(path.join(staticPath, "registro.html"));
});

//! Para formulario de registro en futuro
// app.post("registro", (req, res) => {
//   //console.log(req.body);
//   let { name, email, password, number, tac, notification } = req.body;

//   // form validations
//   if (name.length < 3) {
//     return res.json({ alert: "name must be 3 letters long" });
//   } else if (!email.length) {
//     return res.json({ alert: "enter your email" });
//   } else if (password.length < 8) {
//     return res.json({ alert: "password should be 8 letters long" });
//   } else if (!number.length) {
//     return res.json({ alert: "enter your phone number" });
//   } else if (!Number(number) || number.length < 10) {
//     return res.json({ alert: "invalid number, please enter valid one" });
//   } else if (!tac) {
//     return res.json({ alert: "you must agree to our terms and conditions" });
//   }
//   // else {
//   //   // Guardar en BD
//   // }
//   //? prueba de firebase
//   db.collection("users")
//     .doc(email)
//     .get()
//     .then((user) => {
//       if (user.exists) {
//         return res.json({ alert: "Email Existe" });
//       } else {
//         //encrypt el password antes de guardar
//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(password, salt, (err, hash) => {
//             req.body.password = hash;
//             db.collection("users")
//               .doc("email")
//               .set(req.body)
//               .then((data) => {
//                 res.json({
//                   name: req.body.name,
//                   email: req.body.email,
//                   seller: req.body.seller,
//                 });
//               });
//           });
//         });
//       }
//     });

//   //res.json("data recieved");
// });

//? Consulta MySQL
app.get("/consulta", (req, res) => {
  res.sendFile(path.join(staticPath, "/consulta.html"));
});

//? 404 Muestra 404.html
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
});
//* Atrapa cualquier direccion ingresada inexistente y la redirige al app.get /404
app.use((req, res) => {
  res.redirect("404");
});

//!PARA HEROKU
app.listen(process.env.PORT || 3000, () => {
  console.log("App iniciada en puerto 3000");
});
// app.listen(3000, () => {
//   console.log("App iniciada en puerto 3000");
// });

//module.exports = connection;
//export default connection;
