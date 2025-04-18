// src/components/ProjectData.tsx
import image1 from '../images/react.png';
import image2 from '../images/javascript.png';
import image7 from '../images/css.webp';
import image8 from '../images/html.webp';
import image9 from '../images/node.png';
import image10 from '../images/database.png';
import image11 from '../images/1.png';
import image12 from '../images/omnidate.png';
import image13 from '../images/centralizado1.png';
import image14 from '../images/Comedor1.png';
import image15 from '../images/encuesta1.png';

export type ProjectDataItem = {
  title: string;
  description: string;
  image: string;
  url: string;
  technologiesImages: string[];
};

const ProjectData: ProjectDataItem[] = [
  {
    title: 'Sistema de Clima Laboral',
    description: 'Sistema interno para encuestas laborales.',
    image: image15,
    url: 'https://example.com/clima-laboral',
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'Sistema para Comedor',
    description: 'Sistema de gestión de menú diario para empleados.',
    image: image14,
    url: 'https://example.com/comedor',
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'Sistema Centralizado',
    description: 'Sistema CRUD de control para CAPEMI.',
    image: image13,
    url: 'https://example.com/centralizado',
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'Sistema de Seguros',
    description: 'Sistema MERN para empresa de seguros.',
    image: image11,
    url: 'https://example.com/seguros',
    technologiesImages: [image1, image2, image7, image8, image9, image10],
  },
  {
    title: 'LandingPage para Consultora de Data',
    description: 'Landing para consultora.',
    image: image12,
    url: 'https://example.com/data',
    technologiesImages: [image1, image7, image8],
  },
];

export default ProjectData;
