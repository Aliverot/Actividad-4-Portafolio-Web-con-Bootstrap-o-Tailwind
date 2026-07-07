# Actividad 4 - Portafolio Web

**Estudiante:** Leonardo Fuentes López  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Institución:** Instituto Tecnológico de Oaxaca (ITOax)  

---

## Descripción Breve
Portafolio web personal estático diseñado para mostrar de manera profesional el perfil, habilidades técnicas y proyectos destacados en el área de desarrollo de software, administración de redes y simulación. El sitio está diseñado para ser totalmente responsivo (adaptable a dispositivos móviles) y mantener un código limpio y estructurado.

---

## Descripción del Proyecto

* **Framework CSS utilizado:** [Tailwind CSS](https://tailwindcss.com/) (implementado vía CDN).
* **Plantilla base:** Se optó por construir una **plantilla personalizada desde cero** utilizando las clases de utilidad de Tailwind CSS, tomando como inspiración la limpieza visual y la estructura de objetos literales en JavaScript utilizados en actividades previas (como la Galería Lightbox). Al ser un diseño propio construido sobre Tailwind, la documentación base del framework se puede consultar en: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

### Secciones del Portafolio

El portafolio está compuesto por una estructura de una sola página (Single Page Application a nivel de diseño) dividida en las siguientes secciones:

1. **Header / Navegación:** Una barra superior fija (sticky) que permite la navegación rápida hacia las diferentes secciones del sitio mediante un desplazamiento suave (smooth scroll).
2. **Sobre Mí:** Sección principal (Hero) que incluye un saludo, el título profesional, una breve descripción del enfoque como desarrollador y la fotografía de perfil formal.
3. **Habilidades Técnicas:** Un panel dividido en tres categorías (Desarrollo Web, Software & Datos, Infraestructura) donde se listan las tecnologías dominadas (Laravel, Python, C++, Ubuntu Server, etc.).
4. **Proyectos:** Una cuadrícula de tarjetas (cards) que documentan los proyectos realizados (Sistema Casa de la Cultura, MotoFix, Simulación Epidemiológica SEIR, y utileria.js), mostrando las tecnologías utilizadas en cada uno.
5. **Footer:** Pie de página sencillo que incluye los derechos de autor con el año calculado de forma dinámica mediante JavaScript.

---

## Proceso de Creación (Paso a Paso)

1. **Estructura del Proyecto:** Se generó la estructura de directorios requerida, creando las carpetas css, js e img, además de inicializar el archivo index.html en la raíz.
2. **Integración del Framework:** Se agregó Tailwind CSS a través de su CDN oficial en la etiqueta <head> del HTML para acelerar el proceso de maquetación y diseño responsivo sin necesidad de compilar localmente.
3. **Maquetación HTML:** Se construyó la estructura semántica (<header>, <main>, <section>, <article>, <footer>) aplicando directamente las clases de utilidad de Tailwind para márgenes, paddings, colores y tipografía (ej. bg-gray-50, text-blue-700, grid-cols-1 md:grid-cols-2).
4. **Configuración de CSS Personalizado:** En el archivo css/portafolio.css, se establecieron variables globales (:root) para mantener la paleta de colores corporativa y se agregó el comportamiento de desplazamiento suave (scroll-behavior: smooth) y animaciones sutiles para las tarjetas (efecto hover).
5. **Lógica de JavaScript Nativo:** Se crearon los archivos js/portafolio.js y js/index.js. Manteniendo un estilo de programación estructurado, se diseñó un objeto literal llamado ManejadorPortafolio encargado de inicializar la lógica de la página (como la actualización dinámica del año en el footer), separando la declaración de las funciones de su ejecución.
6. **Inserción de Contenido Real:** Se sustituyeron los datos genéricos por información verídica, agregando la fotografía formal en la carpeta img y documentando los proyectos reales desarrollados previamente.
7. **Control de Versiones y Despliegue:** Se inicializó el repositorio local con Git, se subió a GitHub y se configuró GitHub Pages para su publicación en línea.

---

## Capturas de Pantalla

*(Nota: Reemplaza las rutas de las imágenes con las capturas reales de tu proyecto subidas a la carpeta img o al repositorio)*

**Vista Principal (Sobre mí):**  
![Vista Sobre Mi](img/captura-sobre-mi.png)

**Vista de Habilidades y Proyectos:**  
![Vista Proyectos](img/captura-proyectos.png)

**Vista en Dispositivo Móvil (Responsivo):**  
![Vista Movil](img/captura-movil.png)
