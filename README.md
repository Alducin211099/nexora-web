# NEXORA — sitio web inicial

Sitio comercial estático de una página para presentar el estudio digital NEXORA.

## Requisitos
- Navegador actualizado.
- Editor de código (opcional).
- No requiere Node.js, React, base de datos ni instalación de dependencias.

## Probar localmente
1. Extrae el ZIP.
2. Abre la carpeta `nexora-web-starter`.
3. Haz doble clic en `index.html` o ábrelo desde un servidor local.
4. Revisa la página en computadora y celular. El menú compacto aparece en ventanas de 760 px o menos.

## Configurar WhatsApp
1. Abre `config.js`.
2. Cuando exista un número comercial exclusivo, cambia `5210000000000` por `52` seguido exactamente de los 10 dígitos del número mexicano, sin `+`, espacios ni guiones. No compartas el número en conversaciones públicas.
3. Guarda y vuelve a cargar `index.html`.
4. Envía una consulta de prueba. Se abrirá WhatsApp con un mensaje preparado; el visitante debe enviarlo manualmente.

El número de ejemplo incluido es ficticio y el formulario no abrirá WhatsApp con él. La validación exige exactamente `52` + 10 dígitos. Para probar, edita `config.js` localmente con tu número y no lo pegues en GitHub ni en chats; después prueba el formulario con datos ficticios y no envíes el mensaje.

## Privacidad

El formulario solo pide nombre, servicio y una breve consulta. El texto se construye en el navegador y no se envía a un servidor del sitio. Si el visitante decide enviar el mensaje desde WhatsApp, se comparte con ese servicio. El borrador interno `docs/privacidad-borrador.md` enumera servicios y datos pendientes; no es un aviso legal publicable.

## Verificar el sitio

- Abre `index.html` en un navegador y revisa enlaces del menú y botones de cada sección.
- Reduce el ancho de la ventana o abre las herramientas del navegador en vista móvil para comprobar el menú, las tarjetas y el formulario.
- Usa la tecla Tab para comprobar el enlace para saltar al contenido, el foco visible y el acceso a todos los controles.
- Prueba el formulario primero con el número de ejemplo: debe mostrar un aviso y no abrir WhatsApp. Después de configurar un número real, prueba con datos ficticios y revisa que el mensaje se prepare correctamente; no es necesario enviarlo.
- Al enviar con un número válido, WhatsApp se intenta abrir en otra pestaña. Si no aparece, permite las ventanas emergentes para este sitio.
- Verifica en el panel Consola de las herramientas de desarrollo que no haya errores JavaScript.

## Antes de publicar
- Confirmar nombre comercial y disponibilidad de marca/dominio.
- Sustituir textos, precios y datos provisionales.
- Añadir un correo real si se desea.
- Probar todos los enlaces y el formulario.
- Añadir aviso de privacidad y datos de contacto reales.
- Antes de redactar el aviso de privacidad, confirmar quién será el responsable: nombre o razón social, domicilio de contacto, correo o medio para solicitudes, datos que se recaban, finalidades, conservación, transferencias/uso de WhatsApp y mecanismo para ejercer derechos. No publicar un aviso genérico como definitivo.
- Revisa que el número de WhatsApp sea el destino correcto y que se muestre correctamente en el mensaje preparado.
- Confirmar que los textos de planes, precios, alcance y condiciones sean los que NEXORA ofrecerá realmente.
- No publicar información personal ni datos ficticios presentados como clientes reales.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño adaptable.
- `script.js`: menú, formulario y comportamiento.
- `config.js`: datos de configuración.
- `favicon.svg`: icono vectorial del sitio, sin imágenes externas.

## Nota comercial
Los precios incluidos son referencias de lanzamiento para pruebas internas. Confirmar alcance, costos externos, tiempos y condiciones antes de ofrecerlos a un cliente.

