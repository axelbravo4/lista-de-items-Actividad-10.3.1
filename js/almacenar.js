document.addEventListener('DOMContentLoaded', () => {
    const item = document.getElementById('item');
    const agregar = document.getElementById('agregar');
    const limpiar = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    function obtenerTareas() {
        return JSON.parse(localStorage.getItem("tareas")) || [];
    }

    function guardarTareas(tareas) {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function cargarTarea() {
        const tareas = obtenerTareas();
        contenedor.innerHTML = '';

        tareas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = tarea; // Corrected from li.contenedor to li.textContent
            contenedor.appendChild(li);
        });
    }

    agregar.addEventListener("click", () => {
        const valor = item.value.trim();
        if (valor !== "") {
            const tareas = obtenerTareas();
            tareas.push(valor);
            guardarTareas(tareas);
            cargarTarea();
            item.value = "";
        }
    });

    limpiar.addEventListener("click", () => {
        localStorage.removeItem("tareas");
        cargarTarea();
    });

    // Load tasks on page load
    cargarTarea();
});


