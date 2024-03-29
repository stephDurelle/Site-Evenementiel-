'use client'
import React, { Fragment } from 'react'
import Styles from './event5.module.css'

const Event5 = () => {
  return (
    <Fragment>
<div className={Styles.Contain}>
   <div className={Styles.Container}>
   <div className={Styles.imageContainer}>
      <img src='./ImageIntro/Image5.jpg' alt='ArtStatut' width={200} height={200}/>
      <div className={Styles.title1}>
        <h2>🎨 Explorez l'Art Contemporain Inspiré par les Maîtres Classiques ! 🖼️</h2>
      </div>
    </div>

    <div className={Styles.textContainer}>
      <div className={Styles.title2}>
        <h1>Art Contemporain</h1>
      </div>
      <div className={Styles.text}>
        <div className={Styles.text2}>
        ⭐ Plongez dans un monde où l'art classique rencontre l'expression contemporaine dans une fusion saisissante de tradition et d'innovation. Notre exposition d'œuvres et de peintures contemporaines vous invite à redécouvrir des icônes intemporelles telles que la Mona Lisa à travers le prisme créatif et visionnaire des artistes contemporains.
        <br/> 
        </div>
        <br/>
        <div className={Styles.title3}>🌟 Points Forts de l'Exposition :</div>
        <ul>
          <li>🎨✨🌈 Réinterprétations Audacieuses : Découvrez des réinterprétations audacieuses et captivantes de chefs-d'œuvre classiques, où la Mona Lisa et d'autres figures emblématiques prennent vie dans de nouveaux contextes et avec des perspectives uniques.</li> <br/>
          <li>🌍🎭🔮 Exploration de l'Identité et de la Perception : Plongez dans des œuvres qui explorent les concepts d'identité, de perception et de réalité à travers des regards modernes sur des figures emblématiques de l'histoire de l'art. Chaque pièce invite à une réflexion profonde sur la nature changeante de l'art et de notre propre vision du monde.</li> <br/>
          <li>🖌️🎭🖼️ Diversité des Styles et des Médiums : Admirez une variété de styles artistiques et de techniques, allant de l'abstrait au réalisme, de la peinture à l'huile traditionnelle aux installations multimédias innovantes. Chaque œuvre est une exploration de la créativité sans limites et de l'ingéniosité artistique de son créateur.</li> <br/>
         
        </ul>
        <p> Que vous soyez un amateur d'art traditionnel ou un passionné d'innovation artistique, notre exposition d'œuvres/peintures contemporaines inspirées par des chefs-d'œuvre classiques promet une expérience immersive et stimulante pour tous les amoureux de l'art.</p> <br/>
        <div className={Styles.title3}> ✨  Rejoignez-nous pour découvrir une nouvelle perspective sur les trésors classiques de l'art !  ✨</div>
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

export default Event5