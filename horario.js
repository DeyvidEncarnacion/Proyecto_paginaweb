// Obtener todas las celdas con clase 'clase'
const clases = document.querySelectorAll('.clase');

// Obtener el modal
const modal = document.getElementById("detallesModal");

// Obtener el elemento <span> para cerrar el modal
const span = document.getElementsByClassName("close")[0];

// Función para mostrar los detalles de la clase en el modal
clases.forEach(clase => {
  clase.addEventListener('click', function() {
    const detalles = this.getAttribute('data-detalles'); // Obtener los detalles desde el atributo
    const detallesTexto = document.getElementById('detallesTexto');
    
    // Mostrar los detalles en el modal
    detallesTexto.textContent = detalles;
    
    // Mostrar el modal
    modal.style.display = "block";
  });
});

// Función para cerrar el modal
span.addEventListener('click', function() {
  modal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del modal
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Funcionalidad para descargar el horario como PDF
document.getElementById('descargarPDF').addEventListener('click', function() {
  window.print(); // Este método abre el cuadro de diálogo para imprimir la página
});
