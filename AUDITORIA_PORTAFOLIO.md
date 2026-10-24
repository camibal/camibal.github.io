# Auditoría del portafolio

Fecha de auditoría: 24 de octubre de 2026.

## Arquitectura y estado inicial

- **Directorio auditado:** `D:\CAMBAL\htdocs\CAMBAL\camibal.github.io`
- **Repositorio remoto configurado:** `https://github.com/camibal/camibal.github.io.git`
- **Rama local:** `main`; último commit local: `2d08a1b update`.
- **Estado inicial de Git:** limpio, sin modificaciones pendientes.
- **Publicación identificada:** el repositorio y el dominio `https://camibal.github.io/` coinciden. No hay directorio `.github`, workflow de Actions, configuración de Jekyll ni proceso de compilación versionado. Por ello, el mecanismo más probable es GitHub Pages publicando la raíz de `main`. La consulta remota de Git no pudo validarse desde este entorno por restricción de red.
- **Arquitectura:** sitio estático de una página: HTML, CSS y JavaScript. No hay `package.json`, framework ni dependencias que requieran instalación.

## Inventario

| Área | Evidencia | Estado inicial |
| --- | --- | --- |
| Página principal | `index.html` | Una única página con portada, sobre mí, servicios, tecnologías, proyectos y contacto. |
| Estilos | `css/style.css` y cinco variantes de color | Estilos derivados de una plantilla Bootstrap; solamente `style.css` se usa. |
| JavaScript | `js/main.js`, `contactform/contactform.js` | Navegación, animaciones heredadas, carruseles y apertura de WhatsApp. |
| Bibliotecas locales | `lib/` | Bootstrap, jQuery, Popper, Owl Carousel, Lightbox, Typed, Font Awesome, Ionicons y utilidades heredadas. |
| Recursos | `img/` | Foto de perfil, fondos, logos tecnológicos y capturas de nueve proyectos históricos. |
| Formulario | `#formulario` | No tiene backend: abre WhatsApp con nombre y mensaje. |

### Proyectos hallados

| Proyecto | Evidencia verificada en el repositorio | Decisión |
| --- | --- | --- |
| Mi App Megalabs | Capturas `img/newrona/*`; texto: medicamentos, webinars y charlas; HTML, Ionic, Sass, TypeScript, Firebase. | Conservar como proyecto anterior. |
| Videojuegos Respi | Capturas `img/newrona/respi*`; texto: juegos Unity/WebGL; HTML, WebGL, CSS, JS, AJAX, PHP. | Conservar como proyecto anterior. |
| Election Party | Capturas `img/newrona/election*`; texto: juego educativo sobre campaña electoral; Angular, Sass, TypeScript, Firebase, Azure. | Conservar como proyecto anterior. |
| Puerta Abierta | Capturas y texto de asesoría financiera; HTML, CSS, JS, PHP, MySQL. | Conservar como proyecto anterior. |
| Geek Code | Capturas y texto de tienda virtual; HTML, CSS, Bootstrap, JS, PHP, MySQL. | Conservar como proyecto anterior. |
| H3 | Capturas y texto de consulta/pago de facturas; HTML, CSS, Bootstrap, JS, PHP, MySQL. | Conservar como proyecto anterior. |
| Pokémon | Capturas y enlace a PokeAPI; HTML, CSS, Sass, TypeScript, Angular. | Conservar como proyecto anterior. |
| Prueba Smartsoft | Capturas y texto de CRUD/autenticación; Angular, Node.js, Express, MySQL. | Conservar como proyecto anterior. |
| Smartsoft App | Capturas y texto de aplicación híbrida para un evento; Ionic, Material, Firebase. | Conservar como proyecto anterior. |
| Alfa Domicilios, Radar Fusa, Radar Comercial, observabilidad y módulo de marketing | Contexto aportado en el encargo; no se hallaron código, capturas, URLs ni documentos adicionales en este repositorio. | Incluir únicamente con lenguaje técnico acotado, sin demos, métricas, clientes adicionales ni estado de producción no demostrado. |

## Hallazgos y prioridad

