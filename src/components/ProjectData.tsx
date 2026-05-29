import image10 from '../images/visualization.png';
import image11 from '../images/Rio.png';
import image12 from '../images/sales.png';
import image13 from '../images/diabetes.png';
import image15 from '../images/data.png';

export type ProjectDataItem = {
  title: string;
  category: string;
  description: string;
  url?: string;
  image: string;
  impact: string;
  focus: string[];
  technologiesImages: string[];
};

const ProjectData: ProjectDataItem[] = [
  {
    title: 'Tableros de Gestión Power BI',
    category: 'Business intelligence',
    description:
      'Diseño y automatización de indicadores para seguimiento operativo, lectura de desvíos y soporte a la toma de decisiones.',
    image: image10,
    impact: 'Gestión con métricas visibles, menos reportes manuales y mejor priorización.',
    focus: ['Power BI', 'KPIs', 'Automatización', 'Seguimiento'],
    technologiesImages: [image10],
  },
  {
    title: 'Registros para el seguimiento de maquinas y estado de mantenimiento',
    category: 'Análisis de Mantenimiento correctivo y preventivo',
    description:
      'KPIs para seguimiento de máquinas, análisis de fallas, planificación de mantenimiento preventivo y soporte a decisiones operativas.',
    image: image11,
    impact: 'Datos convertidos en lectura comprensible para orientar acciones.',
    focus: ['Exploración', 'Visualización', 'Power BI', 'Excel'],
    technologiesImages: [image10],
  },
  {
    title: 'Análisis de Piezas Granalladas',
    category: 'Performance productiva',
    description:
      'Seguimiento de piezas granalladas con indicadores de rendimiento, análisis de causas de rechazo y soporte a mejoras en el proceso productivo.',
    image: image12,
    impact: 'Información comercial sintetizada para seguimiento y decisión.',
    focus: ['Ventas', 'Dashboards', 'Excel', 'Power BI'],
    technologiesImages: [image10],
  },
  {
    title: 'Control de fallos en maquinas de produccion',
    category: 'Control de fallas',
    description:
      'Análisis de fallos en máquinas de producción con indicadores de rendimiento, análisis de causas y soporte a mejoras en el proceso productivo.',
    image: image13,
    impact: 'Cruce de variables y visualizaciones para comprender patrones de riesgo.',
    focus: ['Python', 'Power BI', 'Limpieza', 'Insights'],
    technologiesImages: [image10],
  },
  {
    title: 'Control de actividades Diarias del personal de la empresa',
    category: 'Control de actividades',
    description:
      'gestion de actividades diarias del personal de la empresa.',
    image: image15,
    impact: 'Mejor control de actividades de empleados .',
    focus: ['Python', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    technologiesImages: [image10],
  },
];

export default ProjectData;
