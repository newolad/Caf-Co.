// Carrusel
let imagenes = ["img/cafe1.jpg", "img/cafe2.jpg", "img/cafe3.jpg"];
let indice = 0;
setInterval(() => {
  const carrusel = document.getElementById("imagenCarrusel");
  if (carrusel) {
    indice = (indice + 1) % imagenes.length;
    carrusel.src = imagenes[indice];
  }
}, 3000);

// Añadir al carrito
document.querySelectorAll('.agregar-carrito').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Producto añadido al carrito.');
  });
});

// Validación formularios
document.addEventListener("submit", function (e) {
  if (e.target.id === "formReservacion" || e.target.id === "formContacto") {
    e.preventDefault();
    const campos = e.target.querySelectorAll("input, textarea");
    let valido = true;
    campos.forEach(campo => {
      if (!campo.value) valido = false;
    });

    if (!valido) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(e.target.email.value)) {
      alert("Correo electrónico inválido.");
      return;
    }

    alert("Formulario enviado correctamente.");
    e.target.reset();
  }
});

// Modo oscuro
document.getElementById("modoOscuroBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contador de visitas
let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
document.getElementById("contadorVisitas")?.textContent = `Visitas: ${visitas}`;
