var i = 0;
var images = [];
var time = 3000;

images[0] = "https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/02/software_engineer_professional_athlete_millions.jpg?fit=1600%2C900&ssl=1";
images[1] = "https://lh3.googleusercontent.com/NjgEI3G35jhLcXU-y64E7f962DlT-cLcQigoWnSaUrFqB_SBJwneYBIOkusM_tY2emHklBOwOrM9fDsvfQ=w1080-h608-p-no-v0"
images [2] = "https://c0.wallpaperflare.com/preview/352/710/333/agency-business-company-computer.jpg"

function cambiar_foto(){
    document.slide.src = images[i];
    if(i < images.length-1){
        i++;
    }
 else{
    i = 0;
}
    setTimeout("cambiar_foto()", time)
}

window.onload = cambiar_foto;

let boton = document.getElementById("boton_enviar");
let email = document.getElementById("email");
let nombre = document.getElementById("nombre");
let mensaje = document.getElementById("mensaje");




function enviar(){
    if (nombre.value.length==0 || email.value.length==0){
        alert("Por favor, escribe un mensaje");
        nombre.value = "";
        email.value ="";
        mensaje.value = "";
    }
    else{
        alert("Se ha enviado tu respuesta");
        nombre.value = "";
        email.value ="";
        mensaje.value = "";
    }
    
}

boton.addEventListener("click",enviar)

/**Skills */

let titulo = document.createElement("h1");
let contenido = document.createTextNode("SKILLS");
titulo.appendChild(contenido);
titulo.setAttribute("align","center");
document.getElementById("aboutme").appendChild(titulo);

let skills = {
    hablidad1: "Capacidad de resolucion de problemas",
    habilidad2: "Prestar atencion a los detalles",
    habilidad3: "Alto nivel de conocimientos tecnicos",
    habilidad4: "Excelentes habilidades interpersonales"
}

