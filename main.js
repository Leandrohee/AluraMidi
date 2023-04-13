//Construindo uma funçao com 'function;
function tocaSom (idElemento) {
   const elemento = document.querySelector(idElemento);

   //-------SINAIS DE ALERTA PARA DADOS ERRADOS-----------------
    if ((elemento.localName === 'audio') && (elemento != null)){
        elemento.play();
    } 
    else {
        console.log ('Entrada errada');
    }
    //------- FINAL DE SINAIS DE ALERTA PARA DADOS ERRADOS-----

} 

//Constannte para contar as listas de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

/*------------------------------LOOP COM WHILE-------------------

let cont = 0; 

while (cont < listaDeTeclas.length) { 
    const nomeDoSom = listaDeTeclas[cont].classList[1]; //pegando o nome da classe
    const idAudio = `#som_${nomeDoSom}`; // criando um nome para cada idAudio

    listaDeTeclas[cont].onclick = function () {
        tocaSom (idAudio);
    } 
    cont = cont + 1;
}
----------------------------------------------------------------*/

//-------------------------------LOOP COM FOR--------------------
for (let cont = 0; cont < listaDeTeclas.length; cont++ ){
    const tecla = listaDeTeclas[cont]; // trocando um codigo grande por um menor
    const nomeDoSom = tecla.classList[1]; //pegando o nome da classe
    const idAudio = `#som_${nomeDoSom}`; // criando um nome para cada idAudio

    

    tecla.onclick = function () {
        tocaSom (idAudio);
        //tocaSom (`#som_${document.querySelectorAll('.tecla')[cont].classList[1]}`);      
    }
    
 //----------------------------ADD KEYBOARD FUNCTIONS---------   
    tecla.onkeydown = function (event) {
        console.log(event);
        if ((event.code === 'Enter') || (event.code ==='Space')) {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
