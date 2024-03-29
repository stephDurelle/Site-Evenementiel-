'use client'
import React, { Fragment } from 'react'
import Styles from './evenement.module.css'
import CardComponent from '../components/cardComponent/CardComponent'

const Evenements = () => {
  return (
    <Fragment> 

    <div className={Styles.Container}>
        <div className={Styles.titreContainer}>
            <h1> Events and Things to do in Ottawa</h1>
        </div>
       
        <div className={Styles.position}>
  <CardComponent topCard= {<img src="/image1/image2.jpg" alt="Avatar"/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar1.jpg" alt="Avatar"/>}  Name= " CandleLight" description=" Discover Candlelight concerts! The best candlelight concerts with live performances in Ottawa's most beautiful venues. " link= "/event1" />

  <CardComponent topCard= {<img src="/avatar/avatar4.jpg "/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar2.jpg" alt="Avatar"/>} Name= " Indulge in Love's Flavor" description=" Join us on this special day as we craft a menu that celebrates the essence of love, blending exquisite flavors and passion in every dish." link="/event2" />

  <CardComponent topCard= {<img src="/image1/concert.jpg "/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar3.jpg" alt="Avatar"/>} Name= " Feel the Rhythm, Live the Magic: Taylor Swift in Concert!" description="Join us for an unforgettable journey through Taylor's iconic hits and soul-stirring melodies. " link="/event3" />
 
        </div>


    <div>

    <div className={Styles.position}>
  <CardComponent topCard= {<img src="/ImageIntro/Image3.jpg" alt="OeuvreAfrricaine"/>} hasAvatar= {true} imageAvatar= {<img src="/ImageIntro/image2.jpeg" alt="Avatar"/>}  Name= "Art Africain 🌍" description="Plongez dans un voyage artistique à travers les cultures et les paysages vibrants de l'Afrique. Notre exposition d'œuvres et de peintures africaines vous invite à découvrir la diversité, la beauté et la profondeur de l'art africain contemporain." link= "/event4" />
.
  <CardComponent topCard= {<img src="/ImageIntro/Image4.jpg "/>} hasAvatar= {true} imageAvatar= {<img src="/ImageIntro/Image1.jpg" alt="Avatar"/>} Name= " Art Contemporain Inspiré par les Maîtres Classiques!🖼️" description="Plongez dans un monde où l'art classique rencontre l'expression contemporaine dans une fusion saisissante de tradition et d'innovation." link="/event5" />

  <CardComponent topCard= {<img src="/ImageIntro/Image12.jpeg "/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar2.jpg" alt="Avatar"/>} Name= "Royaume de l'Amour et de l'Élégance!💐" description="Entrez dans un monde où chaque détail scintille de romance et de sophistication. Nos salles de mariages décorées avec soin vous transporte dans un univers de beauté et de féerie." link="/event6" />
 
        </div>
    </div>
  
<div>

<div className={Styles.position}>
  <CardComponent topCard= {<img src="/ImageIntro/Image18.jpg" alt="Animes"/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar1.jpg" alt="Avatar"/>}  Name= " Monde Animes" description="Préparez-vous à plonger dans une expérience immersive et captivante lors de notre Fête de l'univers des Animes" link= "/event7" />

  <CardComponent topCard= {<img src="/ImageIntro/Image22.jpeg "/>} hasAvatar= {true} imageAvatar= {<img src="/ImageIntro/Image23.jpeg" alt="Spa"/>} Name= "Détente Royale au Spa Kana" description="Préparez-vous à vivre une expérience de détente et de luxe exceptionnelle au Spa Kana ! 💆‍♀️💆‍♂️ Pendant une durée limitée, nous vous offrons une réduction de 20% sur tous nos forfaits spa." link="/event8" />

  <CardComponent topCard= {<img src="/image1/concert.jpg "/>} hasAvatar= {true} imageAvatar= {<img src="/avatar/avatar3.jpg" alt="Avatar"/>} Name= " Feel the Rhythm, Live the Magic: Taylor Swift in Concert!" description="Join us for an unforgettable journey through Taylor's iconic hits and soul-stirring melodies. " link="/event9" />
 
        </div>
</div>

    </div>

    
  
        </Fragment>
  

  )
}

export default Evenements