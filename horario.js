const horarios = {
  "2024-1": [
    { hora: "07:30", lunes: "MS1501C (Teoría)", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "08:30", lunes: "MS1501C (Práctica)", martes: "", miercoles: "", jueves: "", viernes: "MS1505C (Teoría)", sabado: "", domingo: "" },
    { hora: "10:00", lunes: "", martes: "MS1501E (Teoría)", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "14:00", lunes: "MS1501(Práctica)", martes: "MS1501E (Práctica)", miercoles: "", jueves: "MS1503B(Teoría)", viernes: "", sabado: "", domingo: "" },
  ],
  "2024-2": [
    { hora: "07:30", lunes: "", martes: "BI101F (Teoría)", miercoles: "", jueves: "BI106D (Teoría)", viernes: "", sabado: "", domingo: "" },
    { hora: "08:30", lunes: "BI104A (Teoría)", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "10:00", lunes: "", martes: "BI101F (Práctica)", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "14:00", lunes: "BI104A (Práctica)", martes: "BI106D (Teoría)", miercoles: "", jueves: "BI106D(Práctica)", viernes: "", sabado: "", domingo: "" },
  ],
  "2025-1": [
    { hora: "07:30", lunes: "CS2001 (Teoría)", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "08:30", lunes: "CS2001 (Práctica)", martes: "", miercoles: "", jueves: "", viernes: "MA2102 (Teoría)", sabado: "", domingo: "" },
    { hora: "10:00", lunes: "", martes: "FIS1003 (Teoría)", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "14:00", lunes: "CS2001(Práctica)", martes: "FIS1003 (Práctica)", miercoles: "", jueves: "MS1503B(Teoría)", viernes: "", sabado: "", domingo: "" },
  ]
};

let semestreActual = "2024-1";
const horarioBody = document.getElementById("horarioBody");
const cambiarSemestreSelect = document.createElement("select");
cambiarSemestreSelect.id = "cambiarSemestre";

Object.keys(horarios).forEach(semestre => {
  const option = document.createElement("option");
  option.value = semestre;
  option.textContent = semestre;
  cambiarSemestreSelect.appendChild(option);
});

document.querySelector(".container").insertBefore(cambiarSemestreSelect, document.querySelector("table"));

function cargarHorario(semestre) {
  horarioBody.innerHTML = "";
  horarios[semestre].forEach(clase => {
    const row = `<tr>
      <td>${clase.hora}</td>
      <td>${clase.lunes}</td>
      <td>${clase.martes}</td>
      <td>${clase.miercoles}</td>
      <td>${clase.jueves}</td>
      <td>${clase.viernes}</td>
      <td>${clase.sabado}</td>
      <td>${clase.domingo}</td>
    </tr>`;
    horarioBody.innerHTML += row;
  });
}

cambiarSemestreSelect.addEventListener("change", (event) => {
  semestreActual = event.target.value;
  cargarHorario(semestreActual);
});

// Cargar horario inicial
cargarHorario(semestreActual);
// Funcionalidad para descargar el horario como PDF
document.getElementById('descargarPDF').addEventListener('click', function() {
  window.print(); // Este método abre el cuadro de diálogo para imprimir la página
});
