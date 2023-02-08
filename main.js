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

// let titulo = document.getElementById("parrafo1");

// // console.log(titulo.innerText);

// // console.log(titulo.innerText);

// const nombreUsuario = prompt("bienvenido ingrese su nombre de usuario");

// titulo.innerText = "Hola " + nombreUsuario + "!";

//// creatElement /////

// let parrafo = document.createElement("p");

// parrafo.innerHTML = "<h2>Hola Coder!!</h2>";

// document.body.append(parrafo);

///// remove //////

// let parrafo = document.getElementById("parrafo1");
// parrafo.remove();

//// ejemplo aplicado /////

// let contenedor = document.getElementById("personas");

// let personas = ["Carlos", "Ana", "Jorge", "Pablo"];

// for (const persona of personas) {
//   let li = document.createElement("li");

//   li.innerHTML = persona;

//   contenedor.appendChild(li);
// }

////    CREANDO ELEMENTOS DESDE OBJETOS ////

const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideos", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 75 },
];

for (const producto of productos) {
  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<div class="container">
                            <h3>ID: ${producto.id}</h3>
                            <p>Producto: ${producto.nombre}</p>
                            <b>$${producto.precio}</b>
                            </div>
                            `;

  document.body.appendChild(contenedor);
}
