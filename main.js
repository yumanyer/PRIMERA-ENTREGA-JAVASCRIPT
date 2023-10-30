
let identificar = true


let intentos = 1

do {
let usuario = prompt("Ingresar usuario (MAXIMO 5 INTENTOS)").toLowerCase();

if (usuario === null) {
    break;
}

if ((usuario === "manuel" || usuario === "tomas") && intentos <= 5) {
    let contraseña = prompt("Ingresa la contraseña:");
    
    if ((usuario === "manuel" && contraseña === "javascript") || (usuario === "tomas" && contraseña === "javascript")) {
    alert("Bienvenido señor " + usuario + "!!!");
    break;
    } else {
    alert("Contraseña incorrecta. Intentos restantes: " + (5 - intentos));
    intentos++;
    }
} else {
    alert("No estás autorizado. Solo los admins pueden entrar.");
    intentos++;
    if (intentos > 5) {
    alert("Te dije que solo los admins pueden entrar.");
    console.error("El usuario no está reconocido.");
    break;
    }
}
} while (identificar);