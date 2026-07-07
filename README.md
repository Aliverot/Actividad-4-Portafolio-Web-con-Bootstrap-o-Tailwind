# Actividad 4 - Portafolio Web

**Estudiante:** Leonardo Fuentes López
**Carrera:** Ingeniería en Sistemas Computacionales
**Institución:** Instituto Tecnológico de Oaxaca 

---

## Descripción Breve
Portafolio web personal estático diseñado para mostrar de manera profesional el perfil, habilidades técnicas y proyectos destacados en el área de desarrollo de software, administración de bases de datos y simulación. El sitio está diseñado para ser totalmente responsivo (adaptable a dispositivos móviles) y mantener un código limpio y estructurado.

---

## Descripción del Proyecto y Plantilla Base

* **Framework CSS utilizado:** Bootstrap 5 (específicamente v5.2.3).
* **Plantilla base:** "Freelancer" (v7.0.7) desarrollada por Start Bootstrap.
* **Enlace de descarga de la plantilla:** https://startbootstrap.com/theme/freelancer

### Secciones del Portafolio

El portafolio está compuesto por una estructura de una sola página dividida en las siguientes secciones adaptadas de la plantilla original:

1. **Navegación:** Barra superior fija (navbar) que permite la navegación rápida hacia las diferentes secciones del sitio.
2. **Cabecera (Hero):** Sección principal que incluye la fotografía de perfil formal, el nombre completo y el título universitario.
3. **Proyectos (Portfolio):** Una cuadrícula interactiva con ventanas emergentes (modales) que documentan los 4 proyectos realizados (Sistema Casa de la Cultura, MotoFix, Simulación Epidemiológica SEIR, y utileria.js), mostrando las tecnologías utilizadas en cada uno.
4. **Sobre Mí & Habilidades (About):** Sección informativa con una breve descripción del perfil técnico y listado de conocimientos en desarrollo web, lenguajes (C++, Python) y administración de redes.
5. **Footer:** Pie de página que incluye la ubicación, enlaces a redes y derechos de autor.

---

## Proceso de Creación y Modificaciones

El proyecto se construyó a partir del código fuente de la plantilla "Freelancer", realizando las siguientes adaptaciones para cumplir estrictamente con los lineamientos de la actividad:

1. **Descarga e Implementación:** Se descargaron los archivos precompilados de la plantilla (HTML, CSS, JS) y se estructuraron en el entorno local, manteniendo el orden de las carpetas de recursos (assets).
2. **Limpieza y Optimización:** Se eliminó por completo la sección "Contact" (y su respectivo enlace en la navegación) debido a que un formulario sin un backend funcional resulta innecesario y poco profesional para los fines estáticos de esta entrega. También se retiraron los scripts de validación asociados a dicho formulario.
3. **Ajuste de la Cuadrícula:** La plantilla original mostraba 6 espacios de proyectos. Se redujo el grid a 4 espacios exactos para documentar únicamente los proyectos reales y desarrollados en actividades pasadas.
4. **Traducción y Personalización de Contenido:** Se tradujo la estructura al español y se sustituyó el contenido genérico (Lorem Ipsum) por información verídica. Se agregó la fotografía formal en la ruta assets/img/ y se actualizó el texto de las ventanas modales con los detalles técnicos de cada software desarrollado.
5. **Integración de Imágenes Propias:** Se sustituyeron las ilustraciones de relleno (placeholders) de la plantilla por imágenes/capturas representativas de cada uno de los proyectos.
6. **Control de Versiones y Despliegue:** Se integraron los cambios al repositorio local de Git, se subió el proyecto actualizado a la rama main y se configuró GitHub Pages para su publicación en línea.

---

## Capturas de Pantalla

**Vista Principal (Cabecera y Perfil):**
![Vista Principal](assets/img/captura1.png)

**Vista de Proyectos:**
![Vista Proyectos](assets/img/captura2.png)

**Vista de Ventana Modal (Detalles de proyecto):**
![Vista Modal](assets/img/captura3.png)