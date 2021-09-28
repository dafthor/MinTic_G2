import * as form from './form';
// import * as registro from './registro';

const formulario =  document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro input');

formulario.addEventListener('submit',(e) => {  //Funcion flecha que se ejecuta al presionar REGISTRAR 
    e.preventDefault(); //Funcion para evitar envio vacio del formulario

        // Acceso  a la informacion ingresada en el formulario
        var inputUsername = document.getElementById('username');
        const inputCorreo = document.getElementById('correo');
        const inputPassword = document.getElementById('contrasena');
        const inputConfirmarContrasena = document.getElementById('confirmContrasena');

        //! Sprint 2

        //? *Campo username*
        //Variable usada en la validacion final
        console.log("Validacion Usuario.. "+ form.checkUsername(inputUsername.value));

        //? *Campo e-mail*
         //Variable usada en la validacion final
        console.log("Correo: "+ form.checkCorreo(inputCorreo.value));
        

        //? *Campo contrasena*
        
  //Variable usada en la validacion final
        console.log("Contrasena:"+ form.checkContrasena(inputPassword.value));

        //? *Campo confirma contrasena*

         //Variable usada en la validacion final
        console.log("Confirmacion contrasena: " + form.checkConfirmContrasena(inputPassword.value, inputConfirmarContrasena.value));

    /* if (a==true && a==b && a==c && a==d){  // Verificacion final de todos los campos
        formulario.reset();
        console.log("Resultado comprobacion: Campos correctos");
        alert("Formulario enviado correctamente");
    }
    else{
        console.log("Resultado comprobacion: Campos incorrectos");
        alert("Error en uno o mas campos");
    } */

});
