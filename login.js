const formulario = document.getElementById("formulario");
const capital = "budapest";
let registros = []

function Login (){

}

function agregraRegistros(){
    
}




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
function validarCAPTCHA() {
  let inputRespuesta = document.getElementById("captcha").value;
  inputRespuesta = inputRespuesta.toLowerCase();
  inputRespuesta = inputRespuesta.replace(/\s+/g, "");

  if (capital == inputRespuesta) {
    return true;
  }
  return false;
}
