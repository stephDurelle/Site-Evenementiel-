import React from 'react'
import Styles from './contact.module.css'
const Contact = () => {
  return (
    <div className={Styles.contactContainer}>
    <h2 className={Styles.titre}>Contactez-nous</h2>
    <p>Nous sommes ravis de pouvoir répondre à toutes vos questions, suggestions ou demandes de renseignements. N'hésitez pas à nous contacter via l'une des méthodes suivantes :</p>

    <div className={Styles.contactInfo}>
      <div>
        <h3 className={Styles.titre}>Par téléphone :</h3>
        <p>Téléphone : 255 555 xxxxx</p>
      </div>

      <div>
        <h3 className={Styles.titre}>Par e-mail :</h3>
        <p>Adresse e-mail : aurore@email.ca</p>
      </div>

      <div>
        <h3 className={Styles.titre}>Adresse postale :</h3>
        <p> J4B 3BP</p>
      </div>
    </div>

    <h3 className={Styles.titre}>Formulaire de contact :</h3>
    <p>Si vous préférez, vous pouvez également remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

    <form className={Styles.contactForm}>
      <label htmlFor="name">Nom :</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Adresse e-mail :</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message :</label>
      <textarea id="message" name="message"></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
  )
}

export default Contact