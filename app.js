const { argv } = require('./config/yargs'),
        porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch ( comando ) {

    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
    break;
    
    case 'listar':
        porHacer.listar();
    break;
    
    case 'actualizar':
        porHacer.actualizar( argv.descripcion, argv.completado );
    break;
    
    case 'borrar':
        porHacer.borrar( argv.d );
    break;

    default:
        console.log('Comando no encontrado :(')
    break;

}