'use client';
import Link from 'next/link'
import React, { Fragment, useState, useEffect } from 'react'
import Styles from './links.module.css'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const tab= [
    {
         title: 'Home',
         path: '/'
    },
    {
        title: 'Evenements',
        path: '/evenement'
   },


{
    title: 'Contact',
    path: '/contact'
}
]
const Links = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mobileMode, setMobileMode] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setMobileMode(true);
            } else {
                setMobileMode(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onClickHandler = () => {
        setOpen(!open);
    };

    return (
        <Fragment>
            <div className={Styles.containerLinks}>
                {tab.map((element, index) => (
                    <Link
                        className={element.path === pathname ? `${Styles.active}` : ''}
                        key={index}
                        href={element.path}
                    >
                        {element.title}
                    </Link>
                ))}
            </div>
            {mobileMode && (
                <Fragment>
                    <button className={Styles.mobileButton} onClick={ onClickHandler}>
                        <FontAwesomeIcon icon={faBars} /> {/* Icône de menu hamburger */}
                    </button>
                    {open && (
                        <div className={Styles.containerMobile}>
                            {tab.map((element, index) => (
                                <Link
                                    className={element.path === pathname ? `${Styles.active}` : ''}
                                    key={index}
                                    href={element.path}
                                >
                                    {element.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
  )
}

export default Links