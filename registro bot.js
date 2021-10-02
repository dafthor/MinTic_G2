let arreglo = [];
function agregarRegistro(inputUsername, inputCorreo, inputPassword) {
  arregloNuevo.push(inputUsername);
  arregloNuevo.push(inputCorreo);
  arregloNuevo.push(inputPassword);
  // arregloNuevo.push(inputConfirmarContrasena);
  arreglo.push(arregloNuevo); //
  return 0;
}

let arregloReg = [];
function obtenerUsername(arreglo) {
  //Funcion pedida
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
module.export = {
  filtrarCorreo,
  obtenerUsername,
  agregarRegistro,
  arreglo,
};
