'use client'
import React, { Fragment } from 'react'
import Styles from './event6.module.css'
const Event6 = () => {
  return (
    <Fragment>
        <div className={Styles.Contain}>
        <div className={Styles.Container}>
   <div className={Styles.imageContainer}>
      <img src='./ImageIntro/Image11.jpeg' alt='SalleMariage' width={350} height={200}/>
      <div className={Styles.title1}>
        <h2>💍 Bienvenue dans le Royaume de l'Amour et de l'Élégance ! 💐</h2>
      </div>
    </div>

    <div className={Styles.textContainer}>
      <div className={Styles.title2}>
        <h1>le Royaume de l'Amour et de l'Élégance !</h1>
      </div>
      <div className={Styles.text}>
        <div className={Styles.text2}>
        ⭐💍💐 Entrez dans un monde où chaque détail scintille de romance et de sophistication. Notre salle de mariage décorée avec soin vous transporte dans un univers de beauté et de féerie, où chaque coin et recoin est imprégné de l'esprit de l'amour et de la célébration.
        <br/> 
        </div>
        <br/>
        <div className={Styles.title3}>🌟 Points Forts de l'Exposition :</div>
        <ul>
          <li>🕯️🎩💎 Élégance Intemporelle : Découvrez une décoration qui marie avec harmonie le classique et le contemporain, créant ainsi une ambiance d'une élégance intemporelle. Des chandeliers étincelants aux drapés somptueux, chaque élément est soigneusement sélectionné pour créer une atmosphère de luxe et de sophistication.</li> <br/>
          <li>💐🕯️💕 Touches de Romance : Laissez-vous envoûter par les touches délicates de romance qui parsèment la salle, des bouquets de fleurs fraîches aux bougies scintillantes. Chaque détail est conçu pour éveiller les émotions les plus profondes et créer des souvenirs magiques pour les mariés et leurs invités.</li> <br/>
          <li>🤝🎨🎉 Personnalisation Attentionnée : Nous croyons en la magie de la personnalisation, c'est pourquoi nous travaillons en étroite collaboration avec les mariés pour donner vie à leur vision de mariage idéal. Chaque élément de décoration est pensé et conçu selon leurs désirs, créant ainsi une expérience véritablement unique et mémorable.</li> <br/>
         
        </ul>
        <p> Que vous rêviez d'une cérémonie intime et romantique ou d'une réception somptueuse et grandiose, notre salle de mariage décorée est l'endroit idéal pour donner vie à vos rêves les plus chers.</p> <br/>
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

export default Event6