// Elementos del DOM
const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('openSidebarButton');
const closeSidebarButton = document.getElementById('closeSidebarButton');

// Abrir la barra lateral
openSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('open');
});

// Cerrar la barra lateral
closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Escuchar clics en los enlaces de la barra lateral
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const page = this.getAttribute('data-page');
    loadPage(page);
    sidebar.classList.remove('open'); // Cerrar barra lateral después de seleccionar
  });
});

// Función para cargar contenido dinámico
function loadPage(page) {
  const mainContent = document.getElementById('mainContent');
  switch (page) {
    case 'asistencias':
      mainContent.innerHTML = `
        <iframe src="asistencia.html" width="100%" height="900px"></iframe>
      `;
      break;
    case 'informacion':
      mainContent.innerHTML = `
        <iframe src="datos.html" width="100%" height="900px"></iframe>
      `;
      break;
    case 'horario':
      mainContent.innerHTML = `
        <iframe src="horario.html" width="100%" height="900px"></iframe>
      `;
      break;
    default:
      mainContent.innerHTML = `
        <h1>Error 404</h1>
        <p>Página no encontrada.</p>
      `;
  }
}
