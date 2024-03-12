
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
      } else {
        console.log('Índice de tarea inválido.');
      }
    }
  };
  
  
  persona.agregarTarea('Barrer');
  persona.agregarTarea('Ordenar monedas');
  persona.agregarTarea('Revisar y ordenar billetes', false);
  persona.agregarTarea('Depurar las computadoras');
  persona.agregarTarea('Reorganizar recibos de cobro');
  
  
  persona.mostrarTareas();
  
  
  persona.completarTarea(2);
  
  
  persona.mostrarTareas();