const formulario = document.getElementById("form-login");
const capital = "budapest";

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Funcion para evitar envio vacio del formulario

  //? llamado a Validacion captcha
  if (validarCAPTCHA()) {
    alert("RESPUESTAS IGUALES");
    // Codigo adicional
  } else {
    alert("RESPUESTAS INCORRECTA");
  }
});

//! FUNCION validarCAPTCHA
function validarCAPTCHA(valor) {
  valor = valor.toLowerCase();
  valor = valor.replace(/\s+/g, "");

  if (capital == valor) {
    return true;
  }
  return false;
}
