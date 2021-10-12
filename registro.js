//! FUNCIONES DEL SPRINT 3

// Sprint 3
let arreglo = [];

//Agregar registro
var arregloNuevo = [];
arregloNuevo = [];
//function agregarRegistro(inputUsername, inputCorreo, inputPassword) {
function agregarRegistro() {
  arregloNuevo.push(document.getElementById("username").value);
  arregloNuevo.push(document.getElementById("correo").value);
  arregloNuevo.push(document.getElementById("contrasena").value);

  arreglo.push(arregloNuevo); //

  //console.log("guarde correctamente 'agregarRegistro' arreglo:");
  console.log(arreglo);
  // document.write(arreglo);
} //Cierre funcion agregarRegistro()

// Obtener Username
// function filtrarUsername(entrada) {
//   if (/^[a-zA-Z_/.+-]{1,30}$/.test(entrada)) {
//     // Validar condicion numeros
//     return false;
//   } else {
//     return true;
//   }
// }

let arregloReg = [];
function obtenerUsername(arreglo) {
  //Funcion pedida
  arregloReg = [];
  arreglo.forEach(function (element) {
    if (/^[a-zA-Z_/.+-]{1,30}$/.test(element[0])) {
      //continue
    } else {
      arregloReg.push(element[0]);
    }
  });
  // document.write(arreglo);
  // document.write(arregloReg);
  return arregloReg;
}
// export let arregloReg = [];
// function obtenerUsername(arreglo) {
//   //Funcion pedida
//   arregloReg = [];
//   let arregloT = [];
//   for (let i = 0; i < arreglo.length; i++) {
//     let arregloT = [];
//     //for (let j = 0; j < 1; j++)
//     //var arregloT = arreglo[i][0].filter(filtrarUsername)   //PEndiente de mejorar
//     if (filtrarUsername(arreglo[i][0]) == false) {
//       continue;
//     } else {
//       for (let k = 0; k < 3; k++) {
//         arregloT.push(arreglo[i][k]);
//       }
//     }
//     arregloReg.push(arregloT);
//   }
//   return arregloReg;
// }

// console.log("El arreglo filtrado por username es 'registro.js': ");
// console.log(obtenerUsername(arreglo));

//Filtrar Correo
// function recoCorreo(correo) {
//   // El correo tiene o no hotmail.com?
//   if (/^([a-z0-9_\.-]+)@(hotmail).(com)$/.test(correo)) {
//     // Validar condicion numeros
//     return true;
//   } else {
//     return false;
//   }
// }

// let matrizCorreos = [];

// function filtrarCorreo(arreglo) {
//   matrizCorreos = [];
//   let arregloT2 = [];
//   for (let i = 0; i < arreglo.length; i++){
//     let arregloT2 = [];
//     for (let j = 1; j < 2; j++) {
//       if (recoCorreo(arreglo[i][j]) == false) {
//         continue;
//       } else {
//         for (let k = 0; k < 3; k++) {
//           arregloT2.push(arreglo[i][k]);
//         }
//       }
//       matrizCorreos.push(arregloT2);
//     }
//   }
//   return matrizCorreos;
// }

let matrizCorreos = [];
function filtrarCorreo(arreglo) {
  matrizCorreos = [];
  arreglo.forEach(function (element) {
    if (/^([a-z0-9_\.-]+)@(hotmail).(com)$/.test(element[1])) {
      matrizCorreos.push(element[1]);
    }
  });
  return matrizCorreos;
}

//?Export
export { filtrarCorreo, obtenerUsername, agregarRegistro, arreglo };

// console.log("El arreglo filtrado por correo es 'registro.js': ");
// console.log(filtrarCorreo(arreglo));

// module.exports = { filtrarCorreo, obtenerUsername, agregarRegistro, arreglo };
