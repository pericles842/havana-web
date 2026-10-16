// Datos del taller. Todo lo marcado con TODO es provisional: reemplazar con los datos reales de la clienta.

// Fotos de stock de Pexels (licencia libre). TODO: sustituir por fotos reales del taller cuando existan.
import fotoTaller from '../assets/photos/pexels-6461088.jpg';
import telaPana from '../assets/photos/tela-pana-6276044.jpg';
import telaVioleta from '../assets/photos/tela-violeta-11871838.jpg';
import telaMagenta from '../assets/photos/tela-magenta-11871840.jpg';
import telaSaten from '../assets/photos/tela-saten-8793879.jpg';
import fotoMaquina from '../assets/photos/pexels-7147619.jpg';
import fotoManos from '../assets/photos/pexels-5830691.jpg';
import fotoOverlock from '../assets/photos/pexels-7998347.jpg';
import fotoCostura from '../assets/photos/pexels-7776123.jpg';
import fotoPrensatelas from '../assets/photos/pexels-3984840.jpg';
import fotoTallerBN from '../assets/photos/pexels-30799287.jpg';

export const photos = {
	about: { src: fotoTaller, alt: 'Modista cortando un patrón sobre la mesa del taller' },
};

export const site = {
	// TODO: dirección real de la web. Se usa en canonical, sitemap, Open Graph y datos estructurados.
	url: 'https://tu-dominio.com',
	name: 'Havana',
	slogan: 'Luce, tu estilo',
	whatsapp: '584242081375', // código de país + número, sin + ni espacios
	whatsappMessage: 'Hola, quiero cotizar...',
	instagram: 'havana.ve',
	phone: '+58 424-2081375',
	address: ['Los Dos Caminos', 'Caracas, Venezuela'], // TODO: confirmar ciudad y añadir calle o referencia exacta
	hours: ['Lunes a viernes', '9:00 a 18:00'], // TODO
};

export const waLink = (message = site.whatsappMessage) =>
	`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const instagramLink = `https://instagram.com/${site.instagram}`;

export const nav = [
	{ href: '#servicios', label: 'Servicios' },
	{ href: '#proceso', label: 'Cómo trabajamos' },
	{ href: '#portafolio', label: 'Portafolio' },
	{ href: '#contacto', label: 'Contacto' },
];

export const services = [
	{
		title: 'Confección a medida',
		text: 'Prendas pensadas para tu marca o tu evento, desde el patrón hasta el último botón.',
		tags: ['Patronaje', 'Prototipos', 'Piezas únicas'],
		photo: telaPana,
		alt: 'Tela de pana azul marino en primer plano',
	},
	{
		title: 'Producción por lote',
		text: 'Uniformes, ropa de marca y dotación con la misma calidad en cada pieza.',
		tags: ['Uniformes', 'Ropa de marca', 'Dotación'],
		photo: telaVioleta,
		alt: 'Tejido violeta en primer plano',
	},
	{
		title: 'Arreglos y ajustes',
		text: 'Ruedos, entalles, cierres y cambios de talla para que la prenda te quede bien.',
		tags: ['Ruedos', 'Entalles', 'Cierres'],
		photo: telaMagenta,
		alt: 'Tejido magenta en primer plano',
	},
	{
		title: 'Bordado y estampado',
		text: 'Tu logo en camisas, gorras y delantales para que tu equipo se vea como marca.',
		tags: ['Logos', 'Personalización'],
		photo: telaSaten,
		alt: 'Satén color ciruela con pliegues',
	},
];

