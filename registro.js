//! FUNCIONES DEL SPRINT 3


// Sprint 3
        let arreglo = [];

        //Agregar registro
        const arregloNuevo = [];

        function agregarRegistro(){

            arregloNuevo.push(inputUsername);
            arregloNuevo.push(inputCorreo);
            arregloNuevo.push(inputPassword);
            arregloNuevo.push(inputConfirmarContrasena);

            arreglo.push(arregloNuevo); //
            return 0;
          } //Cierre funcion agregarRegistro()
            agregarRegistro();

            console.log("Arreglo actual: ");
            console.log(arreglo);  //Arreglo global despues de anadir registros

          // Obtener Username
            function filtrarUsername(entrada){
              if ( /^[a-zA-Z_/.+-]{1,30}$/.test(entrada) ) { // Validar condicion numeros
                      return false;
                  }else{
                      return true;
                    }
            }

            let arregloReg=[];
            function obtenerUsername(arreglo){  //Funcion pedida

              let arregloT=[];
              for (let i = 0; i < arreglo.length; i++) {
                let arregloT=[];
                    //for (let j = 0; j < 1; j++)
                      //var arregloT = arreglo[i][0].filter(filtrarUsername)   //PEndiente de mejorar
                      if (filtrarUsername(arreglo[i][0])==false){
                        continue;
                      }
                      else{
                          for (let k = 0; k < 4; k++) {
                              arregloT.push(arreglo[i][k]);
                          }
                      }arregloReg.push(arregloT);

              } return arregloReg;
            }
              

            console.log("El arreglo filtrado por username es: ");
            console.log(obtenerUsername(arreglo));
