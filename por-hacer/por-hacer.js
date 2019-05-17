const fs = require('fs'),
        colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile( 'db/data.json', data, ( err ) => {

        if ( err ) throw new Error('No se pudo guardar', error);
    });
}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');
    } catch ( err ) {

        listadoPorHacer = [];
    }
}

const crear = ( descripcion ) => {
    
    cargarDB();

    const porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

const listar = () => {
    
    cargarDB();

    for ( const tarea of listadoPorHacer ) {
        console.log('=======Por Hacer======='.green);
        console.log(tarea.descripcion);
        console.log('Completado:', tarea.completado);
        console.log('======================='.green);
    }
}

const actualizar = ( descripcion, completado = true ) => {

    cargarDB();

    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if ( index >= 0 ) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
    } else {

        console.log('Esa tarea no existe actualmente :(');
    }

}

const borrar = ( descripcion ) => {
    
    cargarDB();

    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if ( index >= 0 ) {

        listadoPorHacer.splice( index, 1 );
        guardarDB();
    } else {

        console.log('Esa tarea no existe actualmente :(');
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}