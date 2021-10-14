//import mysql from "mysql";
//const connection = require("server");
console.log("Estoy en consult.js");
const mysql = require("mysql");

//* CONEXION BD
const connection = mysql.createConnection({
  host: "localhost",
  user: "mision", //! CAMBIA A TU USARIO
  password: "mintics", //! TU CONTRASEÑA
  database: "minticg2",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado MySQL con exito");
});

var boton = document.getElementById("actualizar");

console.log(boton);

boton.addEventListener("click", () => {
  // Fill the table content
  var tableBody = "";
  var queryString = "SELECT * FROM usuarios";

  connection.query(queryString, function (err, results) {
    console.log("dentro del query");
    if (err) throw err;
    console.log(results);
    for (i = 0; i < results.length; i++) {
      console.log("en el for" + results[i]);
      tableBody += "<tr>";
      tableBody += "  <td>" + results[i].id + "</td>";
      tableBody += "  <td>" + results[i].username + "</td>";
      tableBody += "  <td>" + results[i].correo + "</td>";
      tableBody += "</tr>";
    }
    document.getElementById("tablebody").innerHTML = tableBody;
  });
  connection.end(() => {});
});
