// Alejandro Orozco Romo 
// fecha de creación: 23/07/2025

// Variables 

let numeroUsuario = 0;
let intentos = 1;
let rangoNumeros = parseInt(prompt("Elige el rango de numeros ")); 
console.log(rangoNumeros);
let numeroSecreto = Math.floor(Math.random()*rangoNumeros) + 1;


// let palabraIntentos = 'intento';
let maximosIntentos = 3; 
 
while(numeroSecreto != numeroUsuario){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre el 1 al ${rangoNumeros} por favor:` ));
    
    // Impresion en consola 
    console.log('Valor de intento:', numeroUsuario);
    console.log(numeroUsuario);

    // Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    /* Bloque para realizar la conparacion */

    if (numeroSecreto == numeroUsuario){
        alert(`Acertaste, el numero correcto es: ${numeroUsuario} Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'  }`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("El número secreto es menor:");
        } else {
            alert("El número secreto es mayor");
        }
        // incrementamos el contadoe cuando no se acierte 
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;
        palabraIntentos = "Intentos";
        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos, el número secreto era ${numeroSecreto}`);
            break;
        }
    }  
    
}