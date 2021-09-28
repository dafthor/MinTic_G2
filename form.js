//! Sprint 2

//? *Campo username*
function checkUsername(valor) {
  if (
    valor == null ||
    valor.length > 30 ||
    valor.length == 0 ||
    /^\s+$/.test(valor)
  ) {
    // Validar campo de texto obligatorio
    return false;
  } else if (/^[a-z0-9A-Z]{1,30}$/.test(valor)) {
    // Validar condicion numeros y letras
    return true;
  } else {
    return false;
  }
}

//? *Campo e-mail*
function checkCorreo(valor) {
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    // Validar campo de texto obligatorio
    return false;
  } else if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)) {
    //Validar condicion correo electronico
    return false;
  } else {
    return true;
  }
}

//? *Campo contrasena*
function checkContrasena(valor) {
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    // Validar campo de texto obligatorio
    return false;
  } else if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/.test(valor)) {
    // Validar condiciones contrasena
    return true;
  } else {
    return false;
  }
}

//? *Campo confirma contrasena*
function checkConfirmContrasena(valor1, valor2) {
  if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
    // Validar campo de texto obligatorio
    return false;
  } else if (
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/.test(valor2) &&
    valor2 == valor1
  ) {
    // Validar condiciones contrasena y su igualdad con la contrasena del cuadro anterior
    return true;
  } else {
    return false;
  }
}

/*
module.exports = checkUsername;
module.exports = checkCorreo;
module.exports = checkContrasena;
module.exports = checkConfirmContrasena;
*/
/*
module.exports = {
  checkUsername,
  checkCorreo,
  checkContrasena,
  checkConfirmContrasena,
};
*/

export { checkUsername, checkCorreo, checkContrasena, checkConfirmContrasena };
