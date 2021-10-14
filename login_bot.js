const formulario = document.getElementById("form-login");
const capital = "budapest";
let registros = [];
let arreglo = [];
var arregloNuevo = [];
let lista = [];
let contra;

function login() {
  var userCo = document.getElementById("username/correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var captcha = validarCAPTCHA(document.getElementById("captcha").value);
  lista = [];
  registros.forEach(function (element) {
    if (userCo == element[0][0] || userCo == element[0][1]) {
      lista.push(element);
      contra = element[0][2];
    }
  });

  if (lista.length != 0) {
    if (contrasena == contra) {
      if (captcha) {
        console.log(lista);
        alert("Sesion iniciada correctamente");
      } else {
        alert("Captcha incorrecto");
      }
    } else {
      alert("Contraseña incorrecta");
    }
  } else {
    alert("Usuario no encontrado");
  }
}

function agregarRegistro() {
  registros.push(document.getElementById("username").value);
  // registros.push(document.getElementById("correo").value);
  // registros.push(document.getElementById("contrasena").value);

  arreglo.push(registros);
  console.log(arreglo);
}

//! FUNCION validarCAPTCHA
function validarCAPTCHA(valor) {
  valor = valor.toLowerCase();
  valor = valor.replace(/\s+/g, "");
  // TODO ELIMINAR CARACTERES ESPECIALES

  if (capital == valor) {
    return true;
  }
  return false;
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.arreglo = arreglo;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;
