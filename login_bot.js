const capital = "budapest";

let registros = [{ correo: "juan@gmail.com", contrasena: "SecurePassword123" }];

function login() {
  var emaillogin = document.getElementById("form-login").elements[0].value;
  var contrasenalogin = document.getElementById("form-login").elements[1].value;
  var captcha = (element =
    document.getElementById("form-login").elements[2].value);

  var correos = registros.map((el) => el.correo);
  console.log(correos);
  var booleano = correos.includes(emaillogin);
  console.log(booleano);

  var index = correos.indexOf(emaillogin);
  console.log(index);

  var contrasenas = registros.map((el) => el.contrasena);
  console.log(contrasenas);

  var contrasenaaway = contrasenas[index];
  console.log(contrasenaaway);

  if (booleano == true) {
    if (contrasenaaway == contrasenalogin) {
      let validar = validarCAPTCHA(captcha);
      if (validar) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// function agregarRegistro() {
//   arreglo.push(document.getElementById("username").value);
//   arreglo.push(document.getElementById("correo").value);
//   arreglo.push(document.getElementById("contrasena").value);

//   registros.push([arreglo]);
//   console.log(registros);
// }

//! FUNCION validarCAPTCHA
function validarCAPTCHA(valor) {
  valor = valor.toLowerCase();
  valor = valor.replace(/\s+/g, "");
  valor = valor.replace(/[^a-zA-Z ]/g, "");

  if (capital == valor) {
    return true;
  }
  return false;
}
module.exports = { login, registros, validarCAPTCHA };

// module.exports.login = login;
// module.exports.registros = registros;
// module.exports.arreglo = arreglo;
// module.exports.validarCAPTCHA = validarCAPTCHA;
// module.exports.agregarRegistro = agregarRegistro;
