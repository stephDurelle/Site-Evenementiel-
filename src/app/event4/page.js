'use client'
import Styles from './event4.module.css'
import React, { Fragment } from 'react'

const Event4 = () => {
  return (
    <Fragment>
<div className={Styles.Contain}>

<div className={Styles.container}>
    <div className={Styles.imageContainer}>
      <img src='./ImageIntro/Image0.jpg' alt='ArtAfricain' width={200} height={200}/>
      <div className={Styles.title1}>
        <h2>🎨 Explorez la Richesse de l'Art Africain ! 🌍</h2>
      </div>
    </div>
    <div className={Styles.textContainer}>
     
      <div className={Styles.title2}>
        <h1>Art Africain</h1>
      </div>
      <div className={Styles.text}>
        <div className={Styles.text2}>
        ⭐ Plongez dans un voyage artistique à travers les cultures et les paysages vibrants de l'Afrique. Notre exposition d'œuvres et de peintures africaines vous invite à découvrir la diversité, la beauté et la profondeur de l'art africain contemporain.
        <br/> <p>
        🖼️ À travers des toiles magistralement peintes, des sculptures éloquentes et des créations artistiques uniques, nos artistes captivent l'esprit et stimulent l'imagination. Chaque œuvre raconte une histoire, témoignant de l'héritage culturel riche et de la créativité sans bornes de l'Afrique.
        </p>
        </div>
        <br/>
        <div className={Styles.title3}>🌟 Points Forts de l'Exposition :</div>
        <ul>
          <li>🎨✨🌈 Vibrantes Couleurs et Motifs : Laissez-vous séduire par l'éclat des couleurs et la complexité des motifs qui caractérisent l'art africain. Des nuances chaudes du désert aux nuances luxuriantes de la jungle, chaque œuvre évoque une palette vivante et captivante.</li> <br/>
          <li>🌍🎭🔮 Expression Culturelle Profonde : Explorez les thèmes profonds et variés qui imprègnent l'art africain, de la spiritualité à la vie quotidienne en passant par les traditions ancestrales. Chaque création révèle une connexion intime avec l'histoire et les valeurs de son peuple.</li> <br/>
          <li>🖌️🎭🖼️ Diversité des Techniques et des Médiums : Admirez la diversité des techniques artistiques utilisées, des peintures à l'huile classiques aux sculptures en bois sculptées à la main, en passant par les textiles tissés avec soin. Chaque pièce est un témoignage de l'habileté et de la créativité de son créateur.</li> <br/>
         
        </ul>
        <p> Que vous rêviez d'une cérémonie intime et romantique ou d'une réception somptueuse et grandiose, notre salle de mariage décorée est l'endroit idéal pour donner vie à vos rêves les plus chers. </p> <br/>
        <div className={Styles.title3}> ✨ Rejoignez-nous pour une célébration qui restera gravée dans les mémoires pour les années à venir ! ✨</div>
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

export default Event4