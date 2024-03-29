import React, { Fragment } from 'react'
import styles from './event3.module.css'

const Event3 = () => {
  return (
   
    <Fragment>
      <div className={styles.Contain}>
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img src='./logo/concertTaylor.jpg' alt='Concert' width={200} height={200}/>
      <div className={styles.title1}>
        <h2>Fever exclusive</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
     
      <div className={styles.title2}>
        <h1>A Tribute to Dua Lipa</h1>
      </div>
      <div className={styles.text}>
        <div className={styles.text2}>
        ⭐ Get ready to be enchanted as Taylor Swift takes the stage at the iconic Paris La Défense Arena on Saturday, May 11th, 2024, at 7:00 PM. Experience an unforgettable evening filled with music, magic, and memories that will last a lifetime.
        </div>
        <br/>
        <div className={styles.title3}>General Info</div>
        <ul>
          <li>📍 Venue: Parus La Défense Arena, Nanterre, France</li>
          <li>📅 Dates and times: Saturday,May 11th,2024, at 7:00PM</li>
          <li>⏳ Duration: A mesmerizing 90-minute performance (doors open 60 minutes prior)</li>
          <li>👤 Age requirement: All agesswelcome. Children under 16 must be accompagnied by an adult.</li>
          <li>♿ Accessibility: this venue is ADA compliant</li>
          <li>❓ View the FAQs for more information</li>
          <li>🪑 Seating: Reserve your spot now and secure your preferred seating arrangement.</li>
          <li>🕯️ If you would like to book a private concert (min 15+ people), please click here</li>
          <li>🎻 Explore more concerts in New York and beyond</li>
          <li>🎁 Treat your loved ones with tickets to Taylor Swift's concert</li>
        </ul>
        <div className={styles.title3}>Tentative Program</div>
        <ul>
          <li>• Electrifying Opening Act</li>
          <li>• Unforgettable Hits from Taylor's Iconic Repertoire</li>
          <li>• Special Surprises and Guest Appearances</li>
          
        </ul>
        <div className={styles.title3}>Performers</div>
        <p>• Taylor Swift and her talented band</p>
        <div className={styles.title3}>Reviews of Taylor Swift's Concerts:</div>
        <ul>
          <li>💬  Emma L. ⭐⭐⭐⭐⭐: "Taylor Swift's energy on stage is contagious, and her music speaks to the soul."</li>
          <li>💬  Mark D. ⭐⭐⭐⭐⭐: "An evening with Taylor Swift is like stepping into a fairytale. Absolutely magical!"</li>
          <li>💬 Sarah & James ⭐⭐⭐⭐⭐: "Taylor's concert was the highlight of our year. We danced, we sang, we laughed. Pure joy!"</li>
        </ul>
        <div className={styles.title3}>Concert Seating</div>
        <div className={styles.seatingDiagram}>
        Elevate your concert experience with our exclusive VIP seating options.
        </div>
        <br/>
        <p>Don't miss out on this extraordinary event! Reserve your tickets now and be part of a night to remember with Taylor Swift. 🎶✨</p>
      </div>
    </div>
  </div>

   {/* Conteneur pour le texte en haut à droite */}
   <div className={styles.container2}>
        <div className={styles.textContainer2}>
          <ul className={styles.ul}>
            <li className={styles.li}><span className={styles.bold0}>Select date and session</span></li>
            <li className={styles.li}><span className={styles.bold1}>Thu <br/> 11May 7PM </span></li>
            <li className={styles.li}><span className={styles.bold}>Zone C</span> $35.00</li>
            <li className={styles.li}><span className={styles.bold}>Zone B</span> $45.00 + $4.00 <br/> booking fee</li>
            <li className={styles.li}><span className={styles.bold}>Zone A</span> $65.00 + $5.77 <br/> booking fee</li>
            <li className={styles.li}><span className={styles.bold}> - 1ticket + </span>  </li>
            <li className={styles.li}><button className={styles.button}> Get </button></li>
          </ul>
        </div>
      </div>
      </div>

</Fragment>    
  )
}

export default Event3