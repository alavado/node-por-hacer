const fs = require('fs')

let tareas = []

const guardarDB = () => {
  let data = JSON.stringify(tareas)
  fs.writeFile('./db/data.json', data, err => {
    if (err) {
      throw new Error('No se pudo grabar', err)
    }
  })
}

const cargarDB = () => {
  try {
    tareas = require('../db/data.json')
  } catch (error) {
    tareas = []
  }
}

const crear = descripcion => {
  cargarDB()
  let tarea = {
    descripcion,
    completado: false
  }
  tareas.push(tarea)
  guardarDB()
  return tareas
}

const getListado = (completado = 'true') => {
  cargarDB()
  return completado === 'true' ? tareas : tareas.filter(tarea => tarea.completado)
}

const actualizar = (descripcion, completado = true) => {
  cargarDB()
  const i = tareas.findIndex(tarea =>
    tarea.descripcion === descripcion
  )
  if (i >= 0) {
    tareas[i].completado = completado === 'true'
    guardarDB()
    return true
  }
  return false
}

const borrar = (descripcion) => {
  cargarDB()
  let nuevasTareas = tareas.filter(tarea =>
    tarea.descripcion !== descripcion
  )
  if (nuevasTareas.length < tareas.length) {
    tareas = nuevasTareas
    guardarDB()
    return true
  }
  return false
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}