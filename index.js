class index{
            
    constructor() {
        //Inicialización de variables y asignación de eventos
        document.querySelector("#btnIniciar").addEventListener("click", this.setButtonStart) 
        document.querySelector("#btnCancelar").addEventListener("click", this.setButtonClose) 
        document.querySelector("#btnGuardar").addEventListener("click", this.setButtonSave) 
        document.querySelector("#btnConsultar").addEventListener("click", this.setButtonConsult)
                          
        //Deshabilitar botones de entrada no necesarios
        const btnCancelar = document.querySelector('#btnCancelar')
        btnCancelar.disabled = true

        const btnGuardar = document.querySelector('#btnGuardar')
        btnGuardar.disabled = true
        
    }
    
    //Acción al presionar botón Iniciar
    setButtonStart(e){   
        loadPage()    

        const btnIniciar = document.querySelector('#btnIniciar')
        btnIniciar.disabled = true

        const btnCancelar = document.querySelector('#btnCancelar')
        btnCancelar.disabled = false

        const btnGuardar = document.querySelector('#btnGuardar')
        btnGuardar.disabled = false

        const btnConsultar = document.querySelector('#btnConsultar')
        btnConsultar.disabled = true
    }

    //Acción al presionar botón Cancelar
    setButtonClose(e){   
        finishPage()

        const btnCancelar = document.querySelector('#btnCancelar')
        btnCancelar.disabled = true

        const btnIniciar = document.querySelector('#btnIniciar')
        btnIniciar.disabled = false

        const btnGuardar = document.querySelector('#btnGuardar')
        btnGuardar.disabled = true

        const btnConsultar = document.querySelector('#btnConsultar')
        btnConsultar.disabled = false

    }

    //Acción al presionar botón Guardar
    setButtonSave(e){   
        saveData()
    }

    //Acción al presionar botón Consultar
    setButtonConsult(e){   
        queryData()
        alert("Botón consultar");
    }
}

//Proceso para cargar página en iFrame
function loadPage(){
    /*var frame = $('#frame');
    var url = 'https://www.gob.mx/curp';
    frame.attr('src',url).show();*/
}

//Proceso para cerrar página en iFrame
function finishPage(){
    document.getElementById("frame").style.display='none';
}

//Proceso para guardar datos resultantes
function saveData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '020ba51c3emsh3c444be262e1be3p12b515jsn29d9b0902e00',
            'X-RapidAPI-Host': 'curp-renapo.p.rapidapi.com'
        }
    };
            
    fetch('https://curp-renapo.p.rapidapi.com/v1/curp/GABE991202HVZRDL00', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


//Proceso para consultar datos guardados
function queryData(){

}

window.onload = () => new index();