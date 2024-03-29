'use client';
import React from 'react'
import Link from 'next/link';
import Styles from './card.module.css'


const CardComponent = (props) => {
  return (
    <>
    <div className={Styles.container}>
        <Link href={props.link}> 
      
    <div className={Styles.topCard}>{props.topCard}</div>
    <div className={Styles.avatarContainer}>
    {
    props.hasAvatar && ( 
    <div className={Styles.avatar}> {props.imageAvatar} </div>
       )
        }
   
        </div>
        <div>
        <div className={Styles.title}>{props.Name}
          
        </div>
        <div>
            {props.description}
            <button className={Styles.readButton}>More..</button>
        </div>
    
     </div>
     
     </Link>
    </div>
    </>
   
  );
};

export default CardComponent