// console.log("archivo verificacion...");
import {
  checkConfirmContrasena,
  checkContrasena,
  checkCorreo,
  checkUsername,
} from "./form.js";
import {
  filtrarCorreo,
  obtenerUsername,
  agregarRegistro,
  arreglo,
} from "./registro.js";
//! OJO ACTIVAR PARA PRUEBAS
// import { checkUsername } from "./registro.js";

const formulario = document.getElementById("form-registro");

formulario.addEventListener("submit", (e) => {
  //Funcion flecha que se ejecuta al presionar REGISTRAR
  e.preventDefault(); //Funcion para evitar envio vacio del formulario

  // Acceso  a la informacion ingresada en el formulario
  const inputUsername = document.getElementById("username");
  const inputCorreo = document.getElementById("correo");
  const inputPassword = document.getElementById("contrasena");
  const inputConfirmarContrasena = document.getElementById("confirmContrasena");

  //! Sprint 2

  //? *Campo username*
  //Variable usada en la validacion final
  console.log("Validacion Usuario.. " + checkUsername(inputUsername.value));
  let a = checkUsername(inputUsername.value);

  //? *Campo e-mail*
  //Variable usada en la validacion final
  console.log("Correo: " + checkCorreo(inputCorreo.value));
  let b = checkCorreo(inputCorreo.value);

  //? *Campo contrasena*

  //Variable usada en la validacion final
  console.log("Contrasena:" + checkContrasena(inputPassword.value));
  let c = checkContrasena(inputPassword.value);

  //? *Campo confirma contrasena*

  //Variable usada en la validacion final
  console.log(
    "Confirmacion contrasena: " +
      checkConfirmContrasena(
        inputPassword.value,
        inputConfirmarContrasena.value
      )
  );
  let d = checkConfirmContrasena(
    inputPassword.value,
    inputConfirmarContrasena.value
  );

  if (a == true && a == b && a == c && a == d) {
    // Verificacion final de todos los campos
    console.log("Resultado comprobacion: Campos correctos");
    alert("Formulario enviado correctamente");

    //! Sprint 3
    // agregarRegistro(
    //   inputUsername.value,
    //   inputCorreo.value,
    //   inputPassword.value
    // ); //, inputConfirmarContrasena.value);
    agregarRegistro();
    console.log("obtener Username cuando guarda");
    console.log(obtenerUsername(arreglo));
    console.log("Filtrar correo al guardar");
    console.log(filtrarCorreo(arreglo));
    formulario.reset();
  } else {
    console.log("Resultado comprobacion: Campos incorrectos");
    alert("Error en uno o mas campos");
  }
});

// console.log("El Arreglo al cargar 'verficacion.js': ");
// console.log(arreglo);

function verUsernames() {
  let ar = [];
  ar = obtenerUsername(arreglo);
  console.log("Usuarios Obtenidos btn 'verificacion.js':");
  console.log(ar);
}

function verCorreos() {
  let ar = [];
  ar = filtrarCorreo(arreglo);
  console.log("Correos Obtenidos btn 'verificacion.js':");
  console.log(ar);
}

var usernum = document.getElementById("btnUser");
usernum.onclick = verUsernames;

var correoHot = document.getElementById("btnCorreos");
correoHot.onclick = verCorreos;
