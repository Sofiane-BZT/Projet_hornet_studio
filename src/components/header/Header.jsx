import React, {useState} from 'react'
import "./header.css"
import { Link } from "react-router-dom"


export const Header = () => {

    const [Mobile, setMobile] = useState(false);

  return (

    <header>
            <nav>
                <div className='logo'>
                    <img src="./assets/hornet_studio_logo.svg" alt="hornet_std_logo" className='img_logo'/>
                </div>
                <div className='list'>
               
                        <ul className= {Mobile ? "navMenu-list" : "essai"} onClick={() => setMobile(false)}>
                    <Link to='/' >Accueil</Link>
                    <Link to='/piercing' >Piercing</Link>
                    <Link to='/shop' >Shop</Link>
                    <Link to='/achievements' >Réalisations</Link>
                    <Link to='/faq' >FAQ</Link>
                    <Link to='/contact' >Contact</Link>
                    <Link to='/reservation' >Réservation</Link>
                        </ul>
                   
                </div>
                <div className='hamburger'>
                <button className='hamburger_button' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <i className="fa-solid fa-circle"></i> : <i className="fa-solid fa-bars fa-xl"></i>}
                </button>
                </div>
            </nav>
        
    </header>
    
  )
}
export default Header
