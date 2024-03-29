'use client';
import { Fragment,useState, useEffect } from "react";
import Styles from "./home.module.css"



export default function Home() {
  const [currentImage, setCurrentImage]= useState(0);
  const images= [
    "./ImageIntro/Image0.jpg",
    "./ImageIntro/Image1.jpg",
    "./ImageIntro/image2.jpeg",
    "./ImageIntro/Image3.jpg",
    "./ImageIntro/Image4.jpg",
    "./ImageIntro/Image5.jpg",
    "./ImageIntro/Image6.jpg",
    "./ImageIntro/Image7.jpg",
    "./ImageIntro/Image8.jpg",
    "./ImageIntro/Image9.jpeg",
    "./ImageIntro/Image10.jpeg",
    "./ImageIntro/Image11.jpeg",
    "./ImageIntro/Image12.jpeg",
    "./ImageIntro/Image13.jpeg",
    "./ImageIntro/Image14.jpeg",
    "./ImageIntro/Image15.jpeg",
    "./ImageIntro/Image16.jpg",
    "./ImageIntro/Image17.jpg",
    "./ImageIntro/Image18.jpg",
    "./ImageIntro/Image19.jpeg",
    "./ImageIntro/Image20.jpeg",

  ];
  useEffect(()=> {
    const interval= setInterval(()=> {
      setCurrentImage((prevIndex)=>(prevIndex+1)% images.length);
    
    },2500);
    return ()=> clearInterval (interval);
  }, [images.length])

  return (
  
    <main>
       <Fragment>
        <div className={Styles.Container}> 
        <div className={Styles.Titre}> <h1> 🎉 Explore the Emotion of Events! 🎉</h1> </div>

        <div className={Styles.imageContainer}>
          
        <img src={images[currentImage]} alt= {`Image ${currentImage+1}`} height={100} width={250}/>
        </div>


<div className={Styles.intro}> Dive into a world where every moment becomes an unforgettable experience. At Aurore, we're passionate about crafting events that transcend expectations and leave a lasting imprint in your memories. </div>

<div className={Styles.Titre}>  🌟 Our Featured Events: </div>
<div>
<ol>
  <li>
 1. Enchanting Concerts: Feel the pulse of the music at our enchanting concerts where the most talented artists take you on an unforgettable sonic journey. Dance under the stars and let the music carry you away.
  </li>
  <li>2. CandleLight: Immerse yourself in an intimate and cozy ambiance with our CandleLight events. Amidst the glow of candles, experience captivating artistic performances, exquisite tastings, and moments of pure magic.</li>
<li>3. Love Festivals:  Celebrate love in all its forms at our festivals dedicated to lovers. From romantic encounters to starlit evenings, let us create unforgettable memories for you and your significant other.</li>
<li>4. Art Exhibitions: Delve into a world of creativity and beauty with our art exhibitions. Discover breathtaking masterpieces, meet inspiring artists, and be transported by art in all its forms.</li>
<li>5. Bespoke Events: Whether it's a birthday, a wedding, or a special gathering, we create tailor-made events that captivate hearts and leave a lasting impression. Every detail is carefully orchestrated to create a unique and unforgettable experience.</li>
</ol> <br></br>
</div>

<div className={Styles.intro}> No matter the event you envision, our dedicated team is here to turn your dreams into reality. Contact us today and let us bring your wildest ideas to life!</div>

<div className={Styles.Titre}> ✨ AURORE - Awaken the extraordinary in every event. ✨
</div>
        </div>
      </Fragment>
     

    </main>
   
  );
}
