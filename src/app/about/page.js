'use client'
import React, { Fragment } from 'react'
import Styles from './about.module.css'
const About = () => {
  return (
    <Fragment>
        <div className={Styles.aboutContainer}>
    <h2 className={Styles.titre}>À Propos d'Aurore</h2>
    <p>Aurore est une entreprise dynamique et passionnée spécialisée dans l'organisation d'événements uniques et mémorables à Ottawa. Notre mission est de créer des expériences exceptionnelles qui captivent, inspirent et laissent une empreinte durable dans les souvenirs de nos clients.</p>

    <h3>Notre Engagement</h3>
    <p>Chez Aurore, nous croyons en la puissance des moments partagés. Chaque événement que nous organisons est une occasion de célébrer, de rassembler et de créer des souvenirs inoubliables. Nous nous engageons à fournir un service haut de gamme, une attention méticuleuse aux détails et une créativité sans limites pour donner vie à vos rêves d'événements.</p>

    <h3 className={Styles.titre}>Nos Services</h3>
    <ul>
      <li>Planification d'événements sur mesure</li>
      <li>Gestion d'événements professionnelle</li>
      <li>Expériences uniques</li>
    </ul>

    <h3 className={Styles.titre}>Contactez-Nous</h3>
    <p>Pour en savoir plus sur nos services ou pour commencer à planifier votre prochain événement, n'hésitez pas à nous contacter :</p>
    <ul>
      <li>Téléphone : 255 555 xxxxx</li>
      <li>E-mail : aurore@email.ca</li>
      <li>Adresse : J4B 3BP</li>
    </ul>

    <h3 className={Styles.titre}>Suivez-nous sur les Réseaux Sociaux</h3>
    <p>Restez connecté avec Aurore sur les réseaux sociaux pour les dernières nouvelles, les mises à jour d'événements et les coulisses exclusives :</p>
    <ul className={Styles.socialLinks}>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">YouTube</a></li>
      <li><a href="#">TikTok</a></li>
    </ul>
  </div>
    </Fragment>
  )
}

export default About