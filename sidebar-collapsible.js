// Mostrar diferentes secciones del contenido
function showContent(section) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(sec) {
        sec.classList.remove('active');
    });

    document.getElementById(section).classList.add('active');
}

// Mostrar detalles de una clase en un modal
function showClassDetails(className) {
    var modal = document.getElementById('classDetails');
    var classInfo = document.getElementById('classInfo');
    classInfo.innerHTML = "Información de la clase: " + className;
    modal.style.display = "flex";
}

// Cerrar el modal
function closeModal() {
    var modal = document.getElementById('classDetails');
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('classDetails');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
