const formulario = document.getElementById("form-login");
const capital = "budapest";
let registros = [];
var arregloNuevo = [];
function login() {
  var userCo = document.getElementById('username/correo').value;
  var contrasena = document.getElementById('contrasena').value;
  var captcha = validarCAPTCHA();
  // let lista = [];
  registros.forEach(function (element){
    if (userCo == element[0] || userCo == element[1]){
      if(contrasena == element[2]){
        if(captcha){
          console.log(element)
          alert("Sesion iniciada correctamente")
          break
        }else{
          alert("Captcha incorrecto")
        }
      }else{
        alert("Contraseña incorrecta")
      }
    }else{
      
    }
  })
  registros.forEach(function (element){
    if (userCo == element[0] || userCo == element[1]){
      
    }
  })
}

function agregarRegistros() {
  arregloNuevo.push(document.getElementById("username").value);
  arregloNuevo.push(document.getElementById("correo").value);
  arregloNuevo.push(document.getElementById("contrasena").value);

  registros.push(arregloNuevo); //

  //console.log("guarde correctamente 'agregarRegistro' arreglo:");
  console.log(registros);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Funcion para evitar envio vacio del formulario
  login();
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
