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
titulo.setAttribute("align","left");
document.getElementById("skills").appendChild(titulo);

let skills = {
    habilidad1: "Capacidad de resolución de problemas",
    habilidad2: "Prestar atención a los detalles",
    habilidad3: "Alto nivel de conocimientos técnicos",
    habilidad4: "Excelentes habilidades interpersonales"
}


let hab1 = document.createElement("li");
let texto_hab1 = document.createTextNode(`${skills.habilidad1}`);
hab1.appendChild(texto_hab1);
hab1.setAttribute("align","left");
document.getElementById("skills").appendChild(hab1);

let hab2 = document.createElement("li");
let texto_hab2 = document.createTextNode(`${skills.habilidad2}`);
hab2.appendChild(texto_hab2);
hab2.setAttribute("align","left");
document.getElementById("skills").appendChild(hab2);

let hab3 = document.createElement("li");
let texto_hab3 = document.createTextNode(`${skills.habilidad3}`);
hab3.appendChild(texto_hab3);
hab3.setAttribute("align","left");
document.getElementById("skills").appendChild(hab3);

let hab4 = document.createElement("li");
let texto_hab4 = document.createTextNode(`${skills.habilidad4}`);
hab4.appendChild(texto_hab4);
hab4.setAttribute("align","left");
document.getElementById("skills").appendChild(hab4);



