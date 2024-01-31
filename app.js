/*
let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secreto";
«`» <body>
let parrafo = document.querySelector ("p");
parrafo.innerHTML = "Seleciona un numero del 1 al 10"

function intentoDeUsuario(){
    alert("Click desde el boton")
}
` ${}
*/
/*
let = numeroMaximo = 10
let numeroSecreto = (generarNumeroSecreto());
let numeroDeIntentos = 1;
let numerosSorteados = [];

//let palabraIntento = ("intento.")

function asignacionTexto(elemento,texto){
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = (texto);
    return;
}
//console.log(numeroSecreto)
function verificarIntento(){
    let intentoDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (intentoDeUsuario === numeroSecreto) {
        asignacionTexto ('p',`Felicidades, adivinaste el numero en ${numeroDeIntentos} ${(numeroDeIntentos === 1) ? 'intento.' : 'intentos.'}`);
        document.getElementById("reiniciar").removeAttribute ("disabled")
        //unNuevoJuego()
    }   else {
            if (intentoDeUsuario > numeroSecreto){
            asignacionTexto ('p','Lo lamento, el numero es menor.');
            } else {
            asignacionTexto ('p','Lo lamento, el numero es mayor.')
            }
        //console.log(numeroDeIntentos)
        numeroDeIntentos = numeroDeIntentos + 1
        limpiarIntento();
        //palabraIntento = ("intentos.")
        }
       // unNuevoJuego()
return;
}

function limpiarIntento() {
    let limpiarCaja = document.getElementById("valorUsuario")
    limpiarCaja.value = "";
    //return limpiarCaja;
}

function generarNumeroSecreto(){
    let numeroGenerado = (Math.floor(Math.random() * numeroMaximo + 1));
    console.log(numeroGenerado)
    //console.log(numerosSorteados)
    if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto()    
        } else {
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado
            }
}

function unNuevoJuego() {
limpiarIntento();
asignacionTexto("p",`Seleciona un numero del 1 al ${numeroMaximo}`);
document.getElementById("reiniciar").setAttribute ("disabled", "true")
numeroDeIntentos=1
numeroSecreto = generarNumeroSecreto ();
}


asignacionTexto("h1","Juego del numero secreto");
asignacionTexto("p",`Seleciona un numero del 1 al ${numeroMaximo}`);
*/

//1 
let listaGenerica = [];
//2
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];
//3
lenguajesDeProgramacion.push ("Java","Ruby","GoLang")

//4
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();
//5
function mostrarLenguagesSeparadamentereversa() {
    for (let i = lenguajesDeProgramacion.length-1 ; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  mostrarLenguagesSeparadamentereversa()
//6


 function promedioDeLista(Numeros){
    let sumaLista= 0;
    for (let i = 0; i < Numeros.length; i++) {
        sumaLista += Numeros[i];
       
    }
    return sumaLista/Numeros.length;
}

let listaNumeros = [10, 20, 30, 40, 50];
let media = promedioDeLista(listaNumeros);
console.log(media);

//7
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//8
let listaNumeros2 = [10, 20, 30, 40, 50];
let sumaRealizada = sumaNumeros(listaNumeros2)
console.log(sumaRealizada)

function sumaNumeros(listita) {
  suma2=0;
  for (let i = 0; i < listita.length; i++) {
    suma2 += listita[i];
   }
return suma2;
}

//9
let listaPrueba = [10, 20, 30, 40, 50];
let entradaNumeros = busquedaNumero(listaPrueba,numBusqueda)
let numBusqueda = "30";

function busquedaNumero(sample,busqueda) {
  for (let sample = 0; i < sample.length; i++) {
    if (busqueda === sample[i]){
      return busqueda;
    }
  }
 return -1; 
}