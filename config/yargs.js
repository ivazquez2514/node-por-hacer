const opts = {
    descripcion: {
        alias: 'd',
        require: true,
        demand: true
    },
}

const { argv } = require('yargs')
                    .command( 'Borrar', 'Borra una tarea especifica', opts )
                    .command( 'listar', 'Muestra todas las tareas y su estado', {} )
                    .command( 'crear', 'Crea una nueva tarea', opts )
                    .command( 'actualizar', 'Actualiza el estatus de la tarea', {
                        ...opts,
                        completado: {
                            alias: 'c',
                            default: true
                        }
                    } )
                    .help();

module.exports = {
    argv
}