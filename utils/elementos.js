const elementos = {
    // Div principal
    mainDiv: document.getElementById("mainDiv"),
    
    //REGISTAR USUARIO
    formRegistar: document.getElementById("formRegistar"),
    nombre: document.getElementById("name1"),
    apellido: document.getElementById("lastName1"),
    edad: document.getElementById("age1"),
    correo: document.getElementById("mail1"),
    constrasena: document.getElementById("password1"),
    constrasenaConfirmacion: document.getElementById("passwordconfirm1"),
    botonRegistrarse: document.getElementById("RegistrarseBoton"),
    textoRegistrarError: document.getElementById("RegistarError"),
    cuentaHecha: document.getElementById("cuentaHecha"),

    //INICIAR SESION
    formIniciar : document.getElementById("formIniciar"),
    mail: document.getElementById("mail"),
    password: document.getElementById("password"),
    botonIniciarSesion: document.getElementById("IniciarSesionBoton"),
    textoIniciarError: document.getElementById("iniciarError"),
    cuentaPorHacer: document.getElementById("cuentaPorHacer"),
    
    // PERFIL INGRESAD0 
    header: document.getElementById("header"),
    nombrePersonaHeader: document.getElementById("nombrePersonaHeader"),
    headerFoto: document.getElementById("perfilFoto1"),
    Config: document.getElementById("Config"),
    salir: document.getElementById("salir"),

    
    // CAMBIAR FOTO
    tituloCambiarFoto: document.getElementById("tituloCambiarFoto"),
    formFoto: document.getElementById("FormFotoDePerfil"),
    fotoDeTag: document.getElementById("perfilFoto"),
    FotoBoton: document.getElementById("fotoBoton"),
    guardarFoto: document.getElementById("guardarFoto"),
    cancelarFoto: document.getElementById("cancelarFoto"),
    
    //SEGUNDO DIV
    secondDiv: document.getElementById("secondDiv"),
    notasIngresar: document.getElementById("notas"),
    notasCont: document.getElementById("notasCont"),
    tituloNota: document.getElementById("tituloNota"),
    nota: document.getElementById("nota"),
    
};





export default elementos;