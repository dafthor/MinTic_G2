const formulario =  document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro input');

formulario.addEventListener('submit',(e) => {  //Funcion flecha que se ejecuta al presionar REGISTRAR 
    e.preventDefault(); //Funcion para evitar envio vacio del formulario

        // Acceso  a la informacion ingresada en el formulario
        const inputUsername = document.getElementById('username').value;
        const inputCorreo = document.getElementById('correo').value;
        const inputPassword = document.getElementById('contrasena').value;
        const inputConfirmarContrasena = document.getElementById('confirmContrasena').value;

        //! Sprint 2

        //? *Campo username*
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

        let a = checkUsername(valor1);  //Variable usada en la validacion final
        console.log("Username: " + valor1);
        console.log(checkUsername(valor1));

        //? *Campo e-mail*
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

        let b = checkCorreo(valor2);  //Variable usada en la validacion final
        console.log("Correo: "+ valor2);
        console.log(checkCorreo(valor2));

        //? *Campo contrasena*
        let valor3 = inputPassword;

        function checkContrasena(valor3){
            if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/.test(valor3) ) { // Validar condiciones contrasena 
                return true;
            }else{
                return false;
                }
            }

        let c = checkContrasena(valor3);  //Variable usada en la validacion final
        console.log("Contrasena:"+ valor3);
        console.log(checkContrasena(valor3));

        //? *Campo confirma contrasena*
        let valor4 = inputConfirmarContrasena;

        function checkConfirmContrasena(valor3,valor4){
            if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4) ) { // Validar campo de texto obligatorio
                return false;
            }
            else if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,20}$/.test(valor4)  && valor4==valor3) { // Validar condiciones contrasena y su igualdad con la contrasena del cuadro anterior
                return true;
            }else{
                return false;
                }
            } 

        let d = checkConfirmContrasena(valor3,valor4);  //Variable usada en la validacion final
        console.log("Confirmacion contrasena: " + valor4);
        console.log(checkConfirmContrasena(valor3,valor4));

    if (a==true && a==b && a==c && a==d){  // Verificacion final de todos los campos
        formulario.reset();
        console.log("Resultado comprobacion: Campos correctos");
        alert("Formulario enviado correctamente");
    }
    else{
        console.log("Resultado comprobacion: Campos incorrectos");
        alert("Error en uno o mas campos");
    }

});

module.exports = checkUsername;
module.exports = checkCorreo;
module.exports = checkContrasena;
module.exports = checkConfirmContrasena;

//module.exports = {
   // checkUsername,
   // checkCorreo,
    //checkContrasena,
  //  checkConfirmContrasena
//}

