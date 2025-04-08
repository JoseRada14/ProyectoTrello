import elementos from "./elementos.js";
import controladorVistas from "./controlador.js";


function crearId(n){
    let ID = "";
    for(let i = 0; i < n; i++) ID += parseInt(Math.random()*36).toString(36) //version resumida de todo lo de abajo  
    return ID;}
    
export function crearNota(event) {
    event.preventDefault();
    let idUnico =  crearId(8);
    let titulo = elementos.tituloNota.value.trim();
    let texto = elementos.nota.value.trim();

    if (titulo === "") {
        alert("Título no válido");
        return;
    }
    if (texto === "") {
        alert("Texto no válido");
        return;
    }

    let baseNotas = JSON.parse(localStorage.getItem("notasIngresadas")) || [];

    let notasHechas = {
        titulo: titulo,
        notaIngresada: texto, // Aquí está el nombre correcto
        comentarios: [],
        id: idUnico,
    };

    baseNotas.push(notasHechas);
    localStorage.setItem("notasIngresadas", JSON.stringify(baseNotas));

    alert("Nota guardada correctamente");
    mostrarComentarios(); //  Llamar para actualizar la pantalla
}

export function mostrarComentarios() { // Corregí el nombre de la función
    elementos.notasCont.innerHTML = ""; // Limpiar antes de añadir

    let baseNotas = JSON.parse(localStorage.getItem("notasIngresadas")) || [];

    baseNotas.forEach((nota) => {
        elementos.notasCont.innerHTML += `
            <div id="notaSubida" class="showNote">
                <div class="editars">
                <img src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="">
                            <ul>
                                <li class="cambiar">editar</li>
                                <li class="borrar">borrar</li>
                            </ul>
                        </div>
                <p class="titulo">${nota.titulo}</p>
                <p class="notas">${nota.notaIngresada}</p> <!-- nombre corregido -->
                <select class="estado">
                    <option value="1">Pendiente</option>
                    <option value="2">Completo</option>
                    <option value="3">Incompleto</option>
                </select>
            </div>
        `;
    });
}


// export function cambiarNota(event){
// const etiqueta = event.target;
// if (etiqueta.tagName != "li") return;

// //obtener notas
// const nota = etiqueta.closest("memo")
// const idNota = nota.id.replace("nota","");

// const baseNotasExiste = localStorage.getItem("Notas");
// let baseNotas = [];

// if(baseNotasExiste){
//     alert("Error, la base de datos no existe");
// }
// baseNotas = baseNotas.concat(JSON.parse(baseNotasExiste));

// const notaExistente = baseNotas.findIndex(n => n.id = idNota);

// if(indicoNotaExistente == -1){
//     alert("error, la nota existente");
//     return;
// }

// if(etiqueta.className == "cambiar"){
//     modificarNota();
// }
// if(etiqueta.className == "borrar"){
//     borrarNota();
// }
// };

// function borrarNota(nota,idNota,indicoNotaExistente,baseNotas){

// };
// function modificarNota(){

// };

//  Cargar las notas al abrir la página
document.addEventListener("DOMContentLoaded", mostrarComentarios);