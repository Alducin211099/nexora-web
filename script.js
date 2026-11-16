document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // El menú móvil se oculta desde 760 px; al volver al escritorio, lo cerramos.
  window.matchMedia("(min-width: 761px)").addEventListener("change", event => {
    if (event.matches) closeMenu();
  });

  document.querySelectorAll("[data-plan]").forEach(link => {
    link.addEventListener("click", () => {
      const service = document.getElementById("service");
      service.value = "Página web comercial";
      document.getElementById("message").value = `Me interesa el plan ${link.dataset.plan}. Quisiera recibir más información.`;
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    note.classList.remove("form-error");
    const nameField = document.getElementById("name");
    nameField.value = nameField.value.trim();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const configuredNumber = window.NEXORA_CONFIG?.whatsappNumber || "";
    const number = configuredNumber.replace(/\D/g, "");
    if (!/^\d{10,15}$/.test(number) || number === "5210000000000") {
      note.textContent = "Antes de usar el formulario, configura tu número real de WhatsApp en config.js. Después vuelve a probarlo.";
      note.classList.add("form-error");
      return;
    }

    const safeValue = value => String(value || "").trim().replace(/[<>]/g, "");
    const message = [
      "Hola, encontré su página de NEXORA y quiero solicitar información.",
      `Nombre: ${safeValue(data.get("name"))}`,
      `Negocio: ${safeValue(data.get("business")) || "No especificado"}`,
      `Servicio: ${safeValue(data.get("service"))}`,
      `Proyecto: ${safeValue(data.get("message")) || "Me gustaría recibir orientación."}`
    ].join("\n");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    // Con noopener, window.open puede devolver null aunque sí abra la pestaña.
    // Por eso no usamos ese valor para afirmar que el navegador bloqueó la ventana.
    window.open(url, "_blank", "noopener,noreferrer");
    note.textContent = "Intentamos abrir WhatsApp con tu consulta preparada. Revisa el mensaje y envíalo desde WhatsApp. Si no se abrió, permite las ventanas emergentes e inténtalo de nuevo.";
  });
});
