// datos.js

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

document.querySelector(".btn").addEventListener("click", () => {
    const usuario = {
        nombre: document.querySelector(".profile-info h2").innerText,
        dni: document.querySelector(".dni").innerText,
        sexo: document.getElementById("sexo").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        telefono: document.getElementById("telefono").value,
        celular: document.getElementById("celular").value,
        ruc: document.getElementById("ruc").value,
        brevet: document.getElementById("brevet").value,
        libMilitar: document.getElementById("libMilitar").value,
        vehiculo: document.getElementById("vehiculo").value,
        grupoSanguineo: document.getElementById("grupoSanguineo").value
    };
    
    let index = usuarios.findIndex(u => u.dni === usuario.dni);
    if (index !== -1) {
        usuarios[index] = usuario;
    } else {
        usuarios.push(usuario);
    }
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Datos actualizados correctamente.");
});

function cargarDatos() {
    if (usuarios.length > 0) {
        const usuario = usuarios[0];
        document.querySelector(".profile-info h2").innerText = usuario.nombre;
        document.querySelector(".dni").innerText = usuario.dni;
        document.getElementById("sexo").value = usuario.sexo;
        document.getElementById("fechaNacimiento").value = usuario.fechaNacimiento;
        document.getElementById("telefono").value = usuario.telefono;
        document.getElementById("celular").value = usuario.celular;
        document.getElementById("ruc").value = usuario.ruc;
        document.getElementById("brevet").value = usuario.brevet;
        document.getElementById("libMilitar").value = usuario.libMilitar;
        document.getElementById("vehiculo").value = usuario.vehiculo;
        document.getElementById("grupoSanguineo").value = usuario.grupoSanguineo;
    }
}

cargarDatos();
// Funcionalidad para descargar el horario como PDF
document.getElementById('generarPDF').addEventListener('click', function() {
    window.print(); // Este método abre el cuadro de diálogo para imprimir la página
  });