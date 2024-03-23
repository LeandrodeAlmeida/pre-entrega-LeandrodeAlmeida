class Tarea {
  constructor(descripcion, completada) {
    this.descripcion = descripcion;
    this.completada = completada;
  }
}

const persona = {
  nombre: 'Leandro',
  tareas: [],

  agregarTarea: function(descripcion, completada = false) {
    const nuevaTarea = new Tarea(descripcion, completada);
    this.tareas.push(nuevaTarea);
  },

  mostrarTareas: function() {
    console.log(`Tareas de ${this.nombre}:`);
    this.tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.descripcion} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
  },

  completarTarea: function(indice) {
    if (indice >= 0 && indice < this.tareas.length) {
      this.tareas[indice].completada = true;
      console.log(`¡La tarea "${this.tareas[indice].descripcion}" ha sido completada por ${this.nombre}!`);
      console.log(`La tarea "${this.tareas[indice].descripcion}" ha sido completada.`);
    } else {
      console.log('Índice de tarea inválido.');
    }
  },
  
  buscarTarea: function(descripcion) {
    const tareaEncontrada = this.tareas.find(tarea => tarea.descripcion.toLowerCase() === descripcion.toLowerCase());
    if (tareaEncontrada) {
      console.log(`Tarea encontrada: ${tareaEncontrada.descripcion}`);
    } else {
      console.log(`Tarea "${descripcion}" no encontrada.`);
    }
  },
  
  filtrarTareasCompletadas: function() {
    const tareasCompletadas = this.tareas.filter(tarea => tarea.completada);
    console.log('Tareas completadas:');
    tareasCompletadas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.descripcion}`);
    });
  },

  contarTareas: function() {
    return this.tareas.length;
  },

  calcularPorcentajeCompletadas: function() {
    const tareasCompletadas = this.tareas.filter(tarea => tarea.completada).length;
    return (tareasCompletadas / this.contarTareas()) * 100;
  },

  calcularPorcentajePendientes: function() {
    return 100 - this.calcularPorcentajeCompletadas();
  }
};


persona.agregarTarea('Barrer');
persona.agregarTarea('Ordenar monedas');
persona.agregarTarea('Revisar y ordenar billetes', false);
persona.agregarTarea('Depurar las computadoras');
persona.agregarTarea('Reorganizar recibos de cobro');

function agregarTareasDesdePrompt(cantidadTareas) {
  for (let i = 0; i < cantidadTareas; i++) {
    const descripcion = prompt(`Ingrese la descripción de la tarea ${i + 1}:`);
    persona.agregarTarea(descripcion);
  }
}

const cantidadTareas = parseInt(prompt('¿Cuántas tareas desea agregar?'));
if (!isNaN(cantidadTareas) && cantidadTareas > 0) {
  agregarTareasDesdePrompt(cantidadTareas);
}

persona.mostrarTareas();

console.log(`Número total de tareas: ${persona.contarTareas()}`);
console.log(`Porcentaje de tareas completadas: ${persona.calcularPorcentajeCompletadas()}%`);
console.log(`Porcentaje de tareas pendientes: ${persona.calcularPorcentajePendientes()}%`);
