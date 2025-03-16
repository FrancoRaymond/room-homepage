import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/logo.svg'
import hamburgerMenu from '../assets/images/icon-hamburger.svg'
import closeMenu from '../assets/images/icon-close.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null) 

    const handleMenuClick = () => {
        setMenuOpen((prevMenu) => !prevMenu)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setMenuOpen(false); 
            }
        }
    
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    useEffect(() => {
        if (navRef.current) {
            if (menuOpen) {
                navRef.current.classList.add('active')
            } else {
                navRef.current.classList.remove('active')
            }
        }
    }, [menuOpen])

    return (
        <div className='navbar'>
            <div>
                {!menuOpen ? (
                    <img src={hamburgerMenu} onClick={handleMenuClick} alt="menu" className='menuIcon'/>
                ) : null}
            </div>
            <img src={logo} alt="logo" />
            <nav ref={navRef} className=''>
                {menuOpen && (
                    <img src={closeMenu} onClick={handleMenuClick} alt="close" className='closeIcon'/>
                )}
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
            <div className='empty'></div>
        </div>
    )
}

export default Navbar



