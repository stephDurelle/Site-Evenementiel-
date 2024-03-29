'use client'
import React, { Fragment } from 'react'
import Styles from './event7.module.css'
const event7 = () => {
  return (
    <Fragment>
        <div className={Styles.Contain}>
        <div className={Styles.Container}>
   <div className={Styles.imageContainer}>
      <img src='./ImageIntro/Image20.jpeg' alt='SalleMariage' width={350} height={200}/>
      <div className={Styles.title1}>
        <h2>🎉 L'univers fascinant des Animes 💐</h2>
      </div>
    </div>

    <div className={Styles.textContainer}>
      <div className={Styles.title2}>
        <h1>Une Odyssée Épique à Travers les Univers Nippons" 🎉 </h1>
      </div>
      <div className={Styles.text}>
        <div className={Styles.text2}>
        ⭐🎉 Préparez-vous à plonger dans une expérience immersive et captivante lors de notre "Fête des Mondes Animés" ! 🌟 Cet événement exceptionnel vous fera découvrir les univers passionnants de vos animes préférés, du légendaire SNK 🔥 aux intrigues palpitantes de Jujutsu Kaisen 🔮 et Demon Slayer 🗡️.
        <br/> 
        </div>
        <br/>
        <div className={Styles.title3}>🌟 Points Forts de l'Evènement :</div>
        <ul>
          <li>🕯️🎩💎 Plongez dans une ambiance d'élégance intemporelle lors de notre festival d'animes. Des chandeliers étincelants aux drapés somptueux, chaque élément de décoration a été soigneusement sélectionné pour créer une atmosphère de luxe et de sophistication.</li> <br/>
          <li>💐🕯️💕 Laissez-vous envoûter par les touches délicates de romance qui parsèment la salle. Des bouquets de fleurs fraîches aux bougies scintillantes, chaque détail est conçu pour éveiller vos émotions les plus profondes et vous faire vivre des souvenirs magiques.</li> <br/>
          <li>🍿🎬🎞️ Nos salles de cinéma projetteront une sélection soigneusement choisie de chefs-d'œuvre de l'animation japonaise, tels que SNK, Blue Lock, Jujutsu Kaisen, Demon Slayer et Tokyo Ghoul. 🎥 Plongez-vous dans leurs récits épiques et laissez-vous transporter dans ces univers captivants.</li> <br/>
        </ul>
        <p>🤝🎨🎉 Mais ce n'est pas tout ! Préparez-vous à relever un défi captivant avec notre "Chasse au Trésor Naruto Shippuden", 🗺️ une aventure ludique qui vous fera suivre les traces de vos personnages favoris. Que vous soyez un fan inconditionnel 💖 ou un néophyte curieux, 🤔 cette expérience d'élégance et de romance animée saura vous émerveiller et vous faire vivre une expérience inoubliable. 🎢</p> <br/>
        <div className={Styles.title3}> ✨ Rejoignez-nous pour une célébration qui restera gravée dans les mémoires pour les années à venir !✨</div>
      </div>  
        </div>
  </div>

   {/* Conteneur pour le texte en haut à droite */}
   <div className={Styles.container2}>
        <div className={Styles.textContainer2}>
          <ul className={Styles.ul}>
            <li className={Styles.li}><span className={Styles.bold0}>Select date and session</span></li>
            <li className={Styles.li}><span className={Styles.bold1}>Thu <br/> 11May 7PM </span></li>
            <li className={Styles.li}><span className={Styles.bold}>Zone C</span> $35.00</li>
            <li className={Styles.li}><span className={Styles.bold}>Zone B</span> $45.00 + $4.00 <br/> booking fee</li>
            <li className={Styles.li}><span className={Styles.bold}>Zone A</span> $65.00 + $5.77 <br/> booking fee</li>
            <li className={Styles.li}><span className={Styles.bold}> - 1ticket + </span>  </li>
            <li className={Styles.li}><button className={Styles.button}> Get </button></li>
          </ul>
        </div>
      </div>
        </div>
    </Fragment>
  )
}

export default event7