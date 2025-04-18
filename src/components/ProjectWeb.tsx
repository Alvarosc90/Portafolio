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
import image13 from '../images/centralizado1.png';
import image14 from '../images/Comedor1.png';
import image15 from '../images/encuesta1.png';
import image16 from '../images/centralizado2.png';
import image17 from '../images/Comedor2.png';
import image18 from '../images/encuesta2.png';

export type ProjectDataItem = {
  title: string;
  description: string;
  image: string[]; // Ahora es un array de rutas de imágenes
  technologiesImages: string[];
};

  
  const ProjectData: ProjectDataItem[] = [
    {
      title: 'Sistema de Clima Laboral',
      description: 'Realice un software propio de la empresa para la realizacion de encuestas internas, junto con un panel de graficos para visualizar los resultados, se realizo con React, Node , y MMSQL' ,
      image: [image15, image18],
      technologiesImages: [image1, image2,image7, image8, image9, image10], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Sistema para Comedor',
      description: 'Sistema de Control para la correcta administracion del menú diario de los empleados, posee multiples Roles, Use React para el front, Node para el Backend y se usa MSSQL para la administracoin de bases de datos' ,
      image: [image14, image17],
      technologiesImages: [image1, image2,image7, image8, image9, image10], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Sistema Centralizado',
      description: 'Sistema CRUD y de Control para la empresa CAPEMI, posee multiples Roles,Use React para el front, Node para el Backend y se usa MSSQL para la administración de bases de datos, ademas dicha base de datos esta conectada con powerbi ' ,
      image: [image13,image16],
      technologiesImages: [image1, image2,image7, image8, image9, image10], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Sistema de control para empesa de seguros',
      description: 'Sistema CRUD para empresa de seguros,usando JWT, Cokieparser, use MERN para la realizacion del proyecto de la empresa, para el front use JS, y React',
      image: [image11],
      technologiesImages: [image1, image2,image7, image8, image9, image10], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'LandingPage para Consultora de data',
      description: 'Promocion de servicios de una consultora de Data, realizado con react',
      image: [image12],
      technologiesImages: [image1,image7, image8], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Carrito de Compras',
      description: 'Carrito de Compras Realizado con React y Typescript',
      image: [image6],
      technologiesImages: [image1, image2,image7, image8], // Asigna las rutas de las imágenes importadas
    },
    {
      title: 'Encriptador',
      description: 'Encriptador Realizado para el Challenge de Oracle ONE',
      image: [image4],
      technologiesImages: [image2,image7,image8],
    },
    {
      title: 'E-Commerce "Horizon X"',
      description: 'E-Commerce Realizado para el proyecto final de Digital House',
      image: [image5],
      technologiesImages: [image1, image2, image3,image7,image8,image9],
    }
  ];
  
  export default ProjectData;
  