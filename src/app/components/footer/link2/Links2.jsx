'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'
import Styles from './links2.module.css'


const tab= [
    {
        title: 'Home',
        path: '/'
   },
   {
       title: 'About',
       path: "/about"
  },

  {
   title: 'Contact',
   path: '/contact'
}
]
const Links2 = () => {
    const pathname2 = usePathname();
  return (
    <Fragment>
<div className={Styles.containerLink}>
{tab.map((element, index) => (
           <Link
              className={element.path === pathname2 ? `${Styles.active}` : ''}
                key={index}
                href={element.path}>
                {element.title}
            </Link>
                            ))}
</div>
    </Fragment>
  )
}

export default Links2