import elementos from "./utils/elementos.js";
import controladorVistas from "./utils/controlador.js";
import { logerUsuario, registrarUsuario } from "./utils/sistemaDeUsuarios.js";
import {  configuracion, cuentaHecha, cuentaPorHacer, salir } from "./utils/sistemaVistas.js";
import { FotoBoton, guadarFoto,cancelar } from "./utils/sistemaFotos.js";
import {crearNota} from "./utils/sistemaNotas.js";
// import {cambiarEstadoNota, crearNota, crearNota,filtar } from "./utils/sistemaNotas.js";


controladorVistas.actualizarVista(2);

elementos.formRegistar.addEventListener("submit",registrarUsuario)


//Funcionalidad correcta de iniciar sesion
elementos.formIniciar.addEventListener("submit",logerUsuario)

// etiqueta a con la que indicas que ya tienes una cuenta
elementos.cuentaHecha.addEventListener("click", cuentaHecha);

// etiqueta a con la que indicas que aun no tienes una cuenta
elementos.cuentaPorHacer.addEventListener("click", cuentaPorHacer);

//boton de config dentro del user
elementos.Config.addEventListener("click",configuracion);

// boton salir de config
elementos.salir.addEventListener("click",salir);

//boton regresar una vez no estas conforme con la foto
cancelarFoto.addEventListener("click",cancelar);
//boton para cambiar la imagn del usuario
elementos.FotoBoton.addEventListener("click",FotoBoton)
//boton de guardar foto
elementos.guardarFoto.addEventListener("click",guadarFoto)
//boton de subir nota
elementos.notasIngresar.addEventListener("submit",crearNota)

elementos.notasCont.addEventListener("click",)








