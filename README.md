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
2. Cambia `5210000000000` por tu número de WhatsApp con código de país, sin `+`, espacios ni guiones.
3. Guarda y vuelve a cargar `index.html`.
4. Envía una consulta de prueba. Se abrirá WhatsApp con un mensaje preparado; el visitante debe enviarlo manualmente.

El número de ejemplo incluido no funciona como destino real. Configura el número antes de publicar; el formulario acepta entre 10 y 15 dígitos, sin `+`, espacios ni guiones.

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
- Revisa que el número de WhatsApp sea el destino correcto y que se muestre correctamente en el mensaje preparado.
- Confirmar que los textos de planes, precios, alcance y condiciones sean los que NEXORA ofrecerá realmente.
- No publicar información personal ni datos ficticios presentados como clientes reales.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño adaptable.
- `script.js`: menú, formulario y comportamiento.
- `config.js`: datos de configuración.

## Nota comercial
Los precios incluidos son referencias de lanzamiento para pruebas internas. Confirmar alcance, costos externos, tiempos y condiciones antes de ofrecerlos a un cliente.
