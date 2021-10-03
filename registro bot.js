let arreglo = [];
var arregloNuevo = [];
function agregarRegistro() {
  arregloNuevo = [];
  arregloNuevo.push(document.getElementById("username").value);
  arregloNuevo.push(document.getElementById("correo").value);
  arregloNuevo.push(document.getElementById("contrasena").value);
  arreglo.push(arregloNuevo);
  console.log(arreglo);
}

let arregloReg = [];
function obtenerUsername(arreglo) {
  arregloReg = [];
  arreglo.forEach(function (element) {
    if (/^[a-zA-Z_/.+-]{1,30}$/.test(element[0])) {
      arregloReg.push(element);
    }
  });
  return arregloReg;
}

let matrizCorreos = [];
function filtrarCorreo(arreglo) {
  matrizCorreos = [];
  arreglo.forEach(function (element) {
    if (/^([a-z0-9_\.-]+)@(hotmail).(com)$/.test(element[1])) {
      matrizCorreos.push(element);
    }
  });
  return matrizCorreos;
}

//?Export
module.exports = {
  filtrarCorreo,
  obtenerUsername,
  agregarRegistro,
  arreglo,
};
