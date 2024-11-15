class Programas {

    constructor(codigo, nombre_programa, duracion, modalidad, fecha_inicio) {

        this.codigo = codigo
        this.nombre_programa = nombre_programa
        this.duracion = duracion
        this.modalidad = modalidad
        this.fecha_inicio = fecha_inicio
    }

    getCodigo() {

        return this.codigo;
    }

    setCodigo(codigo) {
        
        this.codigo = codigo

    }
}
