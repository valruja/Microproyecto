var i = 0;
var images = [];
var time = 3000;

images[0] = "https://www.revistaenfoque.cl/wp-content/uploads/2017/03/woman-working-in-the-office.jpg";
images[1] = "https://lh3.googleusercontent.com/NjgEI3G35jhLcXU-y64E7f962DlT-cLcQigoWnSaUrFqB_SBJwneYBIOkusM_tY2emHklBOwOrM9fDsvfQ=w1080-h608-p-no-v0"
images [2] = "https://www.entornointeligente.com/wp-content/uploads/2020/02/ihay_tareas_que_los_ingenieros_de_sistemas_pueden_hacer_en_dos_horas_.jpg"

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