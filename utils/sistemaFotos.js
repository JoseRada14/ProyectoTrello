import elementos from "./elementos.js";
import controladorVistas from "./controlador.js";

//Sistema de fotos:

export function FotoBoton(event){
    event.preventDefault();
    const fotoDePerfil = prompt("Ingresa el url de la nueva foto");
    if(fotoDePerfil == null){
        return
    }if(fotoDePerfil.replaceAll("","") == ""){
        alert("url no valido");
        return;
    }
    elementos.fotoDeTag.style.backgroundImage = `url(${fotoDePerfil})`;
}

export function guadarFoto(){
      // extraer backgrund img
    let urlFoto =  elementos.fotoDeTag.style.backgroundImage;
    console.log(urlFoto);
    let extraerUrl = urlFoto.replace(`url("`,``).replace(`")`,``);
    console.log(extraerUrl);
    //Buscar en el localstorge la base de datos de ussuarios
    const baseUsuarioExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];
    // si no existe error
    if(!baseUsuarioExiste){
        alert("Error al acceder a la base de datos")
        return;
    }
    //Fusionar arreglo vacio con la base de datos
    baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuarioExiste));
    //buscar indice o posicion en el arreglo del usuario
    const indicarUsuarioExistente = baseUsuarios.findIndex(usuario => usuario.correo == controladorVistas.usuarioActual.correo);
    //si el indice es -1 (es decir no encontrado), suelta error
    if(indicarUsuarioExistente == -1){
        alert("Error al cambiar la foto de perfil");
        return;
    }
    baseUsuarios[indicarUsuarioExistente].foto = extraerUrl;
    controladorVistas.usuarioActual.foto = extraerUrl;
    elementos.headerFoto.style.backgroundImage = `url(${extraerUrl})`;
    localStorage.setItem("Usuarios",JSON.stringify(baseUsuarios));
    controladorVistas.actualizarVista(3);
}
//boton regresar
export function cancelar(event){
    controladorVistas.actualizarVista(3);
    elementos.headerFoto.style.backgroundImage = `url(${controladorVistas.usuarioActual.foto})`;

}
// function cambiarTituloFoto(){
//     if(actualizarVista(3)){
       
//     }
//     };
//     cambiarTituloFoto();
    