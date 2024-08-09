import image10 from '../images/visualization.png';
import image11 from '../images/Rio.png';
import image12 from '../images/sales.png';
import image13 from '../images/diabetes.png';
import image14 from '../images/python.webp';
import image15 from '../images/data.png';
import image9 from '../images/excel.webp';


export type ProjectDataItem = {
  title: string;
  description: string;
  url: string;
  image: string;
  technologiesImages: string[]; // Cambia a un array de rutas de imágenes
};

const ProjectData: ProjectDataItem[] = [
  {
    title: 'Analisis de Bulliyng en Rio Cuarto',
    description: 'Analisis de la violencia ejercida en estudiantes de escuela para el datathon 2014',
    url: 'https://github.com/Alvarosc90/Rio-Cuarto-Analisis',
    image: image11,
    technologiesImages: [image10,image9],
},
{
  title: 'Analisis de Ventas',
  description: 'Analisis de ventas realizado en la pasantia de Merskill',
  url: 'https://github.com/Alvarosc90/Pasantia-MeriSKILL/tree/main/Project%201%20-%20Sales%20Data%20Analysis',
  image: image12,
  technologiesImages: [image10,image9],
},
{
  title: 'Analisis de Diabetes',
  description: 'Analisis de personas con diabetes realizado para la pasantia con Meriskill donde uso PowerBI junto con Python',
  url: 'https://github.com/Alvarosc90/Pasantia-MeriSKILL/tree/main/Project%202%20-%20Diabetes%20Data',
  image: image13,
  technologiesImages: [image10,image14,image9],
}
,
{
  title: 'Analisis a Jugadores de Baseball',
  description: 'Analisis profundo aplicando distintas librerias como matplitlib, seaborn, y sktlearn, para la entrega final del curso de ciencia de datos',
  url: 'https://github.com/Alvarosc90/DataAnalisis/blob/main/tp_flnal%2C_alvaro_r_soria_casali.py',
  image: image15,
  technologiesImages: [image14],
}
];

export default ProjectData;
