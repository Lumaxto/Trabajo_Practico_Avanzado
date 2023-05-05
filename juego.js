/*--Juego--*/
let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

/*--Defino las funciones--*/
function iniciar(){
    var imagenes=document.querySelectorAll('#caja_imagenes img');
     soltar=document.getElementById('caja_soltar1');  
     soltar2  =document.getElementById('caja_soltar2'); 
     soltar3 = document.getElementById('caja_soltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){   //acordarse del preventDefault
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){    //funciont(e)= arrastrado
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));  //elemento.getAttribute("id") es la ruta de seteo
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';  contador
    contador++

        //no olvidarse del contador.
}
function reinicio() {
    window.location.reload();
}
iniciar()  // acordarse de al finalizar la definciion de las funciones de function().
