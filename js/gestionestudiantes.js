var nombreLocalStore = "estudiantes"




function recuperarDatosFormulario() {

    var identificacion = document.getElementById("identificacion")
    var nombre = document.getElementById("nombre")
    var fecha_nacimiento = document.getElementById("fecha_nacimiento")
    var email = document.getElementById("email")
    var telefono = document.getElementById("telefono")
}

function limpiarFormulario() {

    identificacion.value = ''
    nombre.value = ''
    fecha_nacimiento.value = ''
    email.value = ''
    telefono.value = ''
    identificacion.focus()

}

function guardar() {

    recuperarDatosFormulario()

    estudiante = new Estudiante(identificacion.value, nombre.value,
        fecha_nacimiento.value, email.value, telefono.value)

    var estudiantes = getJSONDeLocalStore(nombreLocalStore)

    estudiantes.push(estudiante)

    setJSONDeLocalStore(nombreLocalStore, estudiantes)

    limpiarFormulario()

    alert("Empleados ha sido guardado correctamente")

}

function consultar() {

    recuperarDatosFormulario()

    this.estudiantes = getJSONDeLocalStore(nombreLocalStore)

    var indiceEstudiantes = buscarIndiceEstudiantes()

    if (indiceEstudiantes > -1) {

        nombre.value = estudiantes[indiceEstudiantes].nombre
        fecha_nacimiento.value = estudiantes[indiceEstudiantes].fecha_nacimiento
        email.value = estudiantes[indiceEstudiantes].email
        telefono.value = estudiantes[indiceEstudiantes].telefono

    }


}

function actualizar() {

    recuperarDatosFormulario()

    this.estudiantes = getJSONDeLocalStore(nombreLocalStore)

    var indiceEstudiantes = buscarIndiceEstudiantes()

    if (indiceEstudiantes > -1) {

        estudiantes[indiceEstudiantes].nombre = nombre.value
        estudiantes[indiceEstudiantes].fecha_nacimiento = fecha_nacimiento.value
        estudiantes[indiceEstudiantes].email = email.value
        estudiantes[indiceEstudiantes].telefono = telefono.value

    }


    setJSONDeLocalStore(nombreLocalStore,estudiantes)

    limpiarFormulario()

    alert("Empleados ha sido actualizado correctamente")


}

function buscarIndiceEstudiantes() {

    var resultado = -1

    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].identificacion == identificacion.value) {

            resultado = i
        }

    }

    return resultado

}

function eliminar() {

    var estudiantes = getJSONDeLocalStore(nombreLocalStore)

    var indiceEstudiantes = buscarIndiceEstudiantes()

    if (indiceEstudiantes > -1) {

        alert("Estudiante" + estudiantes[indiceEstudiantes].identificacion + " eliminado")

        estudiantes.splice(indiceEstudiantes, 1)

        setJSONDeLocalStore(nombreLocalStore, estudiantes)


    }

    limpiarFormulario()


}
