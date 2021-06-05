let audio = document.getElementById("sounds");
let keyS = 'false';

var url = window.location.href;
var res = url.split('?');

if (res[1] !== undefined){
    captura = res[1].split('=');
    keyS = captura[1];
}

let image = document.getElementById("sons");

if(keyS == 'false'){
    audio.muted = false;
    if(image != null) image.style.backgroundImage = "url('../../assets/images/com-som.png')";
}else{
    audio.muted = true;
    if(image != null) image.style.backgroundImage = "url('../../assets/images/sem-som.png')";
}

function mute(){
    let image = document.getElementById("sons");

    if(keyS == "true"){
        image.style.backgroundImage = "url('../../assets/images/com-som.png')";
        keyS = "false";
        audio.muted = false;
    }else{
        image.style.backgroundImage = "url('../../assets/images/sem-som.png')";
        keyS = "true";
        audio.muted = true;
    }
}
function getKeyS(){
    return keyS;
}