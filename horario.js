const horarios = {
  "2024-1": [
    { hora: "07:30", lunes: "MS1501C (Teoría)", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "08:30", lunes: "MS1501C (Práctica)", martes: "", miercoles: "", jueves: "", viernes: "MS1505C (Teoría)", sabado: "", domingo: "" },
    { hora: "10:00", lunes: "", martes: "MS1501E (Teoría)", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
  ],
  "2024-2": [
    { hora: "07:30", lunes: "BI101F (Teoría)", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
    { hora: "08:30", lunes: "BI101F (Práctica)", martes: "", miercoles: "", jueves: "", viernes: "MS1505C (Teoría)", sabado: "", domingo: "" },
    { hora: "10:00", lunes: "", martes: "MS1501E (Teoría)", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" },
  ]
};

let semestreActual = "2024-1";
const horarioBody = document.getElementById("horarioBody");
const cambiarSemestreBtn = document.getElementById("cambiarSemestre");

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

cambiarSemestreBtn.addEventListener("click", () => {
  semestreActual = semestreActual === "2024-1" ? "2024-2" : "2024-1";
  cargarHorario(semestreActual);
});

// Cargar horario inicial
cargarHorario(semestreActual);
