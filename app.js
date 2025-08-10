// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de variables

const ListaAmigo = [];

//Funcion Limpiar campo 
function limpiarCampo(){
    let campoVacio= document.getElementById("amigo").value = "";
    return campoVacio
}

//Función mostrar nombres amigos

function mostrarNombres(){
    let texto = "";
    for (let nombre of ListaAmigo){
        texto += `<ul>${nombre}</ul>`
    }
    document.getElementById("listaAmigos").innerHTML = texto;
}

//Funcion agregar amigos
function agregarAmigo(){

    //Declarar variable para almacenar el dato del input
    let nombreAmigo = document.getElementById("amigo").value;

    //Condicionar los datos de entrada para el arreglo
    if (nombreAmigo != ""){
        let nombreAmigoLista = ListaAmigo.push(nombreAmigo)
        console.log(nombreAmigoLista)
        limpiarCampo();
        mostrarNombres();
    }
    else{
        alert("Por favor, inserte un nombre.")
    }
}   

//Función para escoger aleatoriamente
function sortearAmigo(){
    if (ListaAmigo != []){

        let indiceAleatorio = Math.floor(Math.random()*(ListaAmigo.length-1))
        let AmigoAleatorio = ListaAmigo[indiceAleatorio]
        document.getElementById("resultado").innerHTML = `Felicidades, el amigo escogido fue: ${AmigoAleatorio}`

    }
}