import elementos from "./elementos.js";
import controladorVistas from "./controlador.js";

//cuentas: hecha o por hacer
export function cuentaHecha(event){
    controladorVistas.actualizarVista(0);
    elementos.formIniciar.reset;
}
export function cuentaPorHacer(event){
    controladorVistas.actualizarVista(1);
        elementos.formRegistar.reset();
}
//botones dentro de config: 

//boton de config dentro del user
export function configuracion(event){
    controladorVistas.actualizarVista(2);
    // document.querySelector("body > header > button > ul").className = "ocultarOpciones";
    elementos.tituloCambiarFoto.textContent = controladorVistas.usuarioActual.nombre; //este
    
}

// boton salir de config
export function salir(event){
    controladorVistas.actualizarVista(0);
    // document.querySelector("body > header > button > ul").className = "ocultarOpciones";
}

