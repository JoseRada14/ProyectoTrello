import elementos from "./elementos.js";
const controladorVistas ={
    usuarioActual:{},
    actualizarVista(cualVista){

        this.animar("hideCard")

        setTimeout(
            () => {
            //vista 0 es login
            elementos.formIniciar.style.display = cualVista == 0? "flex" : "none";
            // vista 1 es registro
            elementos.formRegistar.style.display = cualVista == 1? "flex" : "none";
            // vista 2 es foto
            elementos.formFoto.style.display = cualVista == 2? "flex" : "none";
            //vista 3 es deashbord
            elementos.header.style.top = cualVista == 3? "0" : "-160px";
            elementos.secondDiv.style.display = cualVista == 3? "flex" : "none";

            this.animar("showCard")

            // document.querySelector("body > header > button > ul").className = "";
        }, 500);
        
        
    },
    animar(clase){
        elementos.mainDiv.className = `mainDiv ${clase}`;
        elementos.notasCont.className = `notasCont ${clase}`;
        elementos.notasIngresar.className = `secondDiv ${clase}`;
    }
};

export default controladorVistas;