1. **Alta — recursos y enlaces rotos:** `img/favicon.jpg`, `img/apple-touch-icon.jpg` y `img/trabajos/smartsoft1-1.jpg` no existen; los dos últimos enlaces afectan aperturas de proyectos. Las imágenes reales equivalentes sí están en el repositorio.
2. **Alta — contacto engañoso:** el formulario recarga la página y muestra “Mensaje enviado exitosamente” aunque solo intenta abrir WhatsApp; además carece de etiquetas asociadas y codificación segura del texto.
3. **Alta — SEO insuficiente:** título genérico y `description`/`keywords` vacíos; no hay Open Graph, canonical, robots ni sitemap.
4. **Media — accesibilidad y experiencia móvil:** abundan imágenes sin texto alternativo, modales/carruseles sin una interacción moderna y controles dependientes de bibliotecas heredadas. La navegación móvil requiere Bootstrap y no declara un estado ARIA propio.
5. **Media — rendimiento y mantenimiento:** se cargan muchas bibliotecas no necesarias para la información central; algunas capturas superan 3 MB. Existen varias hojas de color sin uso.
6. **Media — contenido obsoleto:** “dos de experiencia” es incompleto y los proyectos aparecen en una cuadrícula repetitiva, con textos breves sin contexto de contribución.
7. **Baja — seguridad y robustez:** el sitio no contiene secretos ni backend; los enlaces externos que abren pestañas nuevas no incluyen `rel="noopener"`.

## Evaluación visual y funcional inicial

La versión pública se comprobó visualmente en escritorio: portada oscura con una imagen de teclado, menú y texto animado. El contraste de la portada es aceptable, pero la composición responde a una plantilla genérica y no explica de inmediato el alcance profesional. La comprobación mediante el árbol accesible confirmó los enlaces y el formulario existentes. No fue posible recoger trazas de consola desde el navegador disponible; las comprobaciones posteriores se documentarán de forma diferenciada.

## Contenido y riesgos

- Se conservan las capturas y recursos existentes; no se eliminarán archivos históricos.
- Se actualiza la presentación de contacto usando los datos ya publicados: correo, teléfono, LinkedIn y WhatsApp. Facebook se conserva fuera de la navegación principal por ser un enlace profesional no verificable más allá de su presencia actual.
- No se afirmarán fechas, empleadores, resultados, número de usuarios, enlaces de producto ni demos para los casos recientes, porque faltan evidencias dentro del repositorio.
- El rediseño mantendrá rutas relativas y no modificará la configuración de Pages. Retirar referencias a bibliotecas de la página no borra sus archivos: reduce riesgo de despliegue y conserva reversibilidad.

## Ampliación: evidencia de inteligencia artificial

La revisión adicional no encontró código, configuraciones, capturas ni documentos que prueben una API de IA, un modelo desplegado, una herramienta específica (por ejemplo, Antigravity o DeepSeek) o una automatización de IA en producción. La información de esta ampliación se clasifica así:

| Categoría | Evidencia y tratamiento |
| --- | --- |
| **A. Implementado y comprobable** | No hay integración de IA comprobable dentro de este repositorio. Se conservan como implementados los flujos tradicionales de pedidos, diagnóstico, marketing e integraciones ya descritos. |
| **B. Herramienta de trabajo o experimentación** | El encargo documenta el uso de agentes de programación para análisis, planificación, depuración y validación, además de exploración generativa visual/audiovisual. Se presenta como apoyo humano, sin adjudicarle resultados automáticos ni publicación de activos. |
| **C. Idea, investigación o funcionalidad planificada** | Automatización con IA para operaciones, marketing o incidentes; y cualquier API/servicio/modelo de IA no evidenciado. Se presenta explícitamente como exploración o línea de evolución. |

Por tanto, la implementación usará las etiquetas visibles “herramienta de trabajo”, “exploración” e “investigación y evolución”. No se nombrarán modelos, plataformas ni APIs sin una fuente verificable.

## Plan de implementación

1. Reemplazar la estructura de una página por HTML semántico y una navegación accesible, conservando rutas y recursos existentes.
2. Crear un lenguaje visual editorial: portada oscura, secciones claras, acento verde menta, rejilla adaptable y movimiento reducido cuando el usuario lo solicita.
3. Incorporar los cinco casos actuales con información verificable y estado explícito; agrupar los nueve proyectos respaldados por capturas como archivo de proyectos.
4. Sustituir el formulario por un enlace de contacto de WhatsApp que valida campos, codifica su contenido y comunica con honestidad que abrirá WhatsApp.
5. Añadir título, description, canonical, Open Graph, favicon existente, `robots.txt`, `sitemap.xml` y datos estructurados de persona con información publicada.
6. Verificar sintaxis, referencias locales, anclas, respuesta visual en 360, 390, 768, 1024 y 1440 px, consola disponible y el estado final de Git.

## Pruebas previstas

- Validación estructural HTML y referencias a recursos locales.
- Revisión de enlaces internos y externos declarados.
- Prueba de menú, anclas, formulario/WhatsApp y foco por teclado.
- Capturas de escritorio y cinco anchos de viewport en una vista local.
- Revisión manual de contraste, desbordamiento y estado `prefers-reduced-motion`.
