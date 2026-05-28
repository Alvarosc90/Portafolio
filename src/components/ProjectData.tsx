import image10 from '../images/visualization.png';
import image11 from '../images/Rio.png';
import image12 from '../images/sales.png';
import image13 from '../images/diabetes.png';
import image14 from '../images/python.webp';
import image15 from '../images/data.png';
import image9 from '../images/excel.webp';

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
    technologiesImages: [image10, image9],
  },
  {
    title: 'Análisis de Bullying en Río Cuarto',
    category: 'Análisis social',
    description:
      'Exploración de datos sobre violencia ejercida en estudiantes para detectar patrones y comunicar hallazgos accionables.',
    url: 'https://github.com/Alvarosc90/Rio-Cuarto-Analisis',
    image: image11,
    impact: 'Datos convertidos en lectura comprensible para orientar acciones.',
    focus: ['Exploración', 'Visualización', 'Power BI', 'Excel'],
    technologiesImages: [image10, image9],
  },
  {
    title: 'Análisis de Ventas',
    category: 'Performance comercial',
    description:
      'Proyecto de análisis de ventas para interpretar comportamiento, volumen, tendencias y oportunidades de mejora.',
    url: 'https://github.com/Alvarosc90/Pasantia-MeriSKILL/tree/main/Project%201%20-%20Sales%20Data%20Analysis',
    image: image12,
    impact: 'Información comercial sintetizada para seguimiento y decisión.',
    focus: ['Ventas', 'Dashboards', 'Excel', 'Power BI'],
    technologiesImages: [image10, image9],
  },
  {
    title: 'Análisis de Diabetes',
    category: 'Datos y salud',
    description:
      'Análisis de datos con Power BI y Python para explorar variables, relaciones y segmentos dentro del dataset.',
    url: 'https://github.com/Alvarosc90/Pasantia-MeriSKILL/tree/main/Project%202%20-%20Diabetes%20Data',
    image: image13,
    impact: 'Cruce de variables y visualizaciones para comprender patrones de riesgo.',
    focus: ['Python', 'Power BI', 'Limpieza', 'Insights'],
    technologiesImages: [image10, image14, image9],
  },
  {
    title: 'Baseball Data Analysis',
    category: 'Ciencia de datos',
    description:
      'Análisis exploratorio y modelado con librerías de Python para estudiar rendimiento de jugadores.',
    url: 'https://github.com/Alvarosc90/DataAnalisis/blob/main/tp_flnal%2C_alvaro_r_soria_casali.py',
    image: image15,
    impact: 'Práctica aplicada de exploración, visualización y análisis predictivo.',
    focus: ['Python', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    technologiesImages: [image14],
  },
];

export default ProjectData;
