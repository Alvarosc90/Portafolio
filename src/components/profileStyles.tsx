import React from 'react';
import '../styles/profileStyles.css'; // Importa el archivo de estilos CSS
import ProfilePic from '../images/PortafolioProfile1.webp'; // Importa la imagen desde tu directorio de imágenes

const ProfileImageWrapper: React.FC = () => {
  return (
    <section className="section-container1">
      <div className="profile-image-container">
        <img className="profile-image" src={ProfilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default ProfileImageWrapper;
