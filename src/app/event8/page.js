'use client'
import React, { Fragment } from 'react'
import Styles from './event8.module.css'
const Event8 = () => {
  return (
    <Fragment>
         <div className={Styles.Contain}>
         <div className={Styles.Container}>
   <div className={Styles.imageContainer}>
      <img src='./ImageIntro/Image24.jpeg' alt='SalleMariage' width={350} height={200}/>
      <div className={Styles.title1}>
        <h2>🛀 Détente Royale au Spa Kana 🏰</h2>
      </div>
    </div>

    <div className={Styles.textContainer}>
      <div className={Styles.title2}>
        <h1>Une Détente incroyable dans votre Spa préfére 🎉 </h1>
      </div>
      <div className={Styles.text}>
        <div className={Styles.text2}>
        <p> ⭐🎉 Préparez-vous à vivre une expérience de détente et de luxe exceptionnelle au Spa Koena ! 💆‍♀️💆‍♂️ Pendant une durée limitée, nous vous offrons une réduction de 20% sur tous nos forfaits spa.</p>
        <br/> <p> 💰 Mais ce n'est pas tout ! Un couple 👩‍❤️‍👨 et une famille de 5 personnes 👨‍👩‍👧‍👧 auront la chance de remporter un accès complet et gratuit à l'ensemble de nos installations. 🎉 </p><br/>
        </div>
        
        <div className={Styles.title3}>🌟 Points Forts de l'Evènement :</div>
        <ul>
          <li>🕯️🎩💎  Plongez dans une atmosphère d'élégance et de sérénité, entouré de nos installations haut de gamme.</li> <br/>
          <li>💐🕯️💕  Laissez-vous envoûter par les touches délicates de romance qui parsèment la salle. Des bouquets de fleurs fraîches aux bougies scintillantes, chaque détail est conçu pour éveiller vos émotions les plus profondes et vous faire vivre des souvenirs magiques.</li> <br/>
          <li>🛀🧖‍♀️🧖‍♂️ Profitez de nos soins relaxants, de nos bassins d'eau chaude et de nos espaces de bien-être pour vous ressourcer pleinement. Que vous soyez en couple ou en famille, cette expérience sera inoubliable. 💫 </li> 
          <br/>
        </ul>
        <br/>
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

export default Event8