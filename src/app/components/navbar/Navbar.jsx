'use client'
import React, { useState, useEffect, Fragment } from 'react'
import Links from './links/Links'
import Styles from './navbar.module.css'

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);
 
  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.pageYOffset;

          if (scrollTop > 0) {
              setScrolling(true);
          } else {
              setScrolling(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Fragment>
      <div className={`${Styles.container} ${scrolling ? Styles.scrolling : ''}`}>
           <p className={Styles.logo}> Aurore</p>
            <Links/>
            
        </div>
    </Fragment>
  )
}

export default Navbar