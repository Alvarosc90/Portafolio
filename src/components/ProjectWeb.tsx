import image1 from '../images/react.png';
import image2 from '../images/javascript.png';
import image7 from '../images/css.webp';
import image8 from '../images/html.webp';
import image9 from '../images/node.png';
import image10 from '../images/database.png';
import image13 from '../images/centralizado1.png';
import image14 from '../images/Comedor1.png';
import image15 from '../images/encuesta1.png';

export type ProjectWebItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  impact: string;
  focus: string[];
  technologiesImages: string[];
};

const ProjectWeb: ProjectWebItem[] = [
  {
    title: 'Sistema Centralizado Capemi',
    category: 'Transformación digital',
    description:
      'Migración funcional de procesos dispersos hacia un sistema interno con interfaces por sector, trazabilidad de reclamos y circuito de tickets.',
    image: image13,
    impact: 'Menos carga manual, mayor visibilidad operativa y soporte por área.',
    focus: ['UX research interno', 'Tickets', 'MSSQL', 'Roles por sector'],
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'Sistema de Clima Laboral',
    category: 'Indicadores internos',
    description:
      'Herramienta para encuestas laborales con autenticación, carga de respuestas, lectura estadística y seguimiento de resultados por gestión.',
    image: image15,
    impact: 'Datos internos listos para interpretar acciones de mejora.',
    focus: ['Encuestas', 'Login', 'React Charts', 'Reportes'],
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'Gestión de Comedor Interno',
    category: 'Automatización operativa',
    description:
      'Sistema para gestionar menú diario, pedidos por empleado, demanda para cocina y entrega mediante lectura de código de barras.',
    image: image14,
    impact: 'Pedidos ordenados, demanda diaria clara y circuito de entrega controlado.',
    focus: ['Código de barras', 'Menús', 'Demanda', 'Operación diaria'],
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
];

export default ProjectWeb;
