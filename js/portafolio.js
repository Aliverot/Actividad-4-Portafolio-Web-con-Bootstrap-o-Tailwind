let ManejadorPortafolio = {
    // Almacenamos las referencias a los elementos del DOM
    spanAnio: null,

    // Función principal de inicialización
    iniciar: function() {
        this.spanAnio = document.getElementById("anioActual");
        this.actualizarFooter();
        
        console.log("Portafolio inicializado correctamente.");
    },

    actualizarFooter: function() {
        if (this.spanAnio) {
            let fecha = new Date();
            this.spanAnio.textContent = fecha.getFullYear();
        }
    }
};