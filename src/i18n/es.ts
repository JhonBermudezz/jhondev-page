// Contenido del home en español. La versión en inglés (fase 2) replica esta forma en en.ts.

// TODO: reemplazar por el enlace real del evento de Cal.com (p. ej. https://cal.com/jhondev/diagnostico).
export const CAL_URL = 'https://cal.com/jhondev/diagnostico';
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJw2knNSyFP44R-funJwdcuwI';

export const es = {
  meta: {
    title: 'Páginas web y SEO para clínicas de estética y salud | JhonDev',
    description:
      'Sitios web que posicionan en Google y automatización con IA para clínicas de estética, salud y bienestar. Entregas aprobadas antes de cada pago. Agenda tu diagnóstico.',
  },
  nav: [
    { href: '#composicion', label: 'Servicios' },
    { href: '#casos', label: 'Casos' },
    { href: '#modo-de-uso', label: 'Proceso' },
    { href: '#prospecto', label: 'Reseñas' },
  ],
  cta: 'Agenda tu diagnóstico',
  reviewsCount: 36,

  hero: {
    h1: 'Sitios web y posicionamiento en Google para clínicas de estética y salud',
    sub: 'Para que tus pacientes te encuentren en Google antes que a la competencia. Hablas directo con quien construye tu sitio.',
    stars: '36 reseñas de 5 estrellas en Google',
    // Foto generada con IA (Nano Banana 2 vía kie.ai). Reemplazar por foto de marca real.
    imageAlt: 'Dueña de una clínica estética revisando su celular en su consultorio',
    card: { strong: '10 meses', text: 'posicionando a Doctora Capilar en Google' },
  },

  warnings: {
    field: 'Advertencias',
    h2: '¿Por qué una clínica nueva aparece antes que la mía en Google?',
    answer:
      'Porque Google no premia los años que llevas atendiendo. Premia el sitio que mejor responde lo que busca tu paciente. Si tu sitio no se construyó para posicionar, cualquier clínica que sí lo hizo te pasa por delante.',
    items: [
      'Tu competencia nueva aparece antes que tú en Google.',
      'Tu asistente repite la misma explicación veinte veces por semana.',
      'El día que apagas la pauta, se apagan los pacientes.',
    ],
  },

  indicated: {
    field: 'Indicado para',
    h2: '¿Esto sirve para mi tipo de clínica?',
    answer:
      'Sí, si atiendes pacientes o clientas de estética, salud o bienestar. Cada sitio se escribe con las búsquedas reales de tu especialidad y de tu ciudad.',
    items: [
      { name: 'Micropigmentación y cejas', note: 'Página web para estudios de micropigmentación' },
      { name: 'Tricología y clínicas capilares', note: 'SEO para tratamientos capilares' },
      { name: 'Dermatología', note: 'Página web para dermatólogos' },
      { name: 'Medicina general y consultorios', note: 'Página web para consultorio médico' },
      { name: 'Bienestar y meditación', note: 'Sitio para marcas de bienestar' },
      { name: 'Creadoras con producto propio', note: 'Landing de producto con recompra' },
    ],
  },

  composition: {
    field: 'Composición',
    h2: '¿Qué incluye exactamente?',
    answer:
      'Un sitio hecho para posicionar, la IA que atiende lo repetitivo y el trabajo mensual que te mantiene arriba en Google. Contratas lo que tu clínica necesita hoy.',
    items: [
      {
        name: 'Sitio web a la medida',
        role: 'Base',
        text: 'Rápido, pensado para celular y administrable por tu equipo.',
      },
      {
        name: 'SEO desde el día 1',
        role: 'Activo principal',
        text: 'Estructura, textos y datos para aparecer cuando una paciente busca tu tratamiento en tu ciudad.',
      },
      {
        name: 'IA para WhatsApp y CRM',
        role: 'Coadyuvante',
        text: 'Responde las preguntas de siempre, agenda y registra cada paciente en tu CRM.',
      },
      {
        name: 'Uso continuo: posicionamiento mensual',
        role: 'Mantenimiento',
        text: 'La pauta se apaga cuando dejas de pagarla. El posicionamiento sigue trabajando.',
      },
    ],
  },

  cases: {
    field: 'Línea de productos',
    h2: '¿Con qué clínicas has trabajado?',
    answer:
      'Con clínicas y marcas de estética, salud y bienestar en Colombia y Estados Unidos. Todos son proyectos reales.',
    featured: {
      name: 'Doctora Capilar',
      kind: 'Clínica capilar',
      service: 'Posicionamiento en Google',
      fact: '10 meses de posicionamiento continuo',
    },
    items: [
      { name: 'Clínica de micropigmentación', place: 'Villavicencio, Colombia', service: 'IA para WhatsApp y CRM' },
      { name: 'Estudio de micropigmentación', place: 'San José, California', service: 'Sitio web' },
      { name: 'Dermatóloga', place: '', service: 'Sitio web' },
      { name: 'Médico general', place: '', service: 'Sitio web' },
      { name: 'Creadora con 1 millón de seguidores', place: 'Instagram', service: 'Landing de producto, con recompra' },
      { name: 'Marca de meditación y bienestar', place: '', service: 'Bienestar' },
    ],
  },

  method: {
    field: 'Modo de uso',
    h2: '¿Cómo sé que voy a aprobar lo que pago?',
    answer:
      'Porque no pagas una entrega hasta aprobarla. Son tres entregas y cada una la revisas tú antes de pagar. Hablas siempre conmigo, que soy quien construye.',
    steps: [
      { name: 'Diagnóstico', text: 'Revisamos cómo te encuentran hoy tus pacientes en Google y en WhatsApp.' },
      { name: 'Propuesta escrita', text: 'Alcance, tiempos y precio por escrito, antes de empezar.' },
      { name: 'Entrega 1', text: 'La revisas y la apruebas. Después pagas.' },
      { name: 'Entrega 2', text: 'La revisas y la apruebas. Después pagas.' },
      { name: 'Entrega 3', text: 'La revisas y la apruebas. Después pagas.' },
      { name: 'Encendido', text: 'Tu sitio sale al aire, con el dominio y los accesos a tu nombre.' },
    ],
    notes: ['Entrega en semanas, no en meses.', 'El dominio y los accesos quedan a tu nombre.'],
  },

  reviews: {
    field: 'Prospecto',
    h2: '¿Qué dicen mis clientas?',
    answer: '36 reseñas de 5 estrellas en Google Maps. Estas son algunas, tal como las escribieron.',
    link: 'Ver todas las reseñas en Google',
    source: 'Reseña de Google',
    // Selección provisional de reseñas reales de clientas, publicadas en Google Maps.
    items: [
      {
        author: 'Majo Gutierrez',
        date: '2025-02-09',
        dateLabel: 'febrero de 2025',
        text: 'Adquirí un servicio mensual con Jhon de posicionamiento SEO y mantenimiento de página web y ha sido un éxito para mí negocio',
      },
      {
        author: 'ximena aya',
        date: '2024-06-20',
        dateLabel: 'junio de 2024',
        text: 'Es súper increíble el trabajo que hace,además tiene en cuenta las necesidades del cliente y desarrolla una excelente estructura y diseño, haciendo que el resultado sea satisfactorio',
      },
      {
        author: 'Sara Torres',
        date: '2024-06-20',
        dateLabel: 'junio de 2024',
        text: 'Obtuve una página con Jhon y a funcionado perfectamente',
      },
      {
        author: 'paula vanessa gutierrez russi',
        date: '2024-06-24',
        dateLabel: 'junio de 2024',
        text: 'Un excelente trabajador, muy responsable en lo que haces mas que todo en lograr siempre lo que te propones',
      },
    ],
  },

  close: {
    h2: '¿Cómo empiezo?',
    answer:
      'Agenda un diagnóstico. Te pregunto por tu tipo de negocio, tu ciudad y cómo llegan hoy tus pacientes. Después recibes una propuesta escrita.',
  },

  footer: {
    line: 'Páginas web y SEO para clínicas de estética, salud y bienestar.',
    place: 'Bogotá, Colombia',
    local: 'Páginas web en Bogotá · Diseño web en Bogotá',
    rights: 'JhonDev',
  },

  faq: [
    {
      q: '¿Por qué una clínica nueva aparece antes que la mía en Google?',
      a: 'Porque Google premia el sitio que mejor responde lo que busca la paciente, no los años en el mercado. Un sitio construido para posicionar puede pasar por delante de una clínica con más trayectoria.',
    },
    {
      q: '¿Esto sirve para mi tipo de clínica?',
      a: 'Sí, si atiendes pacientes o clientas de estética, salud o bienestar: micropigmentación, tricología, dermatología, consultorios médicos o marcas de bienestar.',
    },
    {
      q: '¿Qué incluye exactamente?',
      a: 'Sitio web a la medida, SEO desde el primer día, IA para WhatsApp y CRM, y posicionamiento mensual en Google.',
    },
    {
      q: '¿Cómo sé que voy a aprobar lo que pago?',
      a: 'Son tres entregas y no pagas ninguna hasta aprobarla.',
    },
    {
      q: '¿El dominio queda a mi nombre?',
      a: 'Sí. El dominio y los accesos quedan a nombre de la clienta.',
    },
  ],
};

export type Content = typeof es;
