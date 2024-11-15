var nombreLocalStore = "programas"




function recuperarDatosFormulario() {

    var codigo = document.getElementById("codigo")
    var nombre_programa = document.getElementById("nombre_programa")
    var duracion = document.getElementById("duracion")
    var modalidad = document.getElementById("modalidad")
    var fecha_inicio = document.getElementById("fecha_inicio")
}

function limpiarFormulario() {

    codigo.value = ''
    nombre_programa.value = ''
    duracion.value = ''
    modalidad.value = ''
    fecha_inicio.value = ''
    codigo.focus()

}

function guardar() {

    recuperarDatosFormulario()

    programa = new Programas(codigo.value, nombre_programa.value, duracion.value, modalidad.value, fecha_inicio.value)

    var programas = getJSONDeLocalStore(nombreLocalStore)

    programas.push(programa)

    setJSONDeLocalStore(nombreLocalStore, programas)

    limpiarFormulario()

    alert("Programa ha sido guardado correctamente")

}

function consultar() {

    recuperarDatosFormulario()

    this.programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceProgramas = buscarIndiceProgramas()

    if (indiceProgramas > -1) {

        codigo.value = programas[indiceProgramas].codigo
        nombre_programa.value = programas[indiceProgramas].nombre_programa
        duracion.value = programas[indiceProgramas].duracion
        modalidad.value = programas[indiceProgramas].modalidad
        fecha_inicio.value = programas[indiceProgramas].fecha_inicio


    }


}

function actualizar() {

    recuperarDatosFormulario()

    this.programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceProgramas = buscarIndiceProgramas()

    if (indiceProgramas > -1) {

        programas[indiceProgramas].codigo = codigo.value
        programas[indiceProgramas].nombre_programa = nombre_programa.value
        programas[indiceProgramas].duracion = duracion.value
        programas[indiceProgramas].modalidad = modalidad.value
        programas[indiceProgramas].fecha_inicio = fecha_inicio.value

    }


    setJSONDeLocalStore(nombreLocalStore, programas)

    limpiarFormulario()

    alert("Los programas han sido actualizado correctamente")


}

function buscarIndiceProgramas() {

    var resultado = -1

    for (let i = 0; i < programas.length; i++) {

        if (programas[i].codigo == codigo.value) {

            resultado = i
        }

    }

    return resultado

}

function eliminar() {

    var programas = getJSONDeLocalStore(nombreLocalStore)

    var indiceProgramas = buscarIndiceProgramas()

    if (indiceProgramas > -1) {

        alert("Programa " + programas[indiceProgramas].codigo + " eliminado")

        programas.splice(indiceProgramas, 1)

        setJSONDeLocalStore(nombreLocalStore, programas)


    }

    limpiarFormulario()


}
