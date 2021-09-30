// console.log("archivo verificacion...");
import {
  checkConfirmContrasena,
  checkContrasena,
  checkCorreo,
  checkUsername,
} from "./form.js";
import { filtrarCorreo, obtenerUsername, agregarRegistro } from "./registro.js";
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
    formulario.reset();
    console.log("Resultado comprobacion: Campos correctos");
    alert("Formulario enviado correctamente");

    //! Sprint 3
    agregarRegistro(inputUsername.value, inputCorreo.value, inputPassword.value, inputConfirmarContrasena.value);
    obtenerUsername(arreglo);
    filtrarCorreo(arreglo);
  } else {
    console.log("Resultado comprobacion: Campos incorrectos");
    alert("Error en uno o mas campos");
  }
});
