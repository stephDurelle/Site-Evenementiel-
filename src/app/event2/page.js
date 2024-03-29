import React, { Fragment } from 'react'
import styles from "./event2.module.css"

const Event2 = () => {
  return (
    <Fragment>
      <div className={styles.Contain}> 
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img src='/logo/restaurant.jpg' alt='Restaurant' width={200} height={200}/>
    
      <div className={styles.title1}>
        <h2>Lover exclusive</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      
      <div className={styles.title2}>
        <h1>A Valentine's Day</h1>
      </div>
      <div className={styles.text}>
        <div className={styles.text2}>
        ⭐ Love's Symphony: Indulge in an enchanting Valentine's dinner at the illustrious Grand Opera House, where every note of romance will be played to perfection. Join us for an evening of passion and melody as our candlelit ambiance sets the stage for an unforgettable experience.
        </div>
        <br/>
        <div className={styles.title3}>General Info</div>
        <ul>
          <li>📍 Venue: The Opera House</li>
          <li>📅 Dates: Febuary 14th,2024</li>
          <li>⏳ Duration: 3 hours of enchantement (doors open 60 mins prior)</li>
          <li>👤 Age requirement: All ages welcome</li>
          <li>♿ Accessibility: ADA compliant</li>
          <li>❓ View the FAQs here</li>
          <li>🪑 Seating is limited, book your spot early</li>
          <li>🕯️ If you would like to book a private concert (min 15+ people), please click here</li>
          <li>🎻 Check out all the Candlelight concerts in New York</li>
          <li>🎁 Suprise your loved ones with a Valentine's gift card</li>
        </ul>
        <div className={styles.title3}>Tentative Program</div>
        <ul>
          <li>• Prelude to Love</li>
          <li>• Romantic Overtures</li>
          <li>• Sonata of Affection</li>
          <li>• Serenade under the Stars</li>
          <li>• Rhapsody of Devotion</li>
        </ul>
        <div className={styles.title3}>Performers</div>
        <p>• Symphony Orchestra conducted by Maestro David</p>
        <p>• Soloists: Maria Sanchez, Johnathan Lee</p>
        <p>• Special Guest: Acclaimed Pianist, Olivia Smith</p>
        <div className={styles.title3}>Reviews of Love's Symphony:</div>
        <ul>
          <li>💬 "A mesmerizing performance that touched the depths of our hearts." - Emily R.</li>
          <li>💬  "An evening of pure magic and splendor, we'll cherish forever." - Michael & Sarah</li>
          <li>💬 "The perfect setting for a romantic rendezvous, bravo to the performers!" - Thomas & Isabella</li>
        </ul>
        <div className={styles.title3}>Restaurant Seating</div>
        <div className={styles.seatingDiagram}>
        Indulge in our VIP seating for an elevated experience.
        </div>
        <br/>
        <p>For reservations and inquiries, please contact us at 318 981 87xx or restaurant14@email.com. <br/>

 <br/> Let Love's Symphony be the soundtrack to your Valentine's celebration. Reserve your seats today and make this Valentine's Day a symphony of love. 🎶💖</p>
      </div>
    </div>
  </div>

   {/* Conteneur pour le texte en haut à droite */}
   <div className={styles.container2}>
        <div className={styles.textContainer2}>
          <ul className={styles.ul}>
            <li className={styles.li}><span className={styles.bold0}>Select date and session</span></li>
            <li className={styles.li}><span className={styles.bold1}>Thu <br/> 14Feb 8PM </span></li>
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

export default Event2