// Lista inicial de productos
const productos = [
  { nombre: "Mouse", precio: 12.99, descripcion: "Mouse inalámbrico" },
  { nombre: "Teclado", precio: 24.50, descripcion: "Teclado mecánico RGB" },
  { nombre: "Monitor", precio: 150.00, descripcion: "Monitor 24 pulgadas" }
];

// Función para renderizar productos en el <ul>
function renderizarLista() {
  const ul = document.getElementById("lista-productos");
  ul.innerHTML = ""; // Limpiar contenido actual

  productos.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio} - ${producto.descripcion}`;
    ul.appendChild(li);
  });
}

// Función para agregar un nuevo producto
function agregarProducto() {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (nombre && !isNaN(precio) && descripcion) {
    productos.push({ nombre, precio, descripcion });
    renderizarLista();
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
  } else {
    alert("Por favor completa todos los campos correctamente.");
  }
}

// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", renderizarLista);

// Agregar evento al botón
document.getElementById("agregar-btn").addEventListener("click", agregarProducto);
