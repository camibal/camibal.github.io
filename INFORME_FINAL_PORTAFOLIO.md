# Informe final del portafolio

Fecha: 24 de octubre de 2026.

## Resumen

Se implementó un rediseño completo de una página para el portafolio de Camilo Ballesteros. La interfaz pasó de una plantilla Bootstrap con dependencias de jQuery a una composición editorial propia: portada oscura, contenido de proyectos sobre fondo claro, acento verde menta y tipografía de sistema. No se eliminó ningún recurso histórico del repositorio.

## Archivos creados y modificados

| Archivo | Acción | Propósito |
| --- | --- | --- |
| `AUDITORIA_PORTAFOLIO.md` | Creado | Auditoría, inventario, riesgos y plan previo a la implementación. |
| `index.html` | Reemplazado | Estructura semántica, contenido actualizado, SEO y datos estructurados. |
| `css/style.css` | Reemplazado | Sistema visual adaptable y accesible, sin dependencia de Bootstrap. |
| `css/ai.css` | Creado | Estilos encapsulados para la sección de inteligencia artificial aplicada. |
| `js/main.js` | Reemplazado | Menú móvil, contacto por WhatsApp y año dinámico. |
| `robots.txt` | Creado | Directiva de rastreo y referencia al sitemap. |
| `sitemap.xml` | Creado | Sitemap de la única URL canónica actual. |

Los recursos de `img/`, librerías de `lib/`, variantes de color y archivos históricos se conservaron intactos. Ya no se cargan en la página principal, pero permanecen disponibles para una reversión o consulta histórica.

## Diseño y contenido implementados

- Navegación con Inicio, Proyectos, Experiencia, Tecnologías, Sobre mí y Contacto; incluye menú móvil con estado ARIA y enlace para saltar al contenido.
- Hero con identidad, alcance profesional y llamadas funcionales a proyectos y contacto.
- Cinco casos actuales con descripciones delimitadas por la evidencia disponible: Alfa Domicilios, Radar Fusa, Radar Comercial, observabilidad y módulo de marketing. Los casos sin demo pública o con información limitada lo indican expresamente.
- Archivo de cinco proyectos anteriores seleccionados —Mi App Megalabs, Videojuegos Respi, Election Party, Geek Code y Smartsoft App— con capturas auténticas, textos verificables y tecnologías ya declaradas en el sitio. Los demás recursos históricos se conservan en el repositorio, sin mostrarse en el archivo.
- Sección de trayectoria por capacidades comprobables, sin fechas, empleadores, cifras ni responsabilidades inventadas.
- Tecnologías agrupadas sin barras ni porcentajes arbitrarios.
- Formulario de contacto accesible que valida los campos y comunica que abrirá WhatsApp; ya no afirma un envío inexistente ni recarga la página.
- Metadatos SEO: título, descripción, canonical, Open Graph, favicon funcional, datos estructurados de tipo `Person`, `robots.txt` y sitemap.
- Sección **Inteligencia artificial aplicada** con tres áreas: ingeniería asistida, automatización en investigación y exploración generativa. Cada área declara si representa herramienta de trabajo, exploración o evolución; no se atribuyen modelos propios, APIs desplegadas ni métricas no verificables.
- Casos breves de mantenimiento, diagnóstico y marketing que separan el flujo de producto documentado del posible apoyo de IA y sus controles humanos.

## Verificaciones realizadas

| Comprobación | Resultado |
| --- | --- |
| Sintaxis JavaScript | `node --check js/main.js` superado. |
| Rutas locales referenciadas por HTML | Todas resuelven en el checkout. |
| XML del sitemap | Analizado correctamente. |
| Errores de espacios en Git | `git diff --check` sin errores. |
| Consola local | Sin errores ni advertencias en el navegador disponible. |
| Vista local | Servida con `D:\CAMBAL\php\php.exe -S 127.0.0.1:8765 -t D:\CAMBAL\htdocs\CAMBAL\camibal.github.io`. |
| Visual 360 px | Hero, botones y menú compacto revisados. |
| Visual 390 px | Menú móvil abierto: enlaces disponibles y estado `aria-expanded` comprobado. |
| Visual 768 px | Sección de contacto y columnas revisadas. |
| Visual 1024 px | Sección de contacto y composición de escritorio intermedia revisadas. |
| Visual 1440 px | Portada y navegación de escritorio revisadas. |
| Formulario vacío | Muestra el mensaje de validación y no abre WhatsApp. |
| Afirmaciones de IA | Contrastadas con el repositorio: no se declaran APIs, modelos, herramientas específicas ni productos de IA no evidenciados. |
| Sección de IA | Revisada en escritorio y móvil; navegación por ancla disponible y consola local sin errores ni advertencias. |

## Pendiente de confirmación

- La publicación por GitHub Pages se dedujo de la configuración local y el dominio; la consulta remota a GitHub estuvo bloqueada por la red del entorno.
- No se ejecutó un despliegue ni se modificó la configuración de Pages.
- No se envió un mensaje real de WhatsApp: hacerlo abriría un servicio de terceros y requeriría contenido de prueba. El enlace se genera con codificación segura a partir de los campos del formulario.
- Los casos recientes no tienen capturas, URLs públicas ni documentación adicional dentro de este repositorio. Conviene añadirlos solo cuando puedan compartirse sin exponer datos privados.
- El repositorio no contiene evidencia de un modelo propio, una integración/API de IA, resultados cuantificados o nombres de herramientas de IA concretas. La nueva sección los presenta como uso asistido, exploración o investigación, según corresponde.

## Vista previa local

En PowerShell, desde la raíz del repositorio:

```powershell
D:\CAMBAL\php\php.exe -S 127.0.0.1:8765 -t D:\CAMBAL\htdocs\CAMBAL\camibal.github.io
```

Abre `http://127.0.0.1:8765/` en el navegador. Para detener el servidor, cierra su proceso o la ventana que lo inició.

## Publicación segura en GitHub Pages

1. Revisa `git diff` y confirma el contenido y enlaces profesionales.
2. Realiza un commit en `main` (o en la rama que la configuración de Pages publique).
3. Envía el commit al remoto `origin`.
4. Espera a que GitHub Pages publique y revisa `https://camibal.github.io/` en móvil y escritorio.
5. Comprueba el título compartido, las imágenes y el formulario antes de comunicar el cambio.

No se ha realizado ninguno de esos pasos de publicación durante este trabajo.
