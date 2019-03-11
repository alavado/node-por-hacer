const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea'
}

const completado = {
  alias: 'c',
  default: 'true',
  desc: 'Estado de completitud de la tarea (true/false)'
}

const argv = require('yargs')
  .command('crear', 'Crea una tarea', {
    descripcion,
    completado
  })
  .command('listar', 'Enlista las tareas', {
    completado
  })
  .command('actualizar', 'Actualiza una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra una tarea', {
    descripcion
  })
  .help()
  .argv

module.exports = {
  argv
}