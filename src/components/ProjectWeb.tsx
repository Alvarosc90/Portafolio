import image1 from '../images/react.png'; // Ajusta la ruta y nombre de las imágenes según tus archivos
import image2 from '../images/javascript.png';
import image3 from '../images/trello.png';
import image4 from '../images/Encript.png';
import image5 from '../images/horizon.png';
import image6 from '../images/GuitarLA.png';
import image7 from '../images/css.webp';
import image8 from '../images/html.webp';
import image9 from '../images/node.png';
import image10 from '../images/database.png';
import image11 from '../images/1.png';
import image12 from '../images/omnidate.png';

export type ProjectDataItem = {
    title: string;
    description: string;
    url: string;
    image: string;
    technologiesImages: string[]; // Cambia a un array de rutas de imágenes
  };
  
  const ProjectData: ProjectDataItem[] = [
    {
      title: 'Sistema de control para empesa de seguros',
      description: 'Sistema CRUD para empresa de seguros,usando JWT, Cokieparser, use MERN para la realizacion del proyecto de la empresa, para el front use JS, y React',
      url: 'Privado',
      image: image11,
      technologiesImages: [image1, image2,image7, image8, image9, image10], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'LandingPage para Consultora de data',
      description: 'Promocion de servicios de una consultora de Data, realizado con react',
      url: 'https://omni-data.vercel.app/',
      image: image12,
      technologiesImages: [image1,image7, image8], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Carrito de Compras',
      description: 'Carrito de Compras Realizado con React y Typescript',
      url: 'https://github.com/Alvarosc90/GuitarCarrito',
      image: image6,
      technologiesImages: [image1, image2,image7, image8], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Encriptador',
      description: 'Encriptador Realizado para el Challenge de Oracle ONE',
      url: 'https://github.com/Alvarosc90/Encriptador',
      image: image4,
      technologiesImages: [image2,image7,image8],
    },
    {
      title: 'E-Commerce "Horizon X"',
      description: 'E-Commerce Realizado para el proyecto final de Digital House',
      url: 'https://github.com/Alvarosc90/E-commerce',
      image: image5,
      technologiesImages: [image1, image2, image3,image7,image8,image9],
    }
  ];
  
  export default ProjectData;
  