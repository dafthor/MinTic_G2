//*! ESTE JS SE DEBE EJECUTAR EN CONSOLA, ES DE NODE-JS
//Se instaló con npm install mysql
//*? Comando: cd "Carpeta que contiene el sql.js"
//*? Comando: node sql.js

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "mision", //! CAMBIA A TU USARIO
  password: "mintics", //! TU CONTRASEÑA
  database: "minticg2",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado con exito");
});

//*! CREA EL SERVIDOR HTTP y proyecta codigo en la pagina HTML
var http = require("http");
http
  .createServer(function (req, res) {
    listado(res); //*? LLAMA LA FUNCION QUE TRAE LA CONSULTA SQL AL HTML
  })
  .listen(80, "localhost"); // sustituí 127.0.0.1 por localhost - El puerto estaba 1337

function listado(respuesta) {
  connection.query(
    "select username,correo from usuarios",
    function (error, filas) {
      if (error) {
        console.log("error en el listado");
        return;
      }
      respuesta.writeHead(200, { "Content-Type": "text/html" });
      var datos = "";
      for (var f = 0; f < filas.length; f++) {
        datos += "Usuario:" + filas[f].username + "<br>";
        datos += "Correo:" + filas[f].correo + "<hr>";
      }
      respuesta.write(
        "<!doctype html><html><head><title>Consulta</title></head><body>"
      );
      respuesta.write(datos);
      respuesta.write('<a href="index.html">Retornar</a>'); //!No funciona link
      respuesta.write("</body></html>");
      respuesta.end();
    }
  );
}

//! FINALIZA LA CONEXION
//connection.end();
