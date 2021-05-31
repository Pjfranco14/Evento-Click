var titulo_html = document.getElementById('titulo')
var caja_html = document.getElementById('caja')
var boton_html = document.getElementById('boton')


function srcriptTitulo(){
    
    titulo_html.classList.add("titulo2");
}
function srcriptCaja(){
    caja_html.classList.add("caja2");
}

//EVENTOS

boton_html.addEventListener('click', srcriptCaja);
boton_html.addEventListener('click', srcriptTitulo);