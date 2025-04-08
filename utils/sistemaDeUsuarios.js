import elementos from "./elementos.js";
import controladorVistas from "./controlador.js";

export function logerUsuario(event){
    event.preventDefault();
        //consultar si existe la base de datos Usuarios
        const baseUsuarioExiste = localStorage.getItem("Usuarios");
        let baseUsuarios =[];
        // si no existe, arrojar un error reflejando que no esta encontrado
        if(!baseUsuarioExiste){
            elementos.textoIniciarError.textContent ="Base de datos no Encontrada";
            return;
        }
        //si existe, fucionarlo con el arreglo vacio
        baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuarioExiste));
        //verificar si el usuario existe
        const usuarioExistente = baseUsuarios.find(usuario => usuario.correo == elementos.mail.value);
        if(!usuarioExistente){
            elementos.textoIniciarError.textContent = "Usuario no encontrado";
            return;
        }
        if(usuarioExistente.clave != elementos.password.value){
            elementos.textoIniciarError.textContent = "La contraseña digitada es incorrecta";
            return;
        }
        elementos.textoIniciarError.textContent = "" ;
        alert(`¡Bienvendia ${usuarioExistente.nombre}!`);
        controladorVistas.usuarioActual = usuarioExistente;
        elementos.fotoDeTag.style.backgroundImage = `url(${controladorVistas.usuarioActual.foto})`;
        elementos.tituloCambiarFoto.textContent = `${controladorVistas.usuarioActual.nombre}`;
        elementos.nombrePersonaHeader.textContent = `${usuarioExistente.nombre}`

        setTimeout(() => {
            elementos.formIniciar.reset();
        }, 500);
        controladorVistas.actualizarVista(2);

}
function crearId(n){
    let ID = "";
    for(let i = 0; i < n; i++) ID += parseInt(Math.random()*36).toString(36) //version resumida de todo lo de abajo

    // let numAleatorio = Math.random();
    // console.log(numAleatorio);

    // let numCifras = numAleatorio *36;
    // console.log(numCifras);

    // let numRedondeado = parseInt(numCifras)
    // console.log(numRedondeado);

    // let numConvertido = numRedondeado.toString(36);
    // console.log(numConvertido);

    // ID + numConvertido;
    // console.log(ID);

    //     ID += i; estuiar extends   
    return ID;
}
export function registrarUsuario(event){
    event.preventDefault();
    // creamos un id unico para cada usuario
    let idNuevo =  crearId(8);

    //verifiamos si el arreglo usuarios existe
    const baseUsuarioExiste = localStorage.getItem("Usuarios");
    let baseUsuarios = [];

    //si el arreglo exixte quiere decir que probablemente tengammos un usuario
    if(baseUsuarioExiste){
        baseUsuarios = baseUsuarios.concat(JSON.parse(baseUsuarioExiste)); 
        //buscamos en dicho arreglo si existe un ususario regisyrado con el correo que pusimos en el campo de registro
        const usuarioExistente = baseUsuarios.find(usuario => usuario.correo == elementos.correo.value);
    
        //SI EXISTEDAR ERROR
        if(usuarioExistente){
            elementos.textoRegistrarError.textContent = "ya hay un usuario registrado con este correo";
            return;
        }
    }
    //VERIFICAMOS QUE LAS CONTRASEÑAS SEAN LAS MISMAS
    if(elementos.constrasena.value != elementos.constrasenaConfirmacion.value ){
        elementos.textoRegistrarError.textContent = "Las contraseñas deben ser las mismas";
        return;
    }
    // si no hay ningun error limpiar la etiqueta de texto error
    elementos.textoRegistrarError.textContent = "";
    //crear un objeto usuario con ls datos ingresados
    const usuarioGuardar= {
        nombre: elementos.nombre.value,
        apellido: elementos.apellido.value,
        edad: elementos.edad.value,
        correo:elementos.correo.value,
        clave: elementos.constrasena.value,
        foto: "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png",
        id: idNuevo,

    };
    //guardar el objeto en este arreglo

    baseUsuarios.push(usuarioGuardar);
    //crear de 0 o actualizar la base de datos del local storage
    localStorage.setItem("Usuarios", JSON.stringify(baseUsuarios));

    //sistema de vista

    alert("¡usuario rgistrado con exito!");
    setTimeout( ()=>{
        elementos.formRegistar.reset();
    },500);
    elementos.mail.value = usuarioGuardar.correo;
    controladorVistas.actualizarVista(0);
}
