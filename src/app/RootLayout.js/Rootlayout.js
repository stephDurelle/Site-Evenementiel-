// RootLayout.js

import React from 'react';
import FooterPage from './components/footer/FooterPage';
import Navbar from './components/navbar/Navbar';
import styles from './RootLayout.module.css'; // Créez ce fichier CSS pour gérer les styles du layout

const RootLayout = ({ children }) => {
  return (
    <div className={styles['root-layout']}>
      <Navbar />
      <div className={styles['content-container']}>
        {children}
      </div>
      <FooterPage />
    </div>
  );
}

export default RootLayout;
