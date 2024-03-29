'use client'
import React, { Fragment } from 'react'
import styles from './event1.module.css'

const Event1 = () => {
  const [selectedZone, setSelectedZone] = React.useState(null)

  const handleZoneClick = (zone) => {
    setSelectedZone(zone)}
  return (
    <Fragment>
      <div className={styles.Contain}> 
        {/* Conteneur pour le texte en haut à gauche */}
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img src='/image1/image.avif' alt='Candlelight' width={200} height={200}/>
      <div className={styles.title1}>
        <h1>Fever exclusive</h1>
      </div>
      
    </div>
    <div className={styles.textContainer}>
     
      <div className={styles.text}>
        <div className={styles.text2}>
          ⭐ Candlelight concerts bring the magic of a live, multi-sensory musical experience to awe-inspiring locations like never seen before in New York. Get your tickets now to discover the music of Dua Lipa at The Opera House under the gentle glow of candlelight.
        </div>
        <br/>
        <div className={styles.title3}>General Info</div>
        <ul>
          <li>📍 Venue: The Opera House</li>
          <li>📅 Dates and times: select your dates/times directly in the ticket selector</li>
          <li>⏳ Duration: 60 minutes (doors open 60 mins prior to the start time and late entry is not permitted)</li>
          <li>👤 Age requirement: 8 years old or older. Anyone under the age of 16 must be accompanied by an adult</li>
          <li>♿ Accessibility: this venue is ADA compliant</li>
          <li>❓ View the FAQs for this event here</li>
          <li>🪑 Seating is assigned on a first come first served basis in each zone</li>
          <li>🕯️ If you would like to book a private concert (min 15+ people), please click here</li>
          <li>🎻 Check out all the Candlelight concerts in New York</li>
          <li>🎁 To treat your friends and family to a Candlelight gift card, click here</li>
        </ul>
        <div className={styles.title3}>Tentative Program</div>
        <ul>
          <li>• Levitating</li>
          <li>• Future Nostalgia</li>
          <li>• Pretty Please</li>
          <li>• One kiss (ft.Martin Garrix)</li>
          <li>• Physical</li>
          <li>• Scared to be Lonely (ft.Martin Garrix)</li>
          <li>• Hallucinate</li>
          <li>• IDGAF</li>
          <li>• Love Again</li>
          <li>• Boys will be Boys</li>
          <li>• Break My Heart</li>
          <li>• Fever</li>
          <li>• Cold Heart (ft. Elton John)</li>
          <li>• Don't Start Now</li>
          <li>• New Rules</li>
        </ul>
        <div className={styles.title3}>Performers</div>
        <p>• Highline String Quartet</p>
        <div className={styles.title3}>Reviews of Candlelight Concerts</div>
        <ul>
          <li>💬 Awilda R. ⭐⭐⭐⭐⭐: "Wonderful venue... incredible musicians."</li>
          <li>💬 Daisha T. ⭐⭐⭐⭐⭐: "This was great! The talent, the ambiance, the vibe made for a really great evening."</li>
          <li>💬 Daniel V. ⭐⭐⭐⭐⭐: "Absolutely amazing! stellar performance by the musicians and great array of song pieces played. Highly recommend."</li>
        </ul>
       
      </div>
    </div>
  </div>

   {/* Conteneur pour le texte en haut à droite */}
   <div className={styles.container2}>
        <div className={styles.textContainer2}>
          <ul className={styles.ul}>
            <li className={styles.li}><span className={styles.bold0}>Select date and session</span></li>
            <li className={styles.li}><span className={styles.bold1}>Thu <br/> 25Apr 6PM </span></li>
            <li className={`${styles.li} ${selectedZone === 'Zone C' ? styles.selected : ''}`}
                onClick={() => handleZoneClick('Zone C')}><span className={styles.bold}>Zone C</span> $35.00</li>
            <li className={`${styles.li} ${selectedZone === 'Zone B' ? styles.selected : ''}`}
                onClick={() => handleZoneClick('Zone B')}><span className={styles.bold}>Zone B</span> $45.00 + $4.00 <br/> booking fee</li>
            <li className={`${styles.li} ${selectedZone === 'Zone A' ? styles.selected : ''}`}
                onClick={() => handleZoneClick('Zone A')}><span className={styles.bold}>Zone A</span> $65.00 + $5.77 <br/> booking fee</li>
            <li className={styles.li}><span className={styles.bold}> - 1ticket + </span>  </li>
            <li className={styles.li}><button className={styles.button}> Get </button></li>
          </ul>
        </div>

        <div className={styles.title4}>Fever Seating</div>
        <div className={styles.seatingDiagram}>
          {/* Diagramme de couleur */}
        </div>
        <br/>
        <p>Any questions?</p>

      </div>
   
      </div>
</Fragment>    
  )
}

export default Event1