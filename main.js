// let elemento = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");

// console.log(parrafo.innerHTML)
// console.log(div.innerHTML);

// getElementbyclassname INNERHTML SIRVE PARA OBTENER EL CONTENIDO DE UN ELEMENTO!//

// let paises = document.getElementsByClassName("paises");

// console.log(paises[0].innerHTML);

// getElementbytagname //

// let elemento = document.getElementsByTagName("div")//

// console.log(elemento[0].innerHTML)
// console.log(elemento[1].innerHTML)
// console.log(elemento[2].innerHTML)
// console.log(elemento[3].innerHTML)

// let paises = document.getElementsByClassName("paises");//

// for (const pais of paises) {
//   console.log(pais.innerHTML);
// }

let titulo = document.getElementById("parrafo1");

// console.log(titulo.innerText);

// console.log(titulo.innerText);

const nombreUsuario = prompt("bienvenido ingrese su nombre de usuario");

titulo.innerText = "Hola " + nombreUsuario + "!";
