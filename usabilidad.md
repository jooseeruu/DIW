# Usabilidad web

- Don't make me think (Steve Krug)

Una propiedad que refleja el fácil funcionamiento de un sistema de información.

 ## Principios básicos
    - Evitar la navegación lineal, es decir, tenemos que poder navegar siempre por cualquier sitio de la web.
    - El usuario debe saber en todo momento donde está.
    - Se tiene que facilitar la búsqueda de contenido.
    - Lo más importante esta arriba a la izquierda, y lo menos, abajo a la derecha.
    - Anteponer el ancho por delante de la profundidad: first width, then depth.
    - Solo un H1 por página. Los demás por orden, después de un h1 va un h2.

## Navegación: capacidad de moverse dentro de la web.

    - Estructurales: webs del mismo sitio.
    - Asociativos: contenidos dentro de la misma página.
    - Embebidos: enlaces de webs externas.

    Estructurales y asociativos --> sobreescriben la URL
    Embebidos --> abren pestaña nueva

    Diseño enlaces:
        - Textuales: resaltamos el color del texto normal.
        - No textual: remarcamos que el elemnto es un enlace (gráfico, foto, video...)
    
    Menú: máximo 2 subniveles.

## Páginas

    - Dar más importancia al contenido que a la estética.
    - Scroll:
        - Páginas cortas (sin scroll o poco): página principal, páginas de navegación o acceso inmediato.
        - Páginas largas: facilite la lectura ininterrumpida (impresión)
        - Evitar siempre el scroll horizontal!!!
    - Página principal:
        - Función: indicar al usuario donde está y la función de la web.
        - Información a mostrar: logo, nombre del sitio, introducción, enlaces a las páginas principales (menú), condiciones acceso (cookies), busqueda.

## Texto

    - Minimizar la extensión del texto: eliminar introducciones innecesarias, no incluir información superflua.
    - Emplear tablas y enumeraciones para organzar la información.
    - No emplear vocabulario informal.
    - Emplear colores de alto contraste con el fondo.
    - Texto estático (sin movimiento ni parpadeo)
    - Extensión: 60 caracteres por línea.
    - Tamaño:
        - xx-small: 9px
        - x-small:  10-11px
        - small:    13px
        - medium:   16px
        - large:    18px
        - x-large:  24px
        - xx-large: 32px
    - Interlineado: 15-20% del tamaño de la fuente.
    - No emplear textos en mayúsculas.
    - Texto juatificado (alinedo a la izquierda)

## Contenido

    - Reducir el tiempo de carga (1-3s aceptable, más de 10s nunca)
    - Evitar el uso de sonidos y locuciones innecesarias.
    - Dar siempre el estado actual en procesos largos (pago, cuestionario..)
    - Veracidad de los datos.
    - Locale: fechas, días de la semana, unidades de medida, etc en formato local
    (idiomas, sistema métrico)...
        Formato fecha:
            - 2024-01-23 (usuario NO!)
            - 23/01/2023 (Si)
    
## Formularios

    - No dejar enviar información con formularios erroneos.
    - Si hay un error, remarcar exactamente el campo que tiene el error.
    - Autorellenado de datos siempre que sea posible.

## Mensajes de error

    Los mensajes de error tienen que ayudar al usuario a detectar y resolver el problema.

    Los mensajes de error deben ser: especificos, constructivos y en positivo.

    Ej:

        El campo "nombre" debe estar informado. --> correcto
        No deje el campor "nombre" vacío. --> incorrecto
        Corrija los errores. --> incorrecto, no es especifico
        No tienes sentido que el campo nombre esté vacío. --> incorrecto: destructivo

## Pie de página

    - Información legal
    - Información de contacto
    - Mapa del sitio

## En contexto de gestión...

    - Poder hacer CRUD (Create, Read, Update, Delete)
    - Listado donde cada elemnto se pueda actualizar y eliminar. Arriba botón de añadir.

# Regla Nº1 Steve Krug --> No me hagas pensar
# Regla Nº2 Steve Krug --> ¿Cómo puedo saber si funciona?

## Medidas objetivas para medir la usabilidad

    - Mapa de calor (heat map)
        Mapas de calor sobre nuestra web miden la interactividad de un usuario.
        - Arriba a la izquierda es más importante que abajo a la derecha.
        - Fotos con personas tienen más audiencia.
        - Imagenes son más importantes que el texto
        - F-shapped pattern: leemos la web en forma de F
        - Los resumenes funcionan mejor que los articulos enteros
        - Banner blindness: los banners del sidebar quedan invisibilizados

    - Ley de los 3 clicks: si el usuario no encuentra lo que quiere en 3 clicks se va. (incrementa el bounce rate)
    - % bounce (rebotes): gente ue abre la página, no interactua y se va. (Google Analytics)
    - % links rotos (debería se 0)
    - Disponibilidad de la web > 99%   (uptimerobot.com)
    - Tiempo de permanencia en la página > 30s (Analytics)
    - Número de errores de front end (aproxima a 0 mejor) (Stack Driver)

# Optimización

Mejorar la experiencia de usuario. Normalmente será a costa de algo. Disminuir la calidad (fotos), cantidad de archivos (concatenando archivos) o la omisión (borrado parcial de archivos).

    - FCP First Contentful Paint: mide el tiempo desde que el usuario entra hasta que se renderiza el primer contenido. < 1.8s
    - TBT Timepo de bloqueo total: depués del FCP cuanto tiempo está bloqueada la web. 
    - LCP Largest Contentful Paint: rapidez con la que se carga el contenido principal de la web. < 2.5 