export const steps = [
	{
		step: 'Contacto',
		title: 'Nos escribes',
		text: 'Nos cuentas qué necesitas por WhatsApp o con el formulario: tipo de prenda, cantidad y para cuándo.',
		piece: 'DELANTERO',
		d: 'M70 30 L190 18 Q200 70 246 82 L258 300 Q160 326 74 314 L44 160 Z',
	},
	{
		step: 'Cotización',
		title: 'El presupuesto',
		text: 'Te enviamos precio, tela sugerida y tiempos por escrito, para que decidas con calma.',
		piece: 'ESPALDA',
		d: 'M44 34 Q140 14 250 44 Q226 98 258 140 L248 316 L52 312 Z',
	},
	{
		step: 'Muestra',
		title: 'La muestra',
		text: 'Cosemos una pieza de prueba para revisar tela, talla y acabados antes de producir.',
		piece: 'MANGA',
		d: 'M150 22 Q258 28 266 124 L238 318 L64 318 L36 124 Q44 28 150 22 Z',
	},
	{
		step: 'Producción y entrega',
		title: 'La entrega',
		text: 'Producimos el lote, revisamos cada pieza y te la entregamos en la fecha acordada.',
		piece: 'BOLSILLO',
		d: 'M60 50 L240 50 L248 250 L150 304 L52 250 Z',
	},
];

// TODO: confirmar mínimos y tiempos con la clienta
export const orders = [
	{ item: 'Confección a medida', value: 'desde 1 pieza' },
	{ item: 'Producción por lote', value: 'desde 12 piezas' },
	{ item: 'Muestra o prototipo', value: '5 a 7 días' },
	{ item: 'Lote de producción', value: '2 a 4 semanas' },
	{ item: 'Arreglos y ajustes', value: '24 a 72 horas' },
];

// TODO: testimonio real
export const testimonial = {
	quote: 'Hicieron los uniformes de todo el equipo y cada talla llegó perfecta. Ya les pedimos la segunda tanda.',
	author: 'Nombre del cliente, Marca',
};

// TODO: cifras reales
export const stats = [
	{ value: '10', label: 'años cosiendo para marcas' },
	{ value: '1', label: 'muestra antes de producir' },
	{ value: '100%', label: 'piezas revisadas a mano' },
];

// TODO: reemplazar por fotos de trabajos reales de la clienta (y añadir antes/después de arreglos)
export const portfolio = [
	{ caption: 'Costura recta · acabado', size: 'tall', photo: fotoMaquina, alt: 'Prensatelas cosiendo una tela clara' },
	{ caption: 'Remallado · prenda negra', size: '', photo: fotoOverlock, alt: 'Costurera pasando una prenda negra por la remalladora' },
	{ caption: 'Detalle · hilvanado', size: 'tall', photo: fotoManos, alt: 'Manos sujetando una tela bajo la máquina de coser' },
	{ caption: 'Confección · prototipo', size: '', photo: fotoCostura, alt: 'Sastre cosiendo una pieza en máquina' },
	{ caption: 'El taller · mesa de corte', size: 'wide', photo: fotoTallerBN, alt: 'Mesa de corte de un taller en blanco y negro' },
	{ caption: 'Costura · pieza de lote', size: '', photo: fotoPrensatelas, alt: 'Manos guiando una tela en la máquina de coser' },
];

export const faqs = [
	{
		q: '¿Trabajan con pedidos pequeños?',
		a: 'Sí. Hacemos piezas a medida desde una unidad y lotes de producción a partir de un mínimo que te confirmamos al cotizar.',
	},
	{
		q: '¿Cuánto tarda un pedido?',
		a: 'Depende de la cantidad y la prenda. Una muestra suele estar en una semana y un lote entre dos y cuatro semanas.',
	},
	{
		q: '¿Puedo llevar mi propia tela?',
		a: 'Claro. También podemos recomendarte y conseguir la tela adecuada para el uso que le vas a dar.',
	},
	{
		q: '¿Pueden copiar una prenda que ya tengo?',
		a: 'Sí. Tráenos la prenda o envíanos fotos y medidas, y sacamos el patrón a partir de ella.',
	},
	{
		q: '¿Hacen envíos fuera de la ciudad?',
		a: 'Coordinamos la entrega contigo al cotizar. Escríbenos y vemos la mejor opción para tu pedido.',
	},
];
