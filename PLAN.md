# Havana – Plan del proyecto

Contexto y plan de la web de Havana. Este archivo es solo planificación: la web aún no está construida.

## Contexto

- **Negocio:** taller de costura. Eslogan: *"Luce, tu estilo"*.
- **Clientes objetivo:** pequeños y medianos (negocios, emprendedores, marcas), no solo personas sueltas.
- **Objetivo de la web:** simple pero que venda. Debe generar contactos por WhatsApp y solicitudes de cotización.
- **Stack:** Astro (sitio estático), idioma español.
- **Marca:** logo en `src/assets/brand/logo.png`; colores en `src/styles/theme.css`.
  - Primario `#2b2d52` · Secundario `#7e67e5` · Degradado `#f0aebb → #d97fd0 → #7e67e5`.

## Estilo visual

Inspirado en una web de sastrería editorial, pero sin la tela 3D en el hero y con los colores de Havana:
fondo rosa crema con retícula de puntos y cruces, serif grande (Fraunces), etiquetas en mono (Courier Prime) en violeta,
cuerpo en Figtree, piezas de patrón dibujadas en SVG para "Cómo trabajamos", hoja de pedido en papel y cierre en azul marino.
Los textos y datos editables viven en `src/data/site.ts` (lo marcado con `TODO` es provisional).

## Páginas / secciones

| Sección | Contenido |
|---|---|
| **Inicio** | Qué hace el taller en una frase clara, 3–4 servicios destacados, botón grande de WhatsApp. |
| **Servicios** | Confección a medida, producción por lote (uniformes, ropa de marca, dotación), arreglos y ajustes, bordado/estampado (si lo ofrece). |
| **Portafolio / galería** | Fotos de trabajos terminados, con antes y después en arreglos. Es lo que más convence a clientes nuevos. |
| **Cómo trabajamos** | 3–4 pasos: contacto → cotización → muestra → producción y entrega. Da confianza en pedidos por volumen. |
| **Quiénes somos** | Foto del taller y del equipo, años de experiencia. |
| **Contacto** | WhatsApp, Instagram, dirección con mapa, horario. |

## Funciones de valor

1. **Botón flotante de WhatsApp** con mensaje prellenado ("Hola, quiero cotizar...").
2. **Formulario de cotización corto:** tipo de prenda, cantidad, fecha deseada, foto de referencia (opcional).
3. **Pedidos mínimos y tiempos de entrega** para filtrar clientes.
4. **Testimonios o logos** de clientes con los que ya ha trabajado.
5. **Enlace/feed de Instagram** con trabajos recientes.

## Fases sugeridas

1. **Base:** layout, navegación, pie de página, botón flotante de WhatsApp.
2. **Inicio y Servicios.**
3. **Portafolio y Cómo trabajamos.**
4. **Quiénes somos y Contacto** (mapa, horario).
5. **Formulario de cotización** (requiere decidir cómo se envía).
6. **Testimonios, Instagram, SEO básico y despliegue.**

## Pendiente de la clienta

- Número de WhatsApp, usuario de Instagram, dirección y horario.
- Fotos del taller, del equipo y de trabajos (y antes/después).
- Lista definitiva de servicios (¿hace bordado/estampado?).
- Pedidos mínimos y tiempos de entrega.
- Testimonios o logos de clientes.
- Logo original en alta resolución (SVG o PNG grande).

## Decisiones abiertas

- Envío del formulario de cotización (email, servicio externo o WhatsApp).
- Dónde se publicará la web y si tendrá dominio propio.
- Si se usará Tailwind o CSS propio.
