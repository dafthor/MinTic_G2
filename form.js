//DOCUMENTO CON FUNCIONES DE VALIDACION DE FORMULARIO PARA SPRINT 2

const formulario =  document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro input');

formulario.addEventListener('submit',(e) => {  
    e.preventDefault(); //Funcion para que evitar envio vacio del formulario

        const inputUsername = document.getElementById('username').value;
        const inputCorreo = document.getElementById('correo').value;
        const inputPassword = document.getElementById('password').value;
        const inputConfirmarContrasena = document.getElementById('confirmarContrasena').value;

        //! Sprint 2

        //? Campo username
        let valor1 = inputUsername;

        function checkUsername(valor1){
            if (valor1 == null || valor1.length > 30 || valor1.length == 0 || /^\s+$/.test(valor1) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if ( /^[a-z0-9A-Z]{1,30}$/.test(valor1) ) { // Validar condicion numeros y letras
                return true;
            }else{
                return false;
                }
            
        }

        let a = checkUsername(valor1);
        console.log(valor1);
        console.log(checkUsername(valor1));

        //? Campo e-mail
        let valor2 = inputCorreo;

        function checkCorreo(valor2){
            if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if( !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor2)) ) { //Validar condicion correo electronico
                return false;
            }else{
                return true;
                }
            }

        let b = checkCorreo(valor2);
        console.log(valor2);
        console.log(checkCorreo(valor2));

        //? Campo contrasena
        let valor3 = inputPassword;

        function checkContrasena(valor3){
            if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,1000}$/.test(valor3) ) { // Validar condiciones contrasena 
                return true;
            }else{
                return false;
                }
            }

        let c = checkContrasena(valor3);
        console.log(valor3);
        console.log(checkContrasena(valor3));

        //? Campo confirma contrasena
        let valor4 = inputConfirmarContrasena;

        function checkConfirmContrasena(valor3,valor4){
            if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,1000}$/.test(valor4)  && valor4==valor3) { // Validar condiciones contrasena y su igualdad con la contrasena del cuadro anterior
                return true;
            }else{
                return false;
                }
            }

        let d = checkConfirmContrasena(valor3,valor4);
        console.log("eso da: "+d);
        console.log(checkConfirmContrasena(valor3,valor4));

    if (a==true && a==b && a==c && a==d){  // Verificacion final
        formulario.reset();
        alert("Formulario enviado correctamente");
    }
    else{
        //document.write("<h3>Error en uno de los campos</h3>");
        alert("Error");
    }

});


//module.exports = {
   // checkUsername,
   // checkCorreo,
    //checkContrasena,
  //  checkConfirmContrasena
//}

