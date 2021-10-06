let arreglo = [];
let registros = [];

registros = [];

function agregarRegistro() {
  // registros.push(
  //   document.getElementById("username").value,
  //   document.getElementById("correo").value,
  //   document.getElementById("contrasena").value
  // );
  registros.push(document.getElementById("username").value);
  // registros.push(document.getElementById("correo").value);
  // registros.push(document.getElementById("contrasena").value);

  arreglo.push(registros);
  console.log(arreglo);
}

let arregloReg = [];
arregloReg = [];
function obtenerUsername(arreglo) {
  arreglo.forEach(function (element) {
    if (/^[a-zA-Z_/.+-]{1,30}$/.test(element)) {
      //continue
    } else {
      arregloReg.push(element);
    }
  });
  return arregloReg;
}

// let matrizCorreos = [];
// matrizCorreos = [];

// function filtrarCorreo(arreglo) {
//   arreglo.forEach(function (element) {
//     if (/^([a-z0-9_\.-]+)@(hotmail).(com)$/.test(element)) {
//       //if (/^(hotmail).(com)$/.test(element)) {
//       matrizCorreos.push(element);
//     } else {
//       //matrizCorreos.push(element);
//       console.log("else filtrar");
//     }
//   });
//   return matrizCorreos;
// }

function recoCorreo(correo) {
  // El correo tiene o no hotmail.com?
  if (/^([a-z0-9_\.-]+)@(hotmail).(com)$/.test(correo[1])) {
    // Validar condicion numeros
    return true;
  } else {
    return false;
  }
}

let matrizCorreos = [];
function filtrarCorreo(arreglo) {
  let arregloT2 = [];
  if (arreglo.forEach(recoCorreo)) {
    for (let k = 0; k < 4; k++) {
      arregloT2.push(arreglo[i][k]);
    }
  }
  matrizCorreos.push(arregloT2);
  return matrizCorreos;
}

//?Export

module.exports = {
  filtrarCorreo,
  obtenerUsername,
  agregarRegistro,
  arreglo,
  registros,
};
