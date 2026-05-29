import { motion } from 'framer-motion';
import ProfilePic from '../images/PortafolioProfile1.webp';
import '../styles/profileStyles.css';

const ProfileImageWrapper = () => {
  return (
    <motion.figure
      className="profile-figure"
      initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className="profile-image-container">
        <img className="profile-image" src={ProfilePic} alt="Álvaro Soria" />
      </div>
    </motion.figure>
  );
};

export default ProfileImageWrapper;
