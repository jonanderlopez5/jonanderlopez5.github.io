// variables para animacion de titulo y mensaaje copiado(contacto)
const my_name = "Jon Ander Lopez";
var writen = "";
const my_span = document.createElement("span");
const titulo = document.getElementById("titulo");
var title_counter = 0;
var interval;
var interval2;
var contador = 0;
const mensaje = "Correo copiado";

document.onload = init();

//asignacion de eventos
function init() {

    animacion_titulo();

    document.getElementById("minimizar").addEventListener("click", minimizar);
    document.getElementById("expandir").addEventListener("click", expandir);
    document.getElementById("cerrar").addEventListener("click", cerrar);
    document.getElementById("contactame").addEventListener("click", abrirModal);
    document.getElementById("contact-me").addEventListener("click", abrirModal);
    document.getElementById("cerrar-modal").addEventListener("click", cerrarModal);
    document.getElementById("menu-movil").addEventListener("click", controlMenu);
    document.getElementById("copiar-email").addEventListener("click", copiarEmail);

}

//carga de valores e inicializacion del intervalo de escritura
function animacion_titulo() {

    my_span.innerHTML = "0";
    my_span.className = "title-cursor";
    titulo.innerHTML = "";
    titulo.appendChild(my_span);

    interval = setInterval(escribir_titulo, 100);
}

//control del intervalo y escritura del titulo
function escribir_titulo() {
    if (writen.length < my_name.length) {
        writen += my_name[title_counter];
        titulo.innerHTML = writen;
        titulo.appendChild(my_span);
        title_counter++;
    } else {
        clearInterval(interval);
    }
}

function minimizar() {
    var terminal = document.getElementById("terminal");
    var backend = document.getElementById("backend");

    if (terminal.getBoundingClientRect().height == 420) {
        terminal.style.height = "0px";
        terminal.style.padding = "0px";
        backend.style.height = "auto";
    } else {
        terminal.style.height = "400px";
        terminal.style.padding = "10px";
    }

}

function expandir() {
    var backend = document.getElementById("backend");
    if (backend.classList == "full_backend") {
        backend.classList = "backend";
        backend.style.width = "80%";
        backend.style.height = "auto";
    } else {
        backend.classList = "full_backend";
        backend.style.width = "99%";
        backend.style.height = "100vh";
        backend.style.backgroundColor = "black";
    }

}

function cerrar() {
    var backend = document.getElementById("backend");
    backend.style.height = "0px";
    backend.style.width = "0px";
    backend.style.opacity = "0";
    setTimeout(function () {
        backend.style.height = "auto";
        console.log(backend.getBoundingClientRect().top);
        if(backend.getBoundingClientRect().top == "0"){
            backend.style.width = "99%";
        }else{
            backend.style.width = "80%";
        }
        backend.style.opacity = "1";
    }, 2000);
}


function abrirModal (){
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function cerrarModal (){
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function controlMenu (){
    var menu = document.getElementById("menu")
    menu.classList.toggle("se-ve");
}

function copiarEmail (){
    var mail = document.getElementById('mail');
    navigator.clipboard.writeText(mail.innerHTML);

    var myAlert = document.getElementById("my-alert");
    myAlert.style.display = "flex";
    
    interval2 = setInterval(escribir_alerta ,100);
}

function escribir_alerta (){
    var alerta = document.getElementById("alert-message");
    if (alerta.innerHTML.length < mensaje.length) {
        alerta.innerHTML += mensaje[contador];
        contador++;
    } else {
        clearInterval(interval2);
        cerrarAlerta();
    }
}

function cerrarAlerta (){
    setTimeout(function(){
        document.getElementById("my-alert").style.display = "none";
        document.getElementById("alert-message").innerHTML = "";
        contador = 0;
    }, 800);
}
