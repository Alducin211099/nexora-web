# Borrador para revisión legal: privacidad de NEXORA

**Estado: borrador interno. No publicar ni presentar como aviso vigente.**

Este documento reúne el flujo observado en el sitio y preguntas que el responsable debe resolver con asesoría legal antes de preparar los avisos integral y simplificado.

## Flujo actual del formulario

- El visitante introduce su nombre, selecciona un tipo de servicio y describe brevemente su consulta.
- El JavaScript valida los campos y construye el texto del mensaje en el navegador.
- El sitio no usa una base de datos ni envía el formulario a un servidor propio.
- Si `config.js` contiene un destino válido, se intenta abrir `wa.me` con el texto preparado. El visitante debe revisar y enviar el mensaje desde WhatsApp; el sitio no confirma que se haya enviado.
- Si el número no está configurado en formato `52` + 10 dígitos, la función se detiene y muestra un aviso sin abrir WhatsApp.
- No se solicita correo, teléfono del visitante, nombre del negocio ni información sensible.

## Servicios externos y datos técnicos por confirmar

1. **Alojamiento web:** el repositorio apunta a Cloudflare Pages. Confirmar el producto y plan de alojamiento realmente usados, logs técnicos, cookies, direcciones IP, plazos y condiciones vigentes del proveedor.
2. **Fuentes tipográficas:** la página solicita DM Sans y Manrope desde Google Fonts (`fonts.googleapis.com` y `fonts.gstatic.com`). La carga puede comunicar datos técnicos de conexión al proveedor. Confirmar comportamiento y documentación vigentes; evaluar autoalojar las fuentes si se desea evitar esa solicitud externa.
3. **WhatsApp:** solo interviene después de que el visitante elige continuar y abre el enlace. Si el visitante envía el mensaje, el contenido y metadatos correspondientes quedan sujetos a WhatsApp/Meta y a la configuración del usuario.
4. **Navegador del visitante:** valida los campos y arma el texto temporalmente para crear el enlace. No se usa almacenamiento local, cookies propias, analítica ni base de datos en el código revisado.
5. **GitHub:** aloja el código fuente del proyecto. No forma parte del envío de consultas comerciales del visitante.

Las prácticas y términos de terceros pueden cambiar y deben verificarse al preparar el aviso final.

## Información que falta del responsable

- Nombre completo o razón social del responsable del tratamiento.
- Domicilio y medio de contacto para solicitudes de privacidad.
- Identidad de la persona o entidad que determina finalidades y medios.
- Finalidades primarias y, si las hubiera, secundarias.
- Si el nombre y contenido de consulta se tratarán solo para responder la cotización y cuánto tiempo se conservarían fuera del sitio (por ejemplo, en el WhatsApp receptor).
- Reglas de eliminación y controles de acceso de las cuentas que reciban consultas.
- Si habrá transferencias o encargados adicionales, destinatarios, finalidades y mecanismo aplicable.
- Procedimiento y canal para ejercer derechos de acceso, rectificación, cancelación y oposición, así como revocar consentimiento cuando corresponda.
- Si el servicio tratará datos de menores o información sensible (el formulario actual no los solicita; evitar pedirlos).
- Fundamento legal, jurisdicción y revisión por asesoría competente.

## Espacios reservados para publicación futura

- Aviso simplificado: **no disponible todavía**. Insertar enlace solo después de revisión y aprobación legal.
- Aviso integral: **no disponible todavía**. Insertar enlace solo después de revisión y aprobación legal.

No convertir este borrador ni estos marcadores en contenido público definitivo sin completar y validar la información.
