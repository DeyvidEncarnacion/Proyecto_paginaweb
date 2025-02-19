let asistencias = JSON.parse(localStorage.getItem("asistencias")) || {};
let semestreActual = "20231";
const asistenciaBody = document.querySelector(".attendance-table table");
const cambiarSemestreSelect = document.getElementById("semester");
const marcarAsistenciaBtn = document.querySelector(".btn-green");
let asistiendo = false;

function guardarAsistencias() {
  localStorage.setItem("asistencias", JSON.stringify(asistencias));
}

function cargarAsistencias(semestre) {
  asistenciaBody.innerHTML = `<tr>
    <th>Día</th>
    <th>Curso</th>
    <th>Horario</th>
    <th>Marcación</th>
    <th>Est</th>
  </tr>`;
  if (asistencias[semestre]) {
    asistencias[semestre].forEach(asistencia => {
      const row = `<tr>
        <td>${asistencia.dia}</td>
        <td>${asistencia.curso}</td>
        <td>${asistencia.horario}</td>
        <td>${asistencia.marcacion}</td>
        <td>${asistencia.estado}</td>
      </tr>`;
      asistenciaBody.innerHTML += row;
    });
  }
}

cambiarSemestreSelect.addEventListener("change", (event) => {
  semestreActual = event.target.value;
  cargarAsistencias(semestreActual);
});

marcarAsistenciaBtn.addEventListener("click", () => {
  const now = new Date();
  const hora = now.getHours().toString().padStart(2, "0");
  const minutos = now.getMinutes().toString().padStart(2, "0");
  
  if (!asistencias[semestreActual]) {
    asistencias[semestreActual] = [];
  }

  if (!asistiendo) {
    const nuevaAsistencia = {
      dia: "Hoy",
      curso: "MS1501C (Teoría)",
      horario: "--:-- - --:--",
      marcacion: `${hora}:${minutos} - --:--`,
      estado: "P"
    };
    asistencias[semestreActual].push(nuevaAsistencia);
  } else {
    let ultimaAsistencia = asistencias[semestreActual].slice(-1)[0];
    if (ultimaAsistencia) {
      ultimaAsistencia.marcacion = ultimaAsistencia.marcacion.replace("--:--", `${hora}:${minutos}`);
    }
  }

  asistiendo = !asistiendo;
  guardarAsistencias();
  cargarAsistencias(semestreActual);
});

// Cargar asistencias al inicio
cargarAsistencias(semestreActual);
