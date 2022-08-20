var botonEncriptar = document.querySelector(".btn-encriptar"); // Recupero el elemento
var botonDesencriptar = document.querySelector(".btn-desencriptars"); 

var munieco = document.querySelector(".munieca");
var texto = document.querySelector(".texto-munieca");
var textAreaOut = document.querySelector(".textAreaOut");

var resultado = document.querySelector(".texto-resultado")


botonEncriptar.onclick = encriptar; //Sin () para que no la llame al recargarse la pagina


//Funcion para tomar el texto desde el TextAreaInput
function recTexto(){
    var inputText = document.querySelector(".textAreaInput");
    
    return inputText;
}


//Funcion para encriptacion
function encriptar(){
    ocultarElementos();
    /* resultado.textContent  */
    var texto = encriptarTexto(recTexto());
    alert(texto.value);
}

//Funcion para ocultar elementos al hace la encriptacion
function ocultarElementos(){
    munieco.classList.add("ocultar");
    texto.classList.add("ocultar");
}

//Encriptacion propiamente dicha
function encriptarTexto(mensaje){
    
    var texto = mensaje;
    
    var textoFinal = "";

    for(let i; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }else{
            textoFinal = textoFinal + texto[i];
        }
    }
    
    return textoFinal;
}