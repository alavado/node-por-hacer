const argv = require('./config/yargs').argv
const tareas = require('./por-hacer/por-hacer')
const colors = require('colors')

let comando = argv._[0]
switch(comando) {
  case 'crear':
    let tarea = tareas.crear(argv.descripcion)
    break
  case 'listar':
    let listado = tareas.getListado(argv.completado)
    for (const tarea of listado) {
      const {descripcion, completado} = tarea
      console.log(`${tarea.descripcion}, ${tarea.completado ?
        colors.green('completado') : colors.red('pendiente')}`)
    }
    break
  case 'actualizar':
    if (tareas.actualizar(argv.descripcion, argv.completado)) {
      console.log(colors.green('Tarea actualizada'));
    }
    else {
      console.log(colors.red('Tarea no encontrada'));
    }
    break
  case 'borrar':
    if (tareas.borrar(argv.descripcion)) {
      console.log(colors.green('Tarea borrada'));
    }
    else {
      console.log(colors.red('Tarea no encontrada'));
    }
  break
  default:
    console.log('comando no es reconocido');
}