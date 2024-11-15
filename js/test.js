var nombreLocalStore = "estudiantes"

function recuperarDatosFormulario(){

    var identificacion = document.getElementById("identificacion")
    var nombre = document.getElementById("nombre")
    var fecha_nacimiento = document.getElementById("fecha_nacimiento")
    var email = document.getElementById("email")
    var telefono = document.getElementById("telefono")
}
function limpiarFormulario(){

    identificacion.value = ''
    nombre.value = ''
    fecha_nacimiento.value = ''
    email.value = ''
    telefono.value = ''
    identificacion.focus()

}
function guardar(){

    recuperarDatosFormulario()

    empleado = new Empleado(cedula.value, nombres.value, apellidos.value, salario.value)

    var empleados = JSON.parse(localStorage.getItem("empleado") || "[]")
    empleados.push(empleado)

    setJSONDeLocalStore(nombreLocalStore, empleados)

    limpiarFormulario()

    alert("Empleado ha sido guardado correctamente")
}
function buscar(){

    recuperarDatosFormulario()

    var empleados = getJSONDeLocalStore(nombreLocalStore)

    for (const empleado of empleados) {

        if (empleado.cedula == cedula.value) {

            nombres.value = empleado.nombres
            apellidos.value = empleado.apellidos
            salario.value = empleado.salario
            
            break
        }

    }

